<template>
  <v-card
    class="mx-auto"
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
              :src="card.src"
              class="white--text align-end"
              gradient="to top, rgb(75,0,130), rgb(255, 255, 255)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer>Read More</v-spacer>
            </v-card-actions>
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