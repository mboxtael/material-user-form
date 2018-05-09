<template>
  <v-container class="pl-0 py-0">
    <v-layout row wrap v-for="(phone, index) in phones" :key="index">
      <v-flex>
        <v-select
          :items="phoneTypes"
          v-model="phone.type"
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
          v-model="phone.countryCode"
          label="Code"
          single-line
        ></v-select>
      </v-flex>
      <v-flex>
        <v-text-field
          v-model="phone.phoneNumber"
          label="Teléfono"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <span class="action" @click="addPhone()">Agregar otro teléfono</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      phoneTypes: [
        { value: 'personal', icon: 'smartphone' },
        { value: 'office', icon: 'work' },
        { value: 'house', icon: 'phone' }
      ],
      countryCodes: ['+58'],
      phones: []
    }),
    mounted() {
      this.addPhone();
    },
    methods: {
      addPhone() {
        this.phones.push({ type: 'personal', countryCode: '+58', phoneNumber: '' });
      }
    }
  }
</script>

<style>
  span.action {
    text-transform: uppercase;
    color: #27c6da;
    cursor: pointer;
    font-weight: 500;
  }
</style>


