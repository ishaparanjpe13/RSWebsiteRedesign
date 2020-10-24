<template>
  <v-footer
    white
    padless
  >
    <v-card
      flat color="grey"
      tile
      class="white-1 indigo--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-6 indigo--text"
          icon
        >
          <v-icon size="20px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="indigo--text pt-0 text-left">
        Products/Insurance

Car Insurance
Health Insurance
Two Wheeler Insurance
Travel Insurance
Home Insurance
Personal Accident Insurance
Commercial Vehicle Insurance
Business Insurance
Life-n-Health Protect Combi
Other Links

iLink Agent Portal
IRDA Consumer Education
Forms Central Download
Health Insurance Premium Calculator
Trusted Repair Shop
Articles on Car Insurance

Car Insurance Comparison
No Claim Bonus
Types of car insurance in India
Vehicle Insurance
Car Insurance Claim Process
View All
Articles on Travel Insurance

Travel Plans Comparison
Multi-Trip Travel Insurance
Selecting Best Travel Insurance Policy
Travel Insurance Coverage Tips
View All
Articles on Two-Wheeler Insurance

Comprehensive vs Third Party Bike Insurance
Insured Declared Value
About Two Wheeler Premium Calculator
View All
Info Centre

Insurance Glossary
Insurance Infographics
Travel Insurance by Country
Car Insurance by Manufacturers
Car Insurance in India
Bike Insurance by Manufacturers
Motor 101
Health 101
Articles on Health Insurance

Maternity health insurance
Health Insurance Comparison
Mediclaim Policy
Health insurance for senior citizens
Health insurance for parents
View All
Articles on Home Insurance

Home Insurance Claim Process Tips
Types of Property Insurance Policy
Home Insurance Coverage
Home Insurance vs Home Warranty
View All
General Info

About Us
Careers
Contact Us
Public Disclosure
Site Map
Grievance redressal
Unclaimed Amount of Policyholders
Cashless Garage
Services

Customer Services
Claim Services
Public Info

Disclaimer
Copyright
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="indigo--text">
        <strong>Royal Sundaram</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>