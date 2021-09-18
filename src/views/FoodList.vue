<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <side-bar></side-bar>
    <div class="container mx-auto h-auto w-screen p-8 bg-gray-100 rounded-xl">
      <div class="flex flex-row justify-between">
        <h1 class="text-2xl uppercase font-bold from-current mb-8">
          Food List
        </h1>
        
        <div class="flex flex-row">
          <p class="mt-2">Max Show Item</p>
          <select
            v-model="itemRow"
            @change="changeRow"
            class="bg-gray-300 rounded h-7 mt-2 ml-3"
          >
            <option v-for="index in 10" :key="index">{{ index }}</option>
          </select>
          <div class="pagination mt-1 ml-5">
            <a
              v-show="currentPage >= 2"
              @click="decrementPage"
              :class="{ 'pointer-events-none': currentPage == 1 }"
              >&laquo;</a
            >
            <a @click="decrementPage" v-show="currentPage >= 2">{{ currentPage - 1 }}</a>
            <a class="active">{{ currentPage }}</a>
            <a @click="incrementPage" v-show="currentPage < totalPage">{{ currentPage + 1 }}</a>
            <a
              v-show="currentPage < totalPage"
              @click="incrementPage"
              :class="{ 'pointer-events-none': currentPage >= totalPage }"
              >&raquo;</a
            >
          </div>
        </div>
      </div>
      <div v-if="foodList.length == 0">
        <h1 class="text-2xl uppercase font-bold from-current mb-1">
          Sorry
        </h1>
        <h2>Your food is not ready</h2>
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
        <food v-for="food in foodList" :key="food.id" :food="food"></food>
        <loading :active.sync="visible" :can-cancel="false"></loading>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Sidebar.vue";
import Food from "../components/Food.vue";

export default {
  name: "FoodList",
  data: function () {
    return {
      currentPage: 1,
      itemRow: 10,
      visible: false
    };
  },
  components: {
    SideBar,
    Food,
  },
  watch: {
    currentPage: function () {
      this.$store.commit('SET_PAGE', this.currentPage)
      let loader = this.$loading.show({loader: 'dots'})
      this.$store.dispatch('getFoodList')
      .then(() => {
        loader.hide()
      })
      .catch(err => {
        loader.hide()
        this.$toasted.show(err).goAway(2000)
      })
    },
  },
  methods: {
    fetchFoods: function () {
      let loader = this.$loading.show({loader: 'dots'})
      this.$store.dispatch('getFoodList')
      .then(() => {
        loader.hide()
      })
      .catch(err => {
        loader.hide()
        this.$toasted.show(err).goAway(2000)
      })
    },
    changeRow: function () {
      this.$store.commit('SET_ROW', +this.itemRow)
      let loader = this.$loading.show({loader: 'dots'})
      this.$store.dispatch('getFoodList')
      .then(() => {
        loader.hide()
      })
      .catch(err => {
        loader.hide()
        this.$toasted.show(err).goAway(2000)
      })
    },
    decrementPage: function () {
      this.currentPage--;
    },
    incrementPage: function () {
      this.currentPage++;
    }
  },
  computed: {
    foodList: function () {
      return this.$store.state.foodList.rows;
    },
    totalPage: function () {
      return Math.ceil(this.$store.state.foodList.count / +this.itemRow);
    },
    isLogin: function () {
      return this.$store.state.isLogin
    }
  },
  created() {
    this.currentPage = this.$store.state.filter.page
    this.fetchFoods();
    if(this.isLogin){
      this.$store.dispatch('getBookmark')
    }
  },
};
</script>

<style scope>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 4px 8px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #1c52a3;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
</style>