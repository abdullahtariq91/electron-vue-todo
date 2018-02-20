<template>
  <v-card>
    <v-card-title class="headline">
      Informations
    </v-card-title>
    <v-divider></v-divider>
    <v-layout row wrap class="pa-3">
      <v-flex xs12 sm6 md4 class="item">
        <div class="name">Path:</div>
        <div class="value">\{{ path }}</div>
      </v-flex>
    </v-layout>
  </v-card>
</template>
