<template>

  <v-col 
    cols="11 md-11"
    class="mx-auto">

  <v-card flat color="amber lighten-1" outlined>
    <v-card-title class="white indigo--text text-decoration-underline font-weight-black heading-2">VEHICLE VALUE</v-card-title>
    <v-spacer></v-spacer>
    

    <v-card-text>
    <v-slider
       class="black--text caption"
        color="white"
        v-model="slider"
        :tick-labels="ticksLabels" 
        :max="5"
        step="1"
        ticks="always"
        tick-size="4">
    </v-slider>
    </v-card-text>

    
  </v-card>
  </v-col>

</template>

<script>

  export default {
    data () {
      return {
        slider: 0,
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
      model: null,
      classes: [
        ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
        ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
        ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
        ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
        ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
        ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
        ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
        ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
        ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
        ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
        ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
        ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
        ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
      ],
    
  }
</script>