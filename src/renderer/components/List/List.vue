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
      <v-flex xs12 sm6 md4 class="item">
        <div class="name">Name:</div>
        <div class="value">\{{ name }}</div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="item">
        <div class="name">Vue.js:</div>
        <div class="value">\{{ vue }}</div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="item">
        <div class="name">Electron:</div>
        <div class="value">\{{ electron }}</div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="item">
        <div class="name">Node:</div>
        <div class="value">\{{ node }}</div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="item">
        <div class="name">Platform:</div>
        <div class="value">\{{ platform }}</div>
      </v-flex>
    </v-layout>
  </v-card>
</template>
