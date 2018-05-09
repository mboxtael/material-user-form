<template>
  <v-container>
    <v-layout v-for="(identification, index) in identifications" :key="index">
      <v-flex md6>
        <v-select
          :items="identificationTypes"
          :value="identification.type"
          @change="onChange(index, 'type', $event)"
          label="Tipo de identificación"
        ></v-select>
      </v-flex>
      <v-flex md-6>
        <v-text-field
          :value="identification.number"
          @input="onChange(index, 'number', $event)"
          label="Número de identificación"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <span class="action" @click="addIdentification()">Agregar otra identificación</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    identificationTypes: [
      { text: 'Cédula', value: 'national-id' },
      { text: 'RIF', value: 'rif' }
    ]
  }),
  mounted() {
    if (this.identifications.length == 0) {
      this.addIdentification();
    }
  },
  computed: {
    ...mapState(['identifications'])
  },
  methods: {
    ...mapMutations(['addIdentification', 'updateIdentification']),
    onChange(index, path, value) {
      this.updateIdentification({ index, path, value });
    }
  }
};
</script>

<style scoped>
span.action {
  text-transform: uppercase;
  color: #27c6da;
  cursor: pointer;
  font-weight: 500;
}
</style>
