<template>
  <v-card light
    justify="center"
    class="mx-auto, ma-auto"
    flat 
    max-width="600"
  >

    <v-container>
       
      <v-row light>
        
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            
           <v-img
              :src="card.src"
              class="black--text align-center"
              flat color="white"
              height="160px"
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
        { title: 'Package', src: "Outline.png" , flex: 4},
        { title: 'Third Party', src: "Layer 2.png" ,  flex: 4 },
        { title: 'Own Damage',src: "accident.png", flex: 4 },
      ],
    }),
  }
</script>
