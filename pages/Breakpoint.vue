<template>

  <v-row
    >
    <v-col
    v-for="i in 3"
    :key=i
    cols="12"
    md="6"
    sx="6"
    >
    
      <v-card
        class=" indigo darken-2 ma-4 pa-6 black--text"
        
      >
        <v-card-text>
          3 cards
        </v-card-text>
      </v-card>

    </v-col>
    </v-row>
</template>