<template>
  <div
    class="
      flex flex-col
      w-full
      md:w-64
      text-gray-700
      bg-white
      dark-mode:text-gray-200 dark-mode:bg-gray-800
      flex-shrink-0
    "
  >
    <div
      class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
    >
      <a
        href="#"
        class="
          text-lg
          font-semibold
          tracking-widest
          text-gray-900
          uppercase
          rounded-lg
          dark-mode:text-white
          focus:outline-none
          focus:shadow-outline
        "
        >Find Your Favourite Food</a
      >
    </div>
    <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
      <hr />
      <a
        class="
          block
          px-4
          py-2
          mt-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-gray-700
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
        href="#"
        >Category</a
      >
      <div
        class="
          block
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
      >
        <input v-model="MainCourse" type="checkbox" class="ml-3 mr-2" />Main Course
      </div>
      <div
        class="
          block
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
      >
        <input v-model="Appetizer" type="checkbox" class="ml-3 mr-2" />Appetizer
      </div>
      <div
        class="
          block
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
      >
        <input v-model="Dessert" type="checkbox" class="ml-3 mr-2" />Dessert
      </div>
      <div
        class="
          block
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
      >
        <input v-model="Beverage" type="checkbox" class="ml-3 mr-2" />Beverage
      </div>
      <div
        class="
          block
          px-4
          py-2
          mb-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
      >
        <input v-model="Soup" type="checkbox" class="ml-3 mr-2" />Soup
      </div>
      <hr />
      <a
        class="
          block
          px-4
          py-2
          mt-2
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
        href="#"
        >Price</a
      >
      <div
        class="
          block
          px-4
          py-2
          mb-3
          text-sm
          font-semibold
          text-gray-900
          bg-transparent
          rounded-lg
          dark-mode:bg-transparent
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
      >
        <label class="ml-3 mr-2">Max Price : </label>
        <div class="ml-3">
          <span>Rp</span>
        <input v-model="MaxPrice" type="number" class="ml-3 bg-gray-200 form-control" />
        </div>
      </div>
      <hr>
      <button
        @click="filterFoods"
        class="
          mt-3
          px-6
          py-2
          ml-12
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
        Search
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: function(){
    return {
      MainCourse: true,
      Appetizer: true,
      Dessert: true,
      Beverage: true,
      Soup: true,
      MaxPrice: ''
    }
  },
  computed: {
    category: function(){
      let category = []
      this.MainCourse ? category.push('Main Course') : ''
      this.Appetizer ? category.push('Appetizer') : ''
      this.Dessert ? category.push('Dessert') : ''
      this.Beverage ? category.push('Beverage') : ''
      this.Soup ? category.push('Soup') : ''
      return category.join()
    }
  },
  methods: {
    filterFoods: function(){
      let payload = {
        category: this.category,
        price: 1000000
      }

      if (this.MaxPrice !== '' && +this.MaxPrice < 10000){
        this.$toasted.show('Minimum Max Price 10.000').goAway(2000)
        this.MaxPrice = ''
      }

      if (this.MaxPrice !== ''){
        payload.price = +this.MaxPrice
      }
      this.$store.commit('SET_CATEGORY_PRICE', payload)
      let loader = this.$loading.show({loader: 'dots'})
      this.$store.dispatch('getFoodList')
      .then(() => {
        loader.hide()
      })
      .catch(err => {
        loader.hide()
        this.$toasted.show(err).goAway(2000)
      })
    }
  }
};
</script>

<style>
</style>