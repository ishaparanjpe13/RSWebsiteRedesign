<template>
  <v-card
    class="mx-auto, ma-auto"
    color="white"
    max-width="1200"
  
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              src="two-wheeler-insurance-banner.png"
              class="black--text align-left"
              flat color="white"
              height="250px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '1 Year Plan',  flex: 4 },
        { title: '2 Year Plan',  flex: 4 },
        { title: '3 Year Plan', flex: 4 },
      ],
    }),
  }
</script>