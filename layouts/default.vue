<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    
    <!--Header -->
    <!--Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other-->
     

    <v-app-bar color="white" 
    class="white-text " dark fixed app>
       <!-- Component Example -->
       
      <RoyalSundaramLogo/> <v-spacer> </v-spacer> 
      <v-spacer> </v-spacer> <v-spacer> </v-spacer> <v-spacer> </v-spacer><v-spacer> </v-spacer><v-spacer> </v-spacer><v-spacer> </v-spacer><v-spacer> </v-spacer><v-spacer> </v-spacer>
      <v-row>
  
        <Button5/>
        <Button3/>
        <Button4/>
        <Button6/>
        <Button7/>
        <Button8/>
        
        </v-row> 
        
    </v-app-bar>

    <!-- Body -->
    <v-content light>
       <Breadcrumb/>
      <Stepper/> <Breakpoint2/> <Ticks/> <Breakpoint/>
      <v-spacer> </v-spacer> <v-spacer> </v-spacer>
      <Button/> <v-spacer> </v-spacer> <Button2/>
      <nuxt /> 
     <Footer/>
    </v-content>
    
    <!-- Footer -->
    <v-footer color="indigo" app>
      <span class="indigo--text"> </span>
     </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
  }
</style>