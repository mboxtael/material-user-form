<template>
  <v-flex xs12>
    <v-card-title>
      <h3>Datos personales</h3>
    </v-card-title>
    <v-flex xs12 layout>
      <v-flex
        md2
        text-xs-center
        layout
        align-center
        justify-center
      >
        <avatar />
      </v-flex>
      <v-flex md10 layout row wrap>
        <v-flex md6>
          <v-text-field
            :value="name"
            @input="onInput('name', $event)"
            label="Nombre*"
          ></v-text-field>
        </v-flex>
        <v-flex md6>
          <v-text-field
            :value="lastname"
            @input="onInput('lastname', $event)"
            label="Apellidos"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <input type="radio" id="female" value="female" v-model="genre">
          <label for="female" v-bind:class="{ selected: genre == 'female' }">
            <font-awesome-icon icon="female" fixed-width size="lg" /> Femenino
          </label>
          <input type="radio" id="male" value="male" v-model="genre">
          <label for="male" v-bind:class="{ selected: genre == 'male' }">
            <font-awesome-icon icon="male" fixed-width size="lg" /> Masculino
          </label>
        </v-flex>
      </v-flex>
    </v-flex>
    <v-flex xs12 layout>
      <identifications-list />
    </v-flex>
    <v-flex xs12 layout>
      <v-container class="pt-0">
        <v-card-text class="pl-0 pt-0">Tipo de sangre</v-card-text>
        <v-flex row wrap layout>
          <div d-block v-for="(bloodType, index) in bloodTypes" :key="index">
            <input type="radio" :id="bloodType" :value="bloodType" v-model="bloodTypeSelected">
            <label :for="bloodType" :class="{ selected: bloodType == bloodTypeSelected }">{{bloodType}}</label>
          </div>
        </v-flex>
      </v-container>
    </v-flex>
    <v-flex xs12>
      <v-card-title class="pb-0">
        <h3>Datos de contacto</h3>
      </v-card-title>
      <v-container class="pt-0">
        <v-layout row wrap>
          <v-flex md6>
            <phones-list />
          </v-flex>
          <v-flex md-6>
            <v-text-field
              :value="email"
              label="Correo electrónico"
              @input="onInput('email', $event)"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-flex>
</template>

<script>
  import { mapState } from 'vuex';
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import IdentificationsList from './IdentificationsList';
  import PhonesList from './PhonesList';
  import Avatar from './Avatar';

  export default {
    components: {
      FontAwesomeIcon,
      IdentificationsList,
      PhonesList,
      Avatar
    },
    data: () => ({
      bloodTypes: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Desconocido']
    }),
    computed: {
      genre: {
        get() {
          return this.$store.state.genre;
        },
        set(value) {
          this.$store.commit('updateUser', { value, path: 'genre' });
        }
      },
      bloodTypeSelected: {
        get() {
          return this.$store.state.bloodType;
        },
        set(value) {
          this.$store.commit('updateUser', { value, path: 'bloodType' });
        }
      },
      ...mapState([
        'name',
        'lastname',
        'email'
      ])
    },
    methods: {
      onInput(path, value) {
        this.$store.commit('updateUser', { value, path });
      }
    }
  };
</script>

<style scoped>
  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + label {
    padding: 0.7rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 5px;
  }

  input[type='radio'] + label.selected {
    color: #fff;
    background-color: #27c6da;
    border-color: #27c6da;
    border-radius: 5px;
  }

  input[type='radio'] ~ label {
    margin-right: 10px;
  }
</style>


