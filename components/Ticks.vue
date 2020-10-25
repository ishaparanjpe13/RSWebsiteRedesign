<template>
<v-row>
  <v-col 
    cols="11 md-11"
    class="ml-12"
    
    >
  <v-card flat color="blue" >
  <v-subheader class="indigo--text">Vehicle Value</v-subheader>

    <v-card-text>
     <v-slider
       class="indigo--text"
        color="yellow"
        v-model="Price"
        :tick-labels="ticksLabels"
        :max="5"
        step="1"
        ticks="always"
        tick-size="4"
      ></v-slider>
    </v-card-text>
  </v-card>
  </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        value: 0,
        fruits: 0,
        ticksLabels: [
          '68,542',
          '72,666',
          '76,991',
          '80,536',
          '84,140',
          '87,666',
        ],
      }
    },
  }
</script>