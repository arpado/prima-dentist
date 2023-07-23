import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import App from './App.vue'
import en from './locales/en.json'
import hu from './locales/hu.json'

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

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
app.use(Vue3Toastify, {
  autoClose: 5000,
  theme: 'dark'
});
app.mount('#app')
