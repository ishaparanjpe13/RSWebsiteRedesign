<template>
  <v-card
    class="mx-2"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" 
      height="200px"
    ></v-img>

    <v-card-title>
      2 Year Insurance Plan
    </v-card-title>

    <v-card-subtitle>
      More Advantages
    </v-card-subtitle>

    <v-card-actions>
      

      <v-btn
        color="yellow"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          2 Year Plan
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<!--This is Card 1-->