import {
  axiosLogo,
  comfyLogo,
  cssLogo,
  nodejsLogo,
  flstudioLogo,
  fluxLogo,
  gdocsLogo,
  geminiLogo,
  ghatGPTLogo,
  github,
  gitLogo,
  grokLogo,
  htmlLogo,
  jsLogo,
  midjourneyLogo,
  nanoBananaLogo,
  notebooklmLogo,
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
} from "@/shared/assets/icons"

export const resources = {
  // Frontend
  html: { href: "https://developer.mozilla.org/docs/Web/HTML", logo: htmlLogo },
  css: { href: "https://developer.mozilla.org/docs/Web/CSS", logo: cssLogo },
  js: {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    logo: jsLogo,
  },
  git: { href: "https://git-scm.com/", logo: gitLogo },
  github: { href: "https://github.com/", logo: github },
  nodejs: { href: "https://nodejs.org/en", logo: nodejsLogo },
  scss: { href: "https://sass-lang.com/", logo: sassLogo },
  tailwind: { href: "https://tailwindcss.com/", logo: tailwindLogo },
  react: { href: "https://react.dev/", logo: reactLogo },
  reactRouter: { href: "https://reactrouter.com/", logo: reactRouterLogo },
  axios: { href: "https://axios-http.com/docs/api_intro", logo: axiosLogo },
  vite: { href: "https://vite.dev/", logo: viteLogo },
  rtk: { href: "https://redux-toolkit.js.org/", logo: reduxLogo },
  postgres: { href: "https://www.postgresql.org/", logo: postgresqlLogo },
  docker: { href: "https://www.docker.com/", logo: dockerLogo },
  n8n: { href: "https://n8n.io/", logo: n8nLogo },
  windows: { href: "https://n8n.io/", logo: windowsLogo },
  postman: { href: "https://n8n.io/", logo: postmanLogo },

  // AI
  comfy: { href: "https://www.comfy.org", logo: comfyLogo },
  qwen: { href: "https://qwen.ai/home", logo: qwenLogo },
  flux: { href: "https://flux.com.ru/", logo: fluxLogo },
  nanabanana: { href: "https://nanabanana.ai/", logo: nanoBananaLogo },
  gemini: { href: "https://gemini.google.com/", logo: geminiLogo },
  grok: { href: "https://x.ai", logo: grokLogo },
  midjourney: { href: "https://www.midjourney.com/home", logo: midjourneyLogo },
  veo3: { href: "https://aistudio.google.com/models/veo-3", logo: geminiLogo },
  sora: { href: "https://sora.com/", logo: soraLogo },
  suno: { href: "https://suno.com/", logo: sunoLogo },
  chatgpt: { href: "https://chatgpt.com/", logo: ghatGPTLogo },
  perplexity: { href: "https://www.perplexity.ai/", logo: perplexityLogo },
  notebookLM: { href: "https://notebooklm.google/", logo: notebooklmLogo },
  claude: { href: "https://claude.ai/", logo: claudeLogo },
  ollama: { href: "https://ollama.com/", logo: ollamaLogo },

  // Softwares
  photoshop: {
    href: "https://www.adobe.com/ru/products/photoshop.html",
    logo: photoshopLogo,
  },
  procreate: { href: "https://procreate.com/", logo: procreateLogo },
  premiere: {
    href: "https://www.adobe.com/products/premiere.html#modal-hash",
    logo: premiereproLogo,
  },
  flStudio: { href: "https://www.image-line.com/", logo: flstudioLogo },
  vscode: { href: "https://code.visualstudio.com/", logo: vsstudioLogo },
  gdocs: {
    href: "https://https://workspace.google.com/intl/ru/products/docs/.visualstudio.com/",
    logo: gdocsLogo,
  },
  notion: { href: "https://www.notion.so/", logo: notionLogo },
  jira: { href: "https://www.atlassian.com/ru/software/jira", logo: jiraLogo },
  gsheets: {
    href: "https://workspace.google.com/intl/ru/products/sheets/",
    logo: gSheetsLogo,
  },
  onec: {
    href: "",
    logo: onecLogo,
  },
  exel: {
    href: "",
    logo: exelLogo,
  },
  word: {
    href: "",
    logo: wordLogo,
  },
  anydesk: {
    href: "",
    logo: anydeskLogo,
  },
}

export const skillsInfo = [
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
        items: [{ name: "Windows", key: "windows" }],
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
          { name: "Perplexity", key: "perplexity" },
          { name: "Grok", key: "grok" },
        ],
      },
      {
        label: "Локальные модели",
        items: [
          { name: "Ollama", key: "ollama" },
          { name: "Qwen", key: "qwen" },
        ],
      },
      {
        label: "Инструменты",
        items: [{ name: "ComfyUI", key: "comfy" }],
      },
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

  {
    id: "tools",
    title: "Инструменты и программы",
    groups: [
      {
        label: "Разработка",
        items: [{ name: "Visual Studio Code", key: "vscode" }],
      },
      {
        label: "Дизайн",
        items: [
          { name: "Adobe Photoshop", key: "photoshop" },
          { name: "Procreate", key: "procreate" },
        ],
      },
      {
        label: "Видео и звук",
        items: [
          { name: "Adobe Premiere Pro", key: "premiere" },
          { name: "FL Studio", key: "flStudio" },
        ],
      },
      {
        label: "Офис и продуктивность",
        items: [
          { name: "Google Docs", key: "gdocs" },
          { name: "Google Sheets", key: "gsheets" },
          { name: "Word", key: "word" },
          { name: "Exel", key: "exel" },
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
]
