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
    <v-flex xs12 layout row wrap>
      <v-flex md6>
        <v-select
          :items="identificationTypes"
          v-model="identificationType"
          label="Tipo de identificación"
          single-line
        ></v-select>
      </v-flex>
      <v-flex md-6>
        <v-text-field
          v-model="identification"
          label="Número de identificación"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <p>Agregar otra identificación</p>
      </v-flex>
    </v-flex>
    <v-flex xs12 layout row wrap>
      <v-flex xs12>
        <v-card-text>Tipo de sangre</v-card-text>
      </v-flex>
      <v-flex layout>
        <div v-for="(bloodType, index) in bloodTypes" :key="index">
          <input type="radio" :id="bloodType" :value="bloodType" v-model="bloodTypeSelected">
          <label :for="bloodType" :class="{ selected: bloodType == bloodTypeSelected }">{{bloodType}}</label>
        </div>
      </v-flex>
    </v-flex>
    <v-flex xs12 layout row wrap>
      <v-flex xs12>
        <v-card-title>
          <h3>Datos de contacto</h3>
        </v-card-title>
      </v-flex>
      <v-flex md6 layout>
        <v-flex>
          <v-select
            :items="phoneTypes"
            v-model="phoneType"
          >
            <template slot="selection" slot-scope="data">
              <v-icon>{{data.item.icon}}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{data.item.icon}}</v-icon>
            </template>
          </v-select>
        </v-flex>
        <v-flex>
          <v-select
            :items="countryCodes"
            v-model="countryCode"
            label="Code"
            single-line
          ></v-select>
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="identificationType"
            label="Teléfono"
          ></v-text-field>
        </v-flex>
      </v-flex>
      <v-flex md-6 layout>
        <v-text-field
          v-model="email"
          label="Correo electrónico"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <p>Agregar otro teléfono</p>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

  export default {
    data: () => ({
      name: '',
      lastname: '',
      email: '',
      genre: '',
      identificationTypes: [{ text: 'Cédula' }, { text: 'Carnet de conducir' }],
      identificationType: '',
      identification: '',
      bloodTypes: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Desconocido'],
      bloodTypeSelected: '',
      phoneTypes: [
        { value: 'personal', icon: 'smartphone' },
        { value: 'office', icon: 'work' },
        { value: 'house', icon: 'phone' }
      ],
      phoneType: 'personal',
      countryCodes: ['+58'],
      countryCode: '+58',
    }),
    components: {
      FontAwesomeIcon
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


