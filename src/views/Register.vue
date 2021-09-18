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
    <div class="items-center justify-center z-10">
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
          space-y-5
        "
      >
        <h2 class="text-4xl font-bold text-center text-indigo-600">Register</h2>
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
            v-model="payload.username"
            type="text"
            name="username"
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
            for="username"
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
            >Username</label
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
            v-model="payload.address"
            type="text"
            name="address"
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
            for="address"
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
            >Address</label
          >
        </div>
        <div class="flex flex-col item-center mt-4">
          <button
            @click.prevent="register"
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
            Register
          </button>
          <router-link to="login" class="
              underline
              text-sm text-gray-600
              hover:text-gray-900
              mt-2
              text-center
            ">
            Back To Login
          </router-link>
          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function () {
    return {
      payload: {
        username: "",
        email: "",
        password: "",
        address: ""
      }
    };
  },
  methods: {
    register: function () {
      this.$store
        .dispatch("register", this.payload)
        .then(() => {
          this.$router.push({ name: "Login" });
          this.$toasted.show("Register Success").goAway(2000);
        })
        .catch((err) => {
          const errors = err.response.data.message
          errors.forEach(el => {
            this.$toasted.show(el).goAway(2000);
          });
        });
    },
  },
};
</script>

<style>
  .f-outline input:focus-within ~ label,
  .f-outline input:not(:placeholder-shown) ~ label {
    transform: translateY(-1.5rem) translatex(-1rem) scaleX(0.8) scaleY(0.8);
  }
</style>