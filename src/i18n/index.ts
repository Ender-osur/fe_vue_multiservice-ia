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
      botMessage: 'Bot'
    },
    footer: {
      rights: 'Developed by Osur.dev',
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
      botMessage: 'Bot'
    },
    footer: {
      rights: 'Desarrollador por Osur.dev',
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
