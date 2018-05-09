<template>
  <v-app id="inspire">
    <v-content>
      <v-container grid-list-md fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 lg8>
            <v-card class="elevation-12">
              <user-form />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import UserForm from './components/UserForm';

  export default {
    data: () => ({ }),
    components: {
      UserForm
    }
  }
</script>