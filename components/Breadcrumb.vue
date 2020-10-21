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
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',

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
>>>>>>> 2617b6d69149df8c8746a8f67b453851de96118b
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>