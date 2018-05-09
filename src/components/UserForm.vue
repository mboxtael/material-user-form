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
        <v-avatar
          color="grey lighten-4"
          size="64"
        >
          <img src="/public/v.png" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex md10 layout row wrap>
        <v-flex md6>
          <v-text-field
            v-model="name"
            label="Nombre*"
          ></v-text-field>
        </v-flex>
        <v-flex md6>
          <v-text-field
            v-model="lastname"
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
    <v-flex xs12 layout row wrap>
      <v-container class="pt-0">
        <v-card-text class="pl-0">Tipo de sangre</v-card-text>
        <v-layout row wrap>
          <div v-for="(bloodType, index) in bloodTypes" :key="index">
            <input type="radio" :id="bloodType" :value="bloodType" v-model="bloodTypeSelected">
            <label :for="bloodType" :class="{ selected: bloodType == bloodTypeSelected }">{{bloodType}}</label>
          </div>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12>
      <v-card-title>
        <h3>Datos de contacto</h3>
      </v-card-title>
      <v-container class="pt-0">
        <v-layout row wrap>
          <v-flex md6>
            <phones-list />
          </v-flex>
          <v-flex md-6>
            <v-text-field
              v-model="email"
              label="Correo electrónico"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-flex>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import IdentificationsList from './IdentificationsList';
  import PhonesList from './PhonesList';

  export default {
    components: {
      FontAwesomeIcon,
      IdentificationsList,
      PhonesList
    },
    data: () => ({
      name: '',
      lastname: '',
      email: '',
      genre: '',
      bloodTypes: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Desconocido'],
      bloodTypeSelected: ''
    })
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


