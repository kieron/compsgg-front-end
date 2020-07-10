<template>
  <div class="text-indigo-100 about">
    <navbar />
    <section class="px-4 py-5 bg-middle md:bg-primary md:px-8">
      <div
        class="container mx-auto border-solid rounded-lg md:p-8 bg-middle md:shadow-lg"
      >
        <h1 class="text-3xl text-indigo-100">Register</h1>
        <div class="w-full max-w-xs">
          <a href="https://api.comps.gg/connect/discord" class="py-5 my-5 link"
            ><button
              v-on:click="greet"
              class="text-black bg-indigo-200"
              type="button"
              style="width: 100%;"
            >
              <i class="fa fa-discord"></i>Discord
            </button></a
          >
          <form class="hidden px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="username"
              >
                Username
              </label>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password"
              >
                Password
              </label>
              <input
                class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-xs italic text-red-500">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
    <mailChimp />
    <footerMain />
  </div>
</template>

<script>
import navbar from "@/components/navBar.vue";
import footerMain from "@/components/footerMain.vue";
import mailChimp from "@/components/mailChimp.vue";

export default {
  components: {
    navbar,
    mailChimp,
    footerMain,
  },
  methods: {
    greet: function() {
      fetch(`https://api.comps.gg/connect/discord`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error(error));
    },
  },
  metaInfo() {
    return {
      title: "About | Comps.gg",
      meta: [
        {
          name: "description",
          content:
            this.metaTitle +
            "About Comps.gg. Find Competitions & Giveaways from all over the web.",
        },
      ],
    };
  },
};
</script>
