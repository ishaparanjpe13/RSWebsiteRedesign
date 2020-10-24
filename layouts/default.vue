<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="blue" 
    class="white-text " dark fixed app >
       <!-- Component Example -->
      <RoyalSundaramLogo/>
        <v-toolbar-title>
          
         Insurance    About Us    Insta Renew    Contact Us    Blogs    Sign In  
         </v-toolbar-title>
         
    </v-app-bar>

    <!-- Body -->
    <v-content light>
       <Breadcrumb/>
      <Stepper/> <Breakpoint2/> <Ticks/> <Breakpoint/>
      
      <Button/> <Button2/>
      <Footer/>
      <nuxt /> 
     
    </v-content>
    
    <!-- Footer -->
    <v-footer color="white" app>
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