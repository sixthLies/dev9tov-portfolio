import {
  axiosLogo,
  comfyLogo,
  cssLogo,
  nodejsLogo,
  flstudioLogo,
  gdocsLogo,
  geminiLogo,
  ghatGPTLogo,
  github,
  gitLogo,
  grokLogo,
  htmlLogo,
  jsLogo,
  midjourneyLogo,
  perplexityLogo,
  photoshopLogo,
  postgresqlLogo,
  premiereproLogo,
  procreateLogo,
  qwenLogo,
  reactRouterLogo,
  reduxLogo,
  sassLogo,
  soraLogo,
  sunoLogo,
  tailwindLogo,
  viteLogo,
  vsstudioLogo,
  reactLogo,
  claudeLogo,
  ollamaLogo,
  dockerLogo,
  n8nLogo,
  jiraLogo,
  notionLogo,
  gSheetsLogo,
  onecLogo,
  exelLogo,
  wordLogo,
  anydeskLogo,
  windowsLogo,
  postmanLogo,
  jsonLogo,
  figmaLogo,
  ubuntuLogo,
  powershellLogo,
  aistudioLogo,
  civitaiLogo,
} from "@/shared/assets/icons"

export const resources = {
  // Frontend
  // базовые
  html: { href: "https://developer.mozilla.org/docs/Web/HTML", logo: htmlLogo },
  css: { href: "https://developer.mozilla.org/docs/Web/CSS", logo: cssLogo },
  js: {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    logo: jsLogo,
  },
  // фреймворк и экосистема
  react: { href: "https://react.dev/", logo: reactLogo },
  reactRouter: { href: "https://reactrouter.com/", logo: reactRouterLogo },
  axios: { href: "https://axios-http.com/docs/api_intro", logo: axiosLogo },
  // стилизация
  scss: { href: "https://sass-lang.com/", logo: sassLogo },
  tailwind: { href: "https://tailwindcss.com/", logo: tailwindLogo },
  // UI/UX и дизайн
  figma: { href: "https://www.figma.com/", logo: figmaLogo },
  // управление состоянием
  rtk: { href: "https://redux-toolkit.js.org/", logo: reduxLogo },
  // сборка и среда выполнения
  vite: { href: "https://vite.dev/", logo: viteLogo },
  nodejs: { href: "https://nodejs.org/en", logo: nodejsLogo },
  // база данных
  postgres: { href: "https://www.postgresql.org/", logo: postgresqlLogo },

  // форматы данных
  json: { href: "https://www.json.org/json-ru.html", logo: jsonLogo },

  // работа с API
  postman: { href: "https://www.postman.com/", logo: postmanLogo },

  // Операционные системы
  windows: {
    href: "https://www.microsoft.com/en-us/windows/",
    logo: windowsLogo,
  },
  ubuntu: {
    href: "https://ubuntu.com/",
    logo: ubuntuLogo,
  },
  powershell: {
    href: "https://aka.ms/powershell",
    logo: powershellLogo,
  },

  // контроль версий
  git: { href: "https://git-scm.com/", logo: gitLogo },
  github: { href: "https://github.com/", logo: github },
  // контейнеризация
  docker: { href: "https://www.docker.com/", logo: dockerLogo },
  // автоматизация
  n8n: { href: "https://n8n.io/", logo: n8nLogo },

  // AI
  // LLM-платформы
  chatgpt: { href: "https://chatgpt.com/", logo: ghatGPTLogo },
  perplexity: { href: "https://www.perplexity.ai/", logo: perplexityLogo },
  claude: { href: "https://claude.ai/", logo: claudeLogo },
  gemini: { href: "https://gemini.google.com/", logo: geminiLogo },
  grok: { href: "https://x.ai", logo: grokLogo },
  googleAIStudio: { href: "https://aistudio.google.com/", logo: aistudioLogo },
  // Локальные модели
  qwen: { href: "https://qwen.ai/home", logo: qwenLogo },
  ollama: { href: "https://ollama.com/", logo: ollamaLogo },
  // Инструменты
  comfy: { href: "https://www.comfy.org", logo: comfyLogo },
  // AI-экосистема и модели
  civitai: {
    href: "https://civitai.com/",
    logo: civitaiLogo,
  },
  // Генеративный AI
  midjourney: { href: "https://www.midjourney.com/home", logo: midjourneyLogo },
  veo3: { href: "https://aistudio.google.com/models/veo-3", logo: geminiLogo },
  sora: { href: "https://sora.com/", logo: soraLogo },
  suno: { href: "https://suno.com/", logo: sunoLogo },

  // Softwares
  // Разработка
  vscode: { href: "https://code.visualstudio.com/", logo: vsstudioLogo },
  // Дизайн
  photoshop: {
    href: "https://www.adobe.com/ru/products/photoshop.html",
    logo: photoshopLogo,
  },
  procreate: { href: "https://procreate.com/", logo: procreateLogo },
  // Видео и звук
  premiere: {
    href: "https://www.adobe.com/products/premiere.html#modal-hash",
    logo: premiereproLogo,
  },
  flStudio: { href: "https://www.image-line.com/", logo: flstudioLogo },
  // Офис и продуктивность
  gdocs: {
    href: "https://workspace.google.com/intl/ru/products/docs/",
    logo: gdocsLogo,
  },
  notion: { href: "https://www.notion.so/", logo: notionLogo },
  jira: { href: "https://www.atlassian.com/ru/software/jira", logo: jiraLogo },
  gsheets: {
    href: "https://workspace.google.com/intl/ru/products/sheets/",
    logo: gSheetsLogo,
  },
  excel: { href: "https://excel.cloud.microsoft/ru-ru/", logo: exelLogo },
  word: { href: "https://word.cloud.microsoft/ru-ru/", logo: wordLogo },
  // Удаленный доступ
  anydesk: { href: "https://anydesk.com/ru", logo: anydeskLogo },
  // Бизнес-софт
  onec: { href: "https://1c.ru/", logo: onecLogo },
}

