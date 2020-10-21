<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="blue" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
       <!-- Component Example -->
      <RoyalSundaramLogo/>
       <Breadcrumb/>
    </v-app-bar>

    <!-- Body -->
    <v-content light>
      <nuxt /> 
     
    </v-content>
    
    <!-- Footer -->
    <v-footer color="indigo" app>
      <span class="black--text">&copy; {{ new Date().getFullYear() }}</span>
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
    background-color: black;
  }
</style>