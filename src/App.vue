<template>
   <v-app>
     <navbar/>
     <v-main class="ma-4">
       <router-view></router-view>
     </v-main>
     <Footer/>
   </v-app>
</template>
<script>
import navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    navbar,
    Footer
  }

}
</script>
