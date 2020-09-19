<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="indigo" dark fixed app>
      <v-toolbar-title>Royal Sundaram</v-toolbar-title>
       <!-- Component Example -->
      <VuetifyLogo/>
    </v-app-bar>

    <!-- Body -->
    <v-content light>
      <nuxt/> 
       <Nav/>
       <v-card>
       <align="left"
       >
       </v-card>
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
    background-color: black;
  }
</style>