<template>
  <v-card light
    class="mx-auto, ma-10"
    flat color="white"
    max-width="700px"
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
              
              class="black--text align-center" flat color="white"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-img
              src="Layer2.png"
               </v-img>
         
          <v-img
              src="accident.png" 
              </v-img>
          </v-card>
        </v-col>
      </v-row>
      </v-hover>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Package',  flex: 3 },
        { title: 'Third Party',  flex: 3 },
        { title: 'Own Damage', flex: 3 },
      ],
    }),
  }
</script>
