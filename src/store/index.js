import Vue from 'vue'
import Vuex from 'vuex'
import foodsAPI from '../apis/foodsAPI'
import qrCodeAPI from '../apis/qrcodeAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8080',
    isLogin: false,
    foodList: [],
    bookmarkList: [],
    filter: {
      category: 'Appetizer,Dessert,Beverage,Main Course,Soup',
      price: 1000000,
      page: 1,
      row: 10
    }
  },
  mutations: {
    SET_FOODLIST: function (state, payload) {
      state.foodList = payload
    },
    SET_ISLOGIN: function (state, status) {
      state.isLogin = status
    },
    SET_CATEGORY_PRICE: function (state, payload) {
      state.filter.category = payload.category
      state.filter.price = payload.price
    },
    SET_PAGE: function (state, payload) {
      state.filter.page = payload
    },
    SET_ROW: function (state, payload) {
      state.filter.row = payload
    },
    SET_BOOKMARKLIST: function (state, payload) {
      state.bookmarkList = payload
    }
  },
  actions: {
    login: function(context , payload){
      const { email, password} = payload
      return foodsAPI.post('/login', {
        email,
        password
      })
    },
    googleLogin: function(context, idToken){
      try {
        return foodsAPI.post('/oauth', { idToken })
      } catch (err) {
        this.$toasted.show(err).goAway(2000)
      }
    },
    register: function(context , payload){
      const { username, email, password, address} = payload
      return foodsAPI.post('/register', {
        username,
        email,
        password,
        address
      })
    },
    getFoodList: function ({ state, commit }) {
      return new Promise((resolve, reject) => {
        foodsAPI.get('/foods', { params: state.filter })
        .then(response => {
          commit('SET_FOODLIST', response.data)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getFoodById: function(context, id){
      return foodsAPI.get(`/foods/${id}`)
    },
    getBookmark: async function ({ commit }) {
      try {
        const response = await foodsAPI.get('/bookmarks', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        commit('SET_BOOKMARKLIST', response.data.Food)
      } catch (err) {
        this.$toasted.show(err).goAway(2000)
      }
    },
    setBookmark: function (context, FoodId) {
      return foodsAPI.post('/bookmarks', { FoodId }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    getQrCode: function ({state}, payload){
      return new Promise((resolve, reject) => {
        const data = state.baseUrl + payload
        qrCodeAPI.get('',{
          params:{
            data,
            width:300
          }
        })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  }
})
