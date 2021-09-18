<template>
  <div class="home">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    NavBar
  },
  methods:{
    
  }
};
</script>
