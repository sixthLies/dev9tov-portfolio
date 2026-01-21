import {
  ai,
  axiosLogo,
  comfyLogo,
  cssLogo,
  flstudioLogo,
  fluxLogo,
  gdocsLogo,
  geminiLogo,
  ghatGPTLogo,
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
  software,
  sonautoLogo,
  soraLogo,
  sunoLogo,
  tailwindLogo,
  ui,
  viteLogo,
  vsstudioLogo,
  wanLogo,
} from "../../shared/assets/icons"

export const resources = {
  html: { href: "https://developer.mozilla.org/docs/Web/HTML", logo: htmlLogo },
  css: { href: "https://developer.mozilla.org/docs/Web/CSS", logo: cssLogo },
  js: {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    logo: jsLogo,
  },
  scss: { href: "https://sass-lang.com/", logo: sassLogo },
  tailwind: { href: "https://tailwindcss.com/", logo: tailwindLogo },
  reactRouter: { href: "https://reactrouter.com/", logo: reactRouterLogo },
  axios: { href: "https://axios-http.com/docs/api_intro", logo: axiosLogo },
  vite: { href: "https://vite.dev/", logo: viteLogo },
  rtk: { href: "https://redux-toolkit.js.org/", logo: reduxLogo },
  postgres: { href: "https://www.postgresql.org/", logo: postgresqlLogo },
  comfy: { href: "https://www.comfy.org", logo: comfyLogo },
  qwen: { href: "https://qwen.ai/home", logo: qwenLogo },
  flux: { href: "https://flux.com.ru/", logo: fluxLogo },
  wan: { href: "https://wan.video/", logo: wanLogo },
  nanabanana: { href: "https://nanabanana.ai/", logo: nanoBananaLogo },
  gemini: { href: "https://gemini.google.com/", logo: geminiLogo },
  grok: { href: "https://x.ai", logo: grokLogo },
  midjourney: { href: "https://www.midjourney.com/home", logo: midjourneyLogo },
  veo3: { href: "https://aistudio.google.com/models/veo-3", logo: geminiLogo },
  sora: { href: "https://sora.com/", logo: soraLogo },
  suno: { href: "https://suno.com/", logo: sunoLogo },
  sonauto: { href: "https://sonauto.ai/", logo: sonautoLogo },
  chatgpt: { href: "https://chatgpt.com/", logo: ghatGPTLogo },
  perplexity: { href: "https://www.perplexity.ai/", logo: perplexityLogo },
  notebookLM: { href: "https://notebooklm.google/", logo: notebooklmLogo },
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
}

export const skillsInfo = [
  {
    id: "frontend",
    title: "Frontend",
    img: ui,
    groups: [
      {
        label: "База: ",
        items: [
          { name: "HTML5", key: "html" },
          { name: "CSS", key: "css" },
          { name: "JavaScript", key: "js" },
        ],
      },
      {
        label: "Стили: ",
        items: [
          { name: "SCSS", key: "scss" },
          { name: "TailwindCSS", key: "tailwind" },
        ],
      },
      {
        label: "React‑экосистема: ",
        items: [
          { name: "React Router", key: "reactRouter" },
          { name: "Axios", key: "axios" },
          { name: "Vite", key: "vite" },
        ],
      },
      {
        label: "State‑manager: ",
        items: [{ name: "Redux Toolkit", key: "rtk" }],
      },
      {
        label: "База данных: ",
        items: [{ name: "PostgreSQL", key: "postgres" }],
      },
    ],
  },
  {
    id: "ai",
    title: "Нейросети",
    img: ai,
    groups: [
      {
        label: "ComfyUI: ",
        items: [
          { name: "ComfyUI", key: "comfy" },
          { name: "Qwen", key: "qwen" },
          { name: "Flux-dev", key: "flux" },
          { name: "Wan", key: "wan" },
        ],
      },
      {
        label: "Генеративный AI (изображения): ",
        items: [
          { name: "NanoBanana", key: "nanabanana" },
          { name: "Gemini Pro", key: "gemini" },
          { name: "Grok", key: "grok" },
          { name: "MidJourney", key: "midjourney" },
        ],
      },
      {
        label: "Генеративный AI (видео): ",
        items: [
          { name: "Veo 3", key: "veo3" },
          { name: "Sora", key: "sora" },
        ],
      },
      {
        label: "Генеративный AI (музыка): ",
        items: [
          { name: "SunoAI", key: "suno" },
          { name: "SonautoAI", key: "sonauto" },
        ],
      },
      {
        label: "LLM's: ",
        items: [
          { name: "ChatGPT", key: "chatgpt" },
          { name: "Perplexity", key: "perplexity" },
          { name: "NotebookLM", key: "notebookLM" },
        ],
      },
    ],
  },
  {
    id: "software",
    title: "Программы",
    img: software,
    groups: [
      {
        label: "Графика: ",
        items: [
          { name: "Adobe Photoshop", key: "photoshop" },
          { name: "Procreate", key: "procreate" },
        ],
      },
      {
        label: "Видео: ",
        items: [{ name: "Adobe Premiere Pro", key: "premiere" }],
      },
      {
        label: "Звук: ",
        items: [{ name: "FL Studio", key: "flStudio" }],
      },
      {
        label: "Текст: ",
        items: [
          { name: "VS Code Studio", key: "vscode" },
          { name: "Google Docs", key: "gdocs" },
        ],
      },
    ],
  },
]
