<template>
  <!--Your App Starts Here -->
  <div id="app">
  <v-app id="inspire">

  <v-navigation-drawer v-model="drawer" app class="white" width="280px">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="indigo darken-4 title">
            MENU
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    <v-list dense nav>

      <v-list-item v-for="item in menuItems" :key="item.title">
        <v-list-item-icon class="amber">
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title  class="indigo darken-4">>{{item.title}}</v-list-item-title>
    </v-list-item-content> 
      </v-list-item>
  </v-list>
   </v-navigation-drawer>
    <!--Header -->
    <v-app-bar flat app color="white">
      <!-- Component Example -->
      

      <v-list dense class="indigo darken-4">
        <v-toolbar-side-icon @click.stop="drawer =!drawer">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar-side-icon>
      </v-list>
  
      <v-toolbar-title><v-spacer></v-spacer><RoyalSundaramLogo /><v-spacer></v-spacer></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-row
          align="center"
          justify="space-around">
        <v-btn text color="indigo darken-2" v-for="item in menuItems" :key="item.title">{{item.title}}</v-btn>
        </v-row>
        <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
        <v-btn text color="green">
          <v-icon>mdi-magnify</v-icon>
          SEARCH
      </v-btn>
      </v-toolbar-items><v-spacer></v-spacer>
      <v-main>
        <router-view></router-view>
      </v-main>
      
    </v-app-bar>


    <!-- Body -->
    <v-content light>
      <Breadcrumb/>
      <Stepper/><Breakpoint2/> <Ticks/> <Breakpoint/><Floating/>
      <v-spacer> </v-spacer> <v-spacer> </v-spacer>
      <Button/> <v-spacer> </v-spacer> <Button2/>
      <nuxt /> 
     <Footer/>
      <nuxt /> 
    </v-content>
    
    
    
    <!-- Footer -->
    <v-footer
      color="indigo darken-4"
      class="justify-center ml-4">
  
    <v-col 
      class="caption indigo darken-4 align-center"
      cols="8 md-8">

      <div class="text-center">
      <v-container>
      <v-col class="align--center">
        <!--Footer Card 1-->
          <v-card
            color="indigo darken-4"
            width="800px"
            class="mx-auto"
            outlined>

            <v-card-title class="subtitle-1 justify-center font-weight-black mx-auto font-italic">
              Product/Insurance
            </v-card-title>

            <v-card-action>
              

              <v-btn
                text 
                v-for="link in headerLinks1" :key="link"
                class="justify-center caption">
                {{ link.title }}
              </v-btn>
              
            </v-card-action>
          </v-card>
          <v-spacer></v-spacer><v-spacer></v-spacer>
          <!--Footer Card 2-->
          <v-card
            color="indigo darken-4"
            width="800px"
            class="mx-auto"
            outlined>

            <v-card-title class="subtitle-1 justify-center font-weight-black mx-auto font-italic">
              General Info
            </v-card-title>

            <v-card-action>
              
              <v-btn
                text 
                v-for="link in headerLinks2" :key="link"
                class="text-justify caption">
                {{ link.title }}
              </v-btn>
              
            </v-card-action>
          </v-card>
          <v-spacer></v-spacer><v-spacer></v-spacer>
          <!--Footer Card 3-->
          <v-card
            color="indigo darken-4"
            width="800px"
            class="mx-auto"
            outlined>

            <v-card-title class="subtitle-1 justify-center font-weight-black mx-auto font-italic">
              Services
            </v-card-title>

            <v-card-action>
              
              <v-btn
                text 
                v-for="link in headerLinks3" :key="link"
                class="text-justify caption">
                {{ link.title }}
              </v-btn>
              
            </v-card-action>
          </v-card>
          <v-spacer></v-spacer><v-spacer></v-spacer>
          <!--Footer Card 4-->
          <v-card
            color="indigo darken-4"
            width="800px"
            class="mx-auto"
            outlined>

            <v-card-title class="subtitle-1 justify-center font-weight-black mx-auto font-italic">
              Public Info
            </v-card-title>

            <v-card-action>
              
              <v-btn
                text 
                v-for="link in headerLinks4" :key="link"
                class="text-justify caption">
                {{ link.title }}
              </v-btn>
              
            </v-card-action>
          </v-card>
          <v-spacer></v-spacer><v-spacer></v-spacer>
          </v-col>
      </v-container>
      </div>
      
    
      <v-card color="amber"
            width="800px"
            class="justify-center">
            <v-row class="justify-center">
        <v-card-text class="subtitle-1 font-weight-black text-decoration-underline mx-6 indigo--text font-italic">
              PAYMENT METHODS
            </v-card-text>
      
      <v-card-action>
        
        <v-btn
          text 
          v-for="item in itemIcons" :key="item"
          class="text-justify subtitle-1 mx-8 indigo--text">
          {{ item.title }}
        </v-btn>
        
      </v-card-action>
            </v-row>
      </v-card>
      
    </v-col>

  </v-footer>
    
  </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
        drawer: false,
        menuItems: [
          {icon:'mdi-file-document-multiple-outline', title:'INSURANCE'},
          {icon:'mdi-account-group', title:'ABOUT US'},
          {icon:'mdi-file-account-outline', title:'INSTA RENEW'},
          {icon:'mdi-card-account-phone-outline', title:'CONTACT US'},
          {icon:'mdi-blogger', title:'BLOGS'},
          {icon:'mdi-login-variant', title:'SIGN IN'}
        ],
        headerLinks1: [
        {title:'Car Insurance'},
        {title:'Health Insurance'},
        {title:'Two Wheeler Insurance'},
        {title:'Travel Insurance'},
        {title:'Home Insurance'},
        {title:'Personal Accident Insurance'},
        {title:'Commercial Vehicle Insurance'},
        {title:'Business Insurance'},
        {title:'Life-n-Health Protect Combi'},
      ],

      itemIcons: [
        {title:'Mastercard'},
        {title:'American Express'},
        {title:'Visa'},

      ],
      headerLinks2: [
        {title:'General Info'},
        {title:'About Us'},
        {title:'Careers'},
        {title:'Contact Us'},
        {title:'Public Disclosure'},
        {title:'Site Map'},
        {title:'Grievance Redressal'},
        {title:'Unclaimed Amount of Policyholders'},
        {title:'Cashless Garage'},
      ],
      headerLinks3: [
        {title:'Services'},
        {title:'Customer Services'},
        {title:'Claim Services'},
      ],
      headerLinks4: [
        {title:'Public Info'},
        {title:'Disclaimer'},
        {title:'Copyright'}
      ]
    }
  } 
}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
  }
</style>