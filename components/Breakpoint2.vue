<template>
  <v-card light
    justify="center"
    class="mx-auto, ma-auto"
    flat 
    max-width="550"
    outlined>

    <v-container>
       
      <v-row light>
        
        <v-col xs12 sm6 md4 lg3
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card flat class="text-xs-center" outlined> 
            
           <v-img
              :src="card.src"
              class="white--text align-end"
              color="white"
              height="190px"
            >
              <v-card-title>
                <div class="caption text-decoration-underline font-weight-black" >{{card.title}}</div>
              </v-card-title>
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
