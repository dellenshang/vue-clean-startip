import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
  locale: localStorage.getItem('APP_Lang') || 'ja',
  fallbackLocale: 'ja',
  globalInjection: true,
  legacy: false,
  messages
});