export const skillsInfo = [
  {
    id: "tools",
    title: "Инструменты и программы",
    groups: [
      {
        label: "Разработка",
        items: [{ name: "Visual Studio Code", key: "vscode" }],
      },
      // {
      //   label: "Дизайн",
      //   items: [
      //     { name: "Adobe Photoshop", key: "photoshop" },
      //     { name: "Procreate", key: "procreate" },
      //   ],
      // },
      // {
      //   label: "Видео и звук",
      //   items: [
      //     { name: "Adobe Premiere Pro", key: "premiere" },
      //     { name: "FL Studio", key: "flStudio" },
      //   ],
      // },
      {
        label: "Офис и продуктивность",
        items: [
          { name: "Google Docs", key: "gdocs" },
          { name: "Google Sheets", key: "gsheets" },
          { name: "Word", key: "word" },
          { name: "Excel", key: "excel" },
          { name: "Notion", key: "notion" },
          { name: "Jira", key: "jira" },
        ],
      },
      {
        label: "Удаленный доступ",
        items: [{ name: "AnyDesk", key: "anydesk" }],
      },
      {
        label: "Бизнес-софт",
        items: [{ name: "1C", key: "onec" }],
      },
    ],
  },
  {
    id: "frontend",
    title: "Веб-разработка",
    groups: [
      {
        label: "База",
        items: [
          { name: "HTML5", key: "html" },
          { name: "CSS3", key: "css" },
          { name: "JavaScript", key: "js" },
        ],
      },
      {
        label: "Фреймворк и экосистема",
        items: [
          { name: "React", key: "react" },
          { name: "React Router", key: "reactRouter" },
          { name: "Axios", key: "axios" },
        ],
      },
      {
        label: "Стилизация",
        items: [
          { name: "SCSS", key: "scss" },
          { name: "TailwindCSS", key: "tailwind" },
        ],
      },
      {
        label: "UI/UX и дизайн",
        items: [{ name: "Figma", key: "figma" }],
      },
      {
        label: "Управление состоянием",
        items: [{ name: "Redux Toolkit", key: "rtk" }],
      },
      {
        label: "Сборка и среда выполнения",
        items: [
          { name: "Vite", key: "vite" },
          { name: "Node.js", key: "nodejs" },
        ],
      },
    ],
  },

  {
    id: "backend",
    title: "Бэкенд и данные",
    groups: [
      {
        label: "База данных",
        items: [{ name: "PostgreSQL", key: "postgres" }],
      },
      {
        label: "Форматы данных",
        items: [{ name: "JSON", key: "json" }],
      },
      {
        label: "Работа с API",
        items: [
          { name: "Axios", key: "axios" },
          { name: "Postman", key: "postman" },
        ],
      },
    ],
  },

  {
    id: "devops",
    title: "Инфраструктура и процессы",
    groups: [
      {
        label: "Операционные системы",
        items: [
          { name: "Windows", key: "windows" },
          { name: "Ubuntu", key: "ubuntu" },
        ],
      },
      {
        label: "Командная строка",
        items: [{ name: "PowerShell", key: "powershell" }],
      },
      {
        label: "Контроль версий",
        items: [
          { name: "Git", key: "git" },
          { name: "GitHub", key: "github" },
        ],
      },
      {
        label: "Контейнеризация",
        items: [{ name: "Docker", key: "docker" }],
      },
      {
        label: "Автоматизация",
        items: [{ name: "n8n", key: "n8n" }],
      },
    ],
  },

  {
    id: "ai",
    title: "AI и нейросети",
    groups: [
      {
        label: "LLM-платформы",
        items: [
          { name: "ChatGPT", key: "chatgpt" },
          { name: "Claude", key: "claude" },
          { name: "Gemini", key: "gemini" },
          { name: "Google AI Studio", key: "googleAIStudio" },
          { name: "Perplexity", key: "perplexity" },
          { name: "Grok", key: "grok" },
        ],
      },
      // {
      //   label: "Локальные модели",
      //   items: [
      //     { name: "Ollama", key: "ollama" },
      //     { name: "Qwen", key: "qwen" },
      //   ],
      // },
      {
        label: "Инструменты",
        items: [{ name: "ComfyUI", key: "comfy" }],
      },
      // {
      //   label: "AI-экосистема и модели",
      //   items: [{ name: "Civitai", key: "civitai" }],
      // },
      {
        label: "Генеративный AI",
        items: [
          { name: "MidJourney", key: "midjourney" },
          { name: "Sora", key: "sora" },
          { name: "Veo 3", key: "veo3" },
          { name: "SunoAI", key: "suno" },
        ],
      },
    ],
  },
]
