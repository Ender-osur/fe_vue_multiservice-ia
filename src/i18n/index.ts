import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      chat: 'Chat',
      imagesGeneration: 'Images Generation',
      github: 'GitHub',
      aboutUs: 'About Us',
    },
    chat: {
      header: 'Translater',
      placeholder: 'Type a message...',
      send: 'Send',
      userMessage: 'You',
      botMessage: 'Bot',
      lang: 'Language',
    },
    footer: {
      rights: 'Developed by Osur.dev',
    },
    services: {
      title: 'Our Services',
      heroTitle: 'Artificial Intelligence Services',
      heroDescription: 'Explore our AI-powered tools to make your life easier.',
      list: [
        {
          title: 'Smart Translator',
          description: 'Translate texts accurately using OpenAI and DeepSeek.',
          button: 'Explore',
        },
        {
          title: 'Image Generator',
          description: 'Create unique images with our image generation tool.',
          button: 'Explore',
        },
        {
          title: 'Coming Soon',
          description: 'We are working on new tools for you. Stay tuned!',
          button: 'More Information',
        },
      ],
    },
  },
  es: {
    nav: {
      chat: 'Chat',
      imagesGeneration: 'Generación de Imágenes',
      github: 'GitHub',
      aboutUs: 'Sobre Nosotros',
    },
    chat: {
      header: 'Traductor',
      placeholder: 'Escribe un mensaje...',
      send: 'Enviar',
      userMessage: 'Tú',
      botMessage: 'Bot',
      lang: 'Idioma',
    },
    footer: {
      rights: 'Desarrollador por Osur.dev',
    },
    services: {
      title: 'Nuestros Servicios',
      heroTitle: 'Servicios de Inteligencia Artificial',
      heroDescription: 'Explora nuestras herramientas impulsadas por IA para facilitar tu vida.',
      list: [
        {
          title: 'Traductor Inteligente',
          description: 'Traduce textos con precisión utilizando OpenAI y DeepSeek.',
          button: 'Explorar',
        },
        {
          title: 'Generador de Imágenes',
          description: 'Crea imágenes únicas con nuestra herramienta de generación de imágenes.',
          button: 'Explorar',
        },
        {
          title: 'Próximos Servicios',
          description: 'Estamos trabajando en nuevas herramientas para ti. ¡Espéralos pronto!',
          button: 'Más Información',
        },
      ],
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
