<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function(){
    if (localStorage.getItem('access_token')){
      this.$store.commit('SET_ISLOGIN', true)
    }
  }
}
</script>

<style>
</style>
