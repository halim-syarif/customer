<template>
  <div
    class="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
      bg-gray-500 bg-no-repeat bg-cover
      relative
      items-center
    "
    style="
      background-image: url(https://images.unsplash.com/photo-1624916888581-48904076264b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
    "
  >
    <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
    <div class="mt-2 items-center justify-center z-10">
      <form
        class="
          p-14
          bg-white
          max-w-sm
          mx-auto
          rounded-xl
          shadow-xl
          overflow-hidden
          p-6
          space-y-10
        "
      >
        <h2 class="text-4xl font-bold text-center text-indigo-600">Login</h2>
        <div
          class="
            f-outline
            px-2
            relative
            border
            rounded-lg
            focus-within:border-indigo-500
          "
        >
          <input
            v-model="payload.email"
            type="email"
            name="email"
            placeholder=" "
            class="
              block
              p-2
              w-full
              text-lg
              appearance-none
              focus:outline-none
              bg-transparent
            "
          />
          <label
            for="email"
            class="
              absolute
              ml-5
              top-0
              text-lg text-gray-700
              bg-white
              mt-2
              -z-1
              duration-300
              origin-0
            "
            >Email</label
          >
        </div>
        <div
          class="
            f-outline
            px-2
            relative
            border
            rounded-lg
            focus-within:border-indigo-500
          "
        >
          <input
            v-model="payload.password"
            type="password"
            name="password"
            placeholder=" "
            class="
              block
              p-2
              w-full
              text-lg
              appearance-none
              focus:outline-none
              bg-transparent
            "
          />
          <label
            for="password"
            class="
              absolute
              ml-5
              top-0
              text-lg text-gray-700
              bg-white
              mt-2
              -z-1
              duration-300
              origin-0
            "
            >Password</label
          >
        </div>
        <div class="flex flex-col item-center mt-4">
          <button
            @click.prevent="login"
            class="
              px-6
              py-2
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
            Log in
          </button>
          <router-link to="Register" class="
              underline
              text-sm text-gray-600
              hover:text-gray-900
              mt-2
              text-center
            ">
            Register
          </router-link>
          <g-signin-button
            :params="googleSignInParams"
            @success="onSignInSuccess"
          >
          <i class="fab fa-google"></i>
            <b class="ml-3">Sign in</b>
          </g-signin-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      payload: {
        email: "",
        password: "",
      },
      googleSignInParams: {
        client_id:
          "947558502250-r1daidmh7omd98rr5hdvab82gl8rdtcq.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    login: function () {
      let loader = this.$loading.show({loader: 'dots'})
      this.$store
        .dispatch("login", this.payload)
        .then((response) => {
          localStorage.setItem("access_token", response.data.data.access_token);
          this.$store.commit("SET_ISLOGIN", true);
          this.$router.push({ name: "Home" });
          loader.hide()
          this.$toasted.show("Login successfully").goAway(2000);
        })
        .catch((err) => {
          loader.hide()
          this.$toasted.show(err.response.data.message[0]).goAway(2000);
        });
    },
    onSignInSuccess(googleUser) {
      const idToken = googleUser.getAuthResponse().id_token;
      this.$store.dispatch('googleLogin', idToken)
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
          this.$store.commit("SET_ISLOGIN", true);
          this.$router.push({ name: "Home" });
          this.$toasted.show("Login successfully").goAway(2000);
        })
        .catch((err) => {
          this.$toasted.show(err).goAway(2000);
        });
    }
  },
};
</script>

<style>
.f-outline input:focus-within ~ label,
.f-outline input:not(:placeholder-shown) ~ label {
  transform: translateY(-1.5rem) translatex(-1rem) scaleX(0.8) scaleY(0.8);
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  margin-top: 20px;
  display: inline-block;
  padding: 8px 8px;
  border-radius: 5px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
  text-align: center;
  height: 40px;
  cursor: pointer;
}
</style>