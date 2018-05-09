import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import fontawesome from '@fortawesome/fontawesome';
import { faFemale, faMale, faCamera } from '@fortawesome/fontawesome-free-solid';
import store from './store';

Vue.use(Vuetify);
fontawesome.library.add(faFemale, faMale, faCamera);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
