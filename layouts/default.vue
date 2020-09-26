<template>
  <!--Your App Starts Here -->
  <v-app>
    
    <!--Header -->
    <v-app-bar color="indigo" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
       <!-- Component Example -->
      <RoyalSundaramLogo/>
      <Breadcrumb/> 
    </v-app-bar>

    <!-- Body -->
    <v-content light>
      <v-img
      class="ma-2 mx-2"
      src="HeadImage.jpg" 
      height="850px"
    ></v-img>
      <nuxt/> 
      <Stepper/>
      <Ticks/>
      <Breakpoint/>
      <Button2/> <Button/>
    </v-content>
    
    <!-- Footer -->
    <Footer/>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
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