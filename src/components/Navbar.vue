<template>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
        <router-link :to="{name: 'FoodList'}">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                <i class="fas fa-hamburger text-gray-400 hover:text-white focus:outline-none"> My Resto</i>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'Bookmarks'}" v-if="isLogin">
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
                <i class="far fa-bookmark"> My Bookmark</i>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'Login'}" v-if="!isLogin">
            <div  class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
                <i class="fas fa-sign-in-alt"> Login</i>
                </div>
            </div >
        </router-link>
      <div v-if="isLogin" @click="logout" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
          <i class="fas fa-sign-out-alt"> Logout</i>
        </button>
      </div>
    </div>
  </div>

</nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        isLogin: function(){
            return this.$store.state.isLogin
        }
    },
    methods: {
        logout: function(){
            if(window.gapi.auth2.getAuthInstance()){
                window.gapi.auth2.getAuthInstance().disconnect()
            }
            localStorage.removeItem('access_token')
            this.$store.commit('SET_ISLOGIN', false)
            this.$store.commit('SET_BOOKMARKLIST', [])
            this.$toasted.show('Logout Successfully').goAway(2000)
            this.$router.push({name: 'FoodList'})
        }
    }
}
</script>

<style>

</style>