<template>
<div> 
  
  <v-breadcrumbs class="breadcrumbcolor"
   :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        class="caption"
        :href="item.href"
        :disabled="item.disabled">
       {{ item.text }}
      </v-breadcrumbs-item>
      
    </template>
  </v-breadcrumbs>
</div>
</template>

<script>
    export default {
    data: () => ({
      items: [
        {
          text: 'Home Page /',
          disabled: false,
          href: '',
          
        },
        {
          text: 'Two-Wheeler Insurance /',
          disabled: false,
          href: '',
          
        },
        {
          text: 'Select Plan',
          disabled: false,
          href: '',
          
        },
        
      ],
    }),
  }

</script>
<style>
.breadcrumbcolor{color: lightgrey;}

</style>