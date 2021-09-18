<template>
  <div>
    <div
      class="
        container
        h-full
        w-screen
        mt-10
        m-auto
        p-8
        bg-gray-100
        rounded-xl
      "
    >
      <div v-if="isWrongId">
        <h1 class="text-2xl uppercase font-bold from-current mb-8">
          Sorry
        </h1>
        <p>We can not find your food</p>
      </div>
      <div v-else class="flex flex-col">
        <h1 class="text-2xl uppercase font-bold from-current mb-8">
          {{ food.name }}
        </h1>
        <div class="flex flex-row">
          <img
            class="rounded-2xl"
            style="width: 350px; height: 310px"
            :src="food.imgUrl"
          />
          <div class="ml-10">
            <h1 class="text-2xl uppercase font-bold from-current mb-4">
              {{ food.Category.name }}
            </h1>
            <h1>Description :</h1>
            <p class="bg-gray-300 rounded-xl h-24 w-80 p-4 mb-4">
              {{ food.description }}
            </p>
            <h1>Price :</h1>
            <p class="bg-gray-300 rounded-xl h-10 w-80 pl-4 pt-2 mb-4">
              {{ foodPrice }}
            </p>
            <button
              v-if="isLogin"
              class="
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
              <div v-if="!isBookmark" @click="setBookmark">Add to Bookmark</div>
              <div v-else>Has Been Bookmark</div>
            </button>
          </div>
          <div class="ml-10">
            <img
            :src="qrCode"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data: function () {
    return {
      food: {},
      isWrongId: false,
      qrCode: ''
    };
  },
  methods: {
    getBookmarkStatus: function () {
      const listBookmarkId = this.$store.state.bookmarkList.map((el) => {
        return el.id;
      });
      return listBookmarkId.includes(this.food.id);
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
    },
    getFoodDetail: function(){
      this.$store
      .dispatch("getFoodById", this.$route.params.foodId)
      .then((response) => {
        this.food = response.data;
      })
      .catch(() => {
        this.isWrongId = true;
      });
    },
    getQRCode: function(){
      this.$store
      .dispatch('getQrCode', this.$route.path)
      .then(response => {
        this.qrCode = response.qrcode
      })
      .catch(err => {
        console.log(err);
        this.$toasted.show(err).goAway(2000)
      })
    }
  },
  computed: {
    foodPrice: function () {
      return `Rp ${this.food.price.toLocaleString("id-ID")},-`;
    },
    isLogin: function () {
      return this.$store.state.isLogin;
    },
    isBookmark: function () {
      return this.getBookmarkStatus();
    }
  },
  created: function () {
    this.getFoodDetail()
    this.getQRCode()
  },
};
</script>

<style>
</style>