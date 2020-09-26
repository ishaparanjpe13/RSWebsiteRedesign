<template>
<v-row>
  <v-col
    cols="12"
    md="12"
    >
  <v-card flat color="black">
  <v-subheader>Vehicle Value</v-subheader>

    <v-card-text>
      <v-slider
        v-model="Price"
        :tick-labels="ticksLabels"
        :max="5"
        step="1"
        ticks="always"
        tick-size="3"
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