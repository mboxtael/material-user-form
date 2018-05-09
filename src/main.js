import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import fontawesome from '@fortawesome/fontawesome';
import { faFemale, faMale } from '@fortawesome/fontawesome-free-solid';

Vue.use(Vuetify);
fontawesome.library.add(faFemale, faMale);

new Vue({
  el: '#app',
  render: h => h(App)
});
