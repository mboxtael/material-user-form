<template>
  <v-container class="pl-0 py-0">
    <v-layout row wrap v-for="(phone, index) in phones" :key="index">
      <v-flex md3>
        <v-select
          :items="phoneTypes"
          :value="phone.type"
          @change="onChange(index, 'type', $event)"
          label="Teléfono"
        >
          <template slot="selection" slot-scope="data">
            <v-icon>{{data.item.icon}}</v-icon>
          </template>
          <template slot="item" slot-scope="data">
            <v-icon>{{data.item.icon}}</v-icon>
          </template>
        </v-select>
      </v-flex>
      <v-flex md3>
        <v-select
          :items="countryCodes"
          :value="phone.countryCode"
          @change="onChange(index, 'countryCode', $event)"
        ></v-select>
      </v-flex>
      <v-flex md6>
        <v-text-field
          :value="phone.phoneNumber"
          @input="onChange(index, 'phoneNumber', $event)"
          :mask="maskPhoneNumber"
          :rules="phoneNumberRules"
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
import { mapMutations, mapState } from 'vuex';
import { isPhoneNumber } from '../utils/validations';

export default {
  data: () => ({
    phoneTypes: [
      { value: 'personal', icon: 'smartphone' },
      { value: 'office', icon: 'work' },
      { value: 'house', icon: 'phone' }
    ],
    countryCodes: ['+58'],
    maskPhoneNumber: '###-#######',
    phoneNumberRules: [
      v => v.length == 10 || 'Ingrese un número válido',
      v => isPhoneNumber(v) || 'Ingrese un número válido'
    ]
  }),
  mounted() {
    if (this.phones.length == 0) {
      this.addPhone();
    }
  },
  computed: {
    ...mapState(['phones'])
  },
  methods: {
    ...mapMutations(['addPhone', 'updatePhone']),
    onChange(index, path, value) {
      this.updatePhone({ index, path, value });
    }
  }
};
</script>

<style>
span.action {
  text-transform: uppercase;
  color: #27c6da;
  cursor: pointer;
  font-weight: 500;
}
</style>


