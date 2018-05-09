<template>
  <v-container>
    <v-layout v-for="(identification, index) in identifications" :key="index">
      <v-flex md6>
        <v-select
          :items="identificationTypes"
          v-model="identification.type"
          label="Tipo de identificación"
        ></v-select>
      </v-flex>
      <v-flex md-6>
        <v-text-field
          v-model="identification.number"
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
  export default {
    data: () => ({
      identificationTypes: [
        { text: 'Cédula', value: 'national-id' },
        { text: 'Carnet de conducir', value: 'drive-id' }
      ],
      identifications: [],
    }),
    mounted() {
      this.addIdentification();
    },
    methods: {
      addIdentification() {
        this.identifications.push({ type: 'national-id', number: '' })
      }
    }
  }
</script>

<style scoped>
  span.action {
    text-transform: uppercase;
    color: #27c6da;
    cursor: pointer;
    font-weight: 500;
  }
</style>
