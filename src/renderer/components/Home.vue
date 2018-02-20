<template>
  <v-app dark>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark>
            <v-card-text class="px-0">Home</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs4>
          <list></list>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import List from './List/List';
  export default {
    name: 'home',
    components: { List },
  };
</script>

<style>
  /* CSS */
</style>
