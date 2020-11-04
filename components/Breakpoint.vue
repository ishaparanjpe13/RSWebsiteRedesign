<template>
  
  <v-card
    class="mx-auto, ma-auto "
    color="white"
    max-width="1200"
    outlined>

    <v-container  class="text-wrap">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card class="white" outlined>

            <v-card-title fluid class="indigo--text">
                <v-div class="caption font-weight-bold">{{card.title}}</v-div>
              </v-card-title>

            <v-img
              :src="card.src"
              class="black--text align-right"
              color="black"
              height="350px"></v-img>
              
            
      <v-card-actions>
        <v-div class="text-center">
          <v-btn
        class="caption blue darken--text font-weight-bold"
        color="white"
        rounded>
        Read More
      </v-btn>
    </v-div>
    </v-card-actions>
     </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
  </v-card>
  
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '1 YEAR PLAN',src: "two-wheeler-insurance-banner.png" ,  flex: 4 },
        { title: '2 YEAR PLAN', src:"two-wheeler-and-four-wheeler-insurance-agency-500x500.png",  flex: 4 },
        { title: '3 YEAR PLAN', src:"long_term_TW.png" ,flex: 4 },
      ],
    }),


  }
</script>