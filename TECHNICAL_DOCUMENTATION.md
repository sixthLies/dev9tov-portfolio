# Техническая документация проекта HH.ru

Дата анализа: 26 февраля 2026

## 1. Обзор проекта
Проект представляет собой frontend-портфолио на React с архитектурой, близкой к FSD, и глобальной SCSS-системой в стиле SMACSS.

- Анализ выполнен по реальным файлам (исключены `node_modules`, `dist`, `.git`, `build`).
- Кодовая база: 297 файлов в репозитории (без служебных директорий), из них 286 в `src`.
- Распределение слоев `src`: `shared=128`, `pages=122`, `widgets=18`, `app=10`, `features=7`, `entities=1`.

Статус quality gates:
- `npm.cmd run build`: успешно (bundle `index.js` ~392 KB, `index.css` ~39 KB).
- `npm.cmd run lint`: ошибка из-за отсутствующего пакета `eslint-plugin-feature-sliced-design-architecture`.

Ключевые точки входа:
- `src/app/entry/main.jsx`
- `src/app/layout/App.jsx`
- `src/app/routing/router.jsx`

## 2. Технологический стек
- UI: React 19.
- Роутинг: `react-router` v7 (`createBrowserRouter`, nested routes).
- Сборка: Vite через `rolldown-vite`.
- Стили: SCSS + CSS custom properties, SMACSS-структурирование.
- Линтинг: ESLint 9 + React Hooks + import rules + FSD plugin (конфиг сейчас несогласован с зависимостями).
- Типизация: JavaScript-проект, TypeScript не используется.

## 3. Архитектурный подход
- Базовый паттерн: FSD-структура `app/pages/widgets/features/entities/shared`.
- Граф зависимостей по импортам: `app -> pages/widgets`, `pages -> shared`, `widgets -> shared`, `features -> shared`.
- Нарушений класса `shared -> pages` не обнаружено.
- Композиция: страницы собираются из мелких UI-блоков и `model`-конфигов.
- State management: локальный state + custom hooks (`useState`, `useEffect`, `useRef`), глобального store нет.
- Routing: централизован в `app/routing`.
- API-слой: внешнего API нет; в `video` реализован mock async fetch.
- Типизация моделей: через соглашения и структуру данных, без compile-time type safety.
- Масштабируемость: сильная в `pages/shared`, слабое место — незаполненный слой `entities`.

## 4. Структура директорий (дерево)
```text
src
├── app (entry, layout, routing)
├── entities (пока пусто, только index.js)
├── features (contact-me)
├── pages (about, contacts, home, not-found, projects, skills)
├── shared (assets, config, styles, ui)
└── widgets (header, footer, stars)
```

Дополнительно:
- `pages/projects/child-pages`: `images`, `video`, `music`, `assigments`
- `shared/styles`: `base`, `theme`, `layout`, `modules`, `state`, `pages`, `components`, `configs`

## 5. Детальное описание FSD
### app
Инициализация приложения, layout-каркас, роутер и маршруты.

### pages
Основной пользовательский контент и page-level композиция.

### widgets
Крупные переиспользуемые блоки уровня каркаса (header/footer/background).

### features
Изолированные пользовательские сценарии (например, `contact-me`).

### entities
Слой объявлен, но фактически не используется (пустой `index.js`).

### shared
Библиотека переиспользуемых примитивов: UI-компоненты, ассеты, конфиги, стили, общие утилиты.

## 6. Принципы разработки
- Именование: BEM + class maps в `model/classes.js`.
- Разделение ответственности: `ui` / `model` / `lib`.
- Переиспользование: `Cards`, `InfoBlock`, `LinksBlock`, модалки, списки в `shared/ui`.
- SOLID-подход: заметен SRP в hooks (`useVideosList`, `useVideoModal`, `useInfiniteImages`), местами есть смешение обязанностей.
- Модульность: высокая в `about` и `projects/child-pages`.
- Тестирование: отсутствует (`*.test.*`, `*.spec.*` не найдены).
- Форматирование: Prettier/Stylelint конфиги отсутствуют.

## 7. Инженерные решения
- Централизация роутинга + фабрики маршрутов (`paths`, `routeFactories`).
- Data-driven страницы через `pageConfig`.
- Выделенный техдок по SMACSS-рефактору (`SMACSS_REFACTOR_TECHDOC.txt`).
- Токенизированная тема (`theme/tokens.scss`) и state-слой (`is-open`, `is-active`, `has-error`).
- Композиционный hook для complex UI (`useVideoPageLogic`).

## 8. Паттерны и best practices
- Декларативная сборка UI через массивы конфигов.
- Разделение modal/infinite-scroll логики в отдельные hooks.
- A11y-практики: `aria-*`, обработка `Escape`, фокус в модалках.
- Responsive-подход через SCSS mixins и breakpoint abstraction.

## 9. Сильные стороны проекта
- Четкий архитектурный каркас (FSD + SMACSS).
- Высокая читаемость структуры и предсказуемость организации файлов.
- Системная организация CSS (tokens/layers/state).
- Хорошая декомпозиция сложных интерактивных зон.
- Проект успешно собирается production build-командой.

## 10. Рекомендации по развитию
1. Починить lint-контур: синхронизировать `eslint.config.js` и `package.json` по FSD-плагину.
2. Заполнить `entities` (или упростить слои, если доменный слой пока не нужен).
3. Добавить базовые тесты: smoke/e2e для роутинга и критичных модальных сценариев.
4. Исправить HTML/a11y-замечания:
   - вложенный `<a>` в `<button>` (`shared/ui/buttons/MailButton.jsx`),
   - `target="_blank"` без `rel` (`shared/ui/modals/modalWindowCard/components/SocialLink.jsx`).
5. Свести к единому источнику навигационные пути (`routing/const/paths` vs `shared/config/navigation`).
6. Убрать/реализовать незавершенные участки:
   - `HeaderCta`, `fontLink`,
   - пустые `entities/index.js`, `video.classes.js`,
   - заглушки `MusicPage`, `AssigmentsPage`.
7. Добавить типизацию (TypeScript или runtime schema validation для `pageConfig`/данных).
8. Обновить `README.md` (сейчас шаблонный текст Vite).

## 11. Заключение
Проект демонстрирует зрелый инженерный фундамент: системное мышление, дисциплину слоев, аккуратную модульность и внимание к UI-состояниям.

При доведении quality-gates (lint/tests/типизация) и консолидации архитектурных слоев проект может использоваться как production-grade reference для демонстрации уровня frontend-разработчика.
