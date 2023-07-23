import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import App from './App.vue'
import en from './locales/en.json'
import hu from './locales/hu.json'

const i18n = createI18n({
    legacy: false, // Set to false to use the Composition API
    locale: 'en', // Set the default locale
    fallbackLocale: 'en', // Set the fallback locale
    messages: {
      en, // Import English translations
      hu // Import Hungarian translations
    }
  });

const app = createApp(App)
app.use(i18n);
app.mount('#app')
