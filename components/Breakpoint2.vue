<template>
  <v-card light
    class="mx-auto"
    flat color="white"
    max-width="510"
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
              
              class="blue--text align-center" flat color="white"
              height="150px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-img
              
            </v-img>
         
          <v-img
              
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
        { title: 'Package',  flex: 4 },
        { title: 'Third Party',  flex: 4 },
        { title: 'Own Damage', flex: 4 },
      ],
    }),
  }
</script>