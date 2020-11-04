<template>
  <v-div class="hv-state-stepper">
    <v-card flat >
  <v-stepper value="1" light>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step color="amber" step="1">Select Plan</v-stepper-step>
    
      <v-divider></v-divider>

      <v-stepper-step step="2">Input Details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Pay & Go</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
  </v-stepper>
    </v-card>
  
    
      <v-card flat 
      color="white"
      class="ml-1 mr-1"
      elevation="1"
      height="40px">
      <v-row class="justify-center">
        <v-card-title class="caption indigo--text justify-center">2018 | Expired</v-card-title>
      </v-row>
      </v-card>
    
  
  </v-div>
</template>

<style>
.hv-state-stepper{
  align-items: center;
  text-align: center;
}
</style>
