<template>
  <div class="bg-white rounded-2xl" @mouseover="hover = true" @mouseleave="hover = false">
    <div
      class="
        shadow-lg
        hover:shadow-xl
        transform
        transition
        duration-500
        hover:scale-105
        rounded-2xl
      "
    >
      <div>
        <div class="container">
          <img
            class="rounded-t-2xl"
            style="width: 350px; height: 200px"
            :src="food.imgUrl"
          />
          <div v-if="isLogin && $route.path == '/foods'" @click="setBookmark">
            <i v-if="!isBookmark" class="far fa-bookmark"></i>
            <i v-else class="fas fa-bookmark"></i>
          </div>
        </div>
        <div class="px-4 py-2">
          <h1 class="text-xl font-gray-700 font-bold">{{ foodName }}</h1>
          <h5>
            Category : <b class="text-sm">{{ food.Category.name }}</b>
          </h5>
          <h5>
            Price : <b>{{ foodPrice }}</b>
          </h5>
          <button 
            v-if="hover == true"
            @click="goToDetail"
            class="
              mt-3
              px-6
              py-2
              m-auto
              font-semibold
              cursor-pointer
              text-center
              focus:outline-none
              transition
              hover:shadow-lg
              shadow
              hover:bg-indigo-700
              rounded-full
              text-white
              bg-indigo-600
            "
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
  data: function () {
    return {
        hover: false,
    };
  },
  props: ["food"],
  computed: {
    isLogin: function(){
        return this.$store.state.isLogin
    },
    foodPrice: function () {
      return `Rp ${this.food.price.toLocaleString("id-ID")},-`;
    },
    isBookmark: function(){
        return this.getBookmarkStatus()
    },
    foodName: function(){
      if(this.food.name.length >= 19){
        return `${this.food.name.slice(0,14)} ...`
      } else {
        return this.food.name
      }
    }
  },
  methods: {
      goToDetail: function(){
          this.$router.push({
              name: 'Detail',
              params: {
                  foodId: this.food.id
              }
          })
      },
      getBookmarkStatus: function(){
        const listBookmarkId = this.$store.state.bookmarkList.map(el => {
            return el.id
        })
        return listBookmarkId.includes(this.food.id)
      },
      setBookmark: function(){
         this.$store.dispatch('setBookmark', this.food.id)
         .then(() => {
             this.$toasted
             .show('Successfully Bookmarked')
             .goAway(2000)
             this.$store.dispatch('getBookmark')
         })
         .catch(err => {
             this.$toasted
             .show('Error : ' + err.response.data.message[0])
             .goAway(2000)
         })
      }
  }
};
</script>

<style>
.container i {
  position: absolute;
  top: 7%;
  right: -2%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  font-size: 16px;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
</style>