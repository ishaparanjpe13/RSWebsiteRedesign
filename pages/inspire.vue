<template>
  <div>
    <v-content>
      <component :is="layout">
          <router-view :layout.sync="layout"/>
        </component>
      <v-container fluid fill-height>
      </v-container>
    </v-content>
  </div>
</template>

<script>
</script>

<style> 
</style>