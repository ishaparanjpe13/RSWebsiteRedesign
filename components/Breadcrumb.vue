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
        { HEAD
          text: 'Home Page',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Two-Wheeler Insurance',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Select Plan',
         disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>