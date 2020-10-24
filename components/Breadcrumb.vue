<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
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
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Two-Wheeler Insurance',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Select Plan',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
        
      ],
    }),
  }
  {
         font-color-" rgb(66, 64, 63)"
         size-"10px"} 
</script>