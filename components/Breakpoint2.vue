<template>
  <v-card light
    justify="center"
    class="mx-auto, ma-auto"
    flat 
    max-width="550"
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
              class="white--text align-end"
              color="white"
              height="190px"
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
        { title: 'Package', src: "package.png" , flex: 4},
        { title: 'Third Party', src: "thirdparty.png" ,  flex: 4 },
        { title: 'Own Damage',src: "owndamage.png", flex: 4 },
      ],
    }),
  }
</script>
