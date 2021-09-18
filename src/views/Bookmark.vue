<template>
  <div>
    <div class="container mx-auto h-auto w-screen p-8 bg-gray-100 rounded-xl">
      <div class="flex flex-row justify-between">
        <h1 class="text-2xl uppercase font-bold from-current mb-8">
          Bookmark List
        </h1>
        </div>
      <div
        class="
            
          sm:grid sm:grid-cols-3
          lg:grid-cols-4
          gap-4
          space-y-4
          sm:space-y-0
        "
      >
        <!-- food -->
        <food v-for="food in bookmarkList" :key="food.id" :food="food"></food>
      </div>
      </div>
    </div>
</template>

<script>
import Food from "../components/Food.vue";
export default {
    name: 'Bookmark',
    computed: {
        bookmarkList: function(){
            return this.$store.state.bookmarkList
        }
    },
    components: {
        Food,
    },
    created: function(){
        this.$store.dispatch('getBookmark')
    }
}
</script>

<style>

</style>