<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="indigo" dark fixed app>
      <v-toolbar-title>Royal Sundaram</v-toolbar-title>
       <!-- Component Example -->
      <RoyalSundaramLogo/>
      <Breadcrumb/>
    </v-app-bar>

    <!-- Body -->
    <v-content light>
      <nuxt/> 
      <Cards/> <Cards2/> <align="horizontal"/>
      <Button/>
      
    </v-content>
    
    <!-- Footer -->
    <v-footer color="indigo" app>
      <span class="yellow--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .yellow--text {
    border: 1px solid;
  }

   #inspire {
    background-color: lightcyan;
  }
</style>