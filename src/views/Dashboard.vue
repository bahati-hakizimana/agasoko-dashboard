
<template class="jk">
<div>
  <h1 class="subheading gray--text">Dashboard</h1>
  <v-container class="pd">
    <v-layout row wrap>
      <v-flex sm6 xs12 md6 lg3>
        <v-card class="ma-3">
          <v-list-item>
            <v-list-item-avatar tile="mt-n7">
              <v-sheet color="green" width="80" height="80" elevation="10">
                <v-icon dark large>store</v-icon>
              </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-right">Product</div>
              <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
              <div><v-divider></v-divider></div>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-icon text class="ma-2">person</v-icon>
          <div class="overline">Iyad</div>
          </v-card-actions>
          
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <v-card class="ma-3">
          <v-list-item>
            <v-list-item-avatar tile="mt-n7">
              <v-sheet color="green" width="80" height="80" elevation="10">
                <v-icon dark large>store</v-icon>
              </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-right">Product</div>
              <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
              <div><v-divider></v-divider></div>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-icon text class="ma-2">person</v-icon>
          <div class="overline">Iyad</div>
          </v-card-actions>
          
        </v-card>
      </v-flex>
      <v-flex sm6 xsl2 md6 lg3>
        <v-card class="ma-3">
          <v-list-item>
            <v-list-item-avatar tile="mt-n7">
              <v-sheet color="green" width="80" height="80" elevation="10">
                <v-icon dark large>store</v-icon>
              </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-right">Product</div>
              <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
              <div><v-divider></v-divider></div>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-icon text class="ma-2">person</v-icon>
          <div class="overline">Iyad</div>
          </v-card-actions>
          
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <v-card class="ma-3">
          <v-list-item>
            <v-list-item-avatar tile="mt-n7">
              <v-sheet color="green" width="80" height="80" elevation="10">
                <v-icon dark large>store</v-icon>
              </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-right">Product</div>
              <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
              <div><v-divider></v-divider></div>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-icon text class="ma-2">person</v-icon>
          <div class="overline">Iyad</div>
          </v-card-actions>
          
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card  class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="red lighten-2">
              <v-img src="person.avatar"></v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{person.name}}</div>
            <div class="grey--texte">{{person.role}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined color="orange">
              <v-icon small>message</v-icon>
              <span>message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
   
</template>
<script>
   export default {
     data :()=> ({
       team: [
         {name: 'Gabriel',role:'web developer',avatar:'/img1.jpg'},
         {name: 'Rock',role:'Garaphial designer',avatar:'/img2.jpg'},
         {name: 'Manzi',role:'Desktop developer',avatar:'./img3.png'},
         {name: 'Hubert',role:'web developer',avatar:'/img3.png'},
       ]
     })
   }
</script>