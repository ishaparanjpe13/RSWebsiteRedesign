<template>

  <v-footer
  
    color="primary lighten-1"
    class="mt-8"
    justify="center"
    
  >
    <p>
    <v-row
      justify="center"
    
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="indigo"
        text="left--align"
        class="my-1, mx-1"
        justify="left"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-1 py-12 text-center indigo--text"
        cols="8"
        justify="left"
      >
       <strong>Royal Sundaram</strong>
      </v-col>
    </v-row>
    </p>
  </v-footer>

</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Car Insurance',
        'Health Insurance',
        'Two Wheeler Insurance',
        'Travel Insurance',
        'Home Insurance',
        'Personal Accident Insurance',
        'Commercial Vehicle Insurance',
        'Business Insurance',
        'Life-n-Health Protect Combi',
        'Other Links',
        'iLink Agent Portal',
        'IRDA Consumer Education',
        'Forms Central Download',
        'Health Insurance Premium Calculator',
        'Trusted Repair Shop',
        'Articles on Car Insurance',
        'Car Insurance Comparison',
        'No Claim Bonus',
        'Types of car insurance in India',
        'Vehicle Insurance',
        'Car Insurance Claim Process',
        'View All',
        'Articles on Travel Insurance',
        'Travel Plans Comparison',
        'Multi-Trip Travel Insurance',
        'Selecting Best Travel Insurance Policy',
        'Travel Insurance Coverage Tips',
        'View All',
        'Articles on Two-Wheeler Insurance', 
        'Comprehensive vs Third Party Bike Insurance',
        'Insured Declared Value',
        'About Two Wheeler Premium Calculator',
        'View All',
        'Info Centre',
        'Insurance Glossary',
        'Insurance Infographics',
        'Travel Insurance by Country',
        'Car Insurance by Manufacturers',
        'Car Insurance in India',
        'Bike Insurance by Manufacturers',
        'Motor 101',
        'Health 101',
        'Articles on Health Insurance',
        'Maternity health insurance',
        'Health Insurance Comparison',
        'Mediclaim Policy',
        'Health insurance for senior citizens',
        'Health insurance for parents',
        'View All',
        'Articles on Home Insurance',
        'Home Insurance Claim Process Tips',
        'Types of Property Insurance Policy',
        'Home Insurance Coverage',
        'Home Insurance vs Home Warranty',
        'View All',
        'General Info',
        'About Us',
        'Careers',
        'Contact Us',
        'Public Disclosure',
        'Site Map',
        'Grievance redressal',
        'Unclaimed Amount of Policyholders',
        'Cashless Garage',
        'Services',
        'Customer Services',
        'Claim Services',
        'Public Info',
        'Disclaimer',
        'Copyright',
      ],
    }),
  }
</script>