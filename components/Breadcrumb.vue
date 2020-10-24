<template>
  <v-breadcrumbs class="breadcrumbcolor"

  :items="items">
    <template v-slot:item="{ item }"> <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
       {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
      
    </template>
  </v-breadcrumbs>
</template>

<script>
    export default {
    data: () => ({
      items: [
        {
          text: 'Home Page',
          disabled: false,
          
        },
        {
          text: 'Two-Wheeler Insurance',
          disabled: false,
          
        },
        {
          text: 'Select Plan',
          disabled: false,
          
        },
        
      ],
    }),
  }

</script>
<style>
.breadcrumbcolor{color: lightgrey;}

</style>