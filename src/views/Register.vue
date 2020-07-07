<template>
  <div class="about text-indigo-100">
    <navbar />
    <section class="bg-middle md:bg-primary py-5 px-4 md:px-8">
      <div
        class="md:p-8 mx-auto bg-middle container md:shadow-lg rounded-lg border-solid"
      >
        <h1 class="text-indigo-100 text-3xl">Register</h1>
        <div class="w-full max-w-xs">
          <a href="https://api.comps.gg/connect/discord" class="link my-5 py-5"><button v-on:click="greet" class="bg-indigo-200 text-black" type="button" style="width: 100%;"><i class="fa fa-discord"></i>Discord</button></a>
  <form class="hidden bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
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
        fetch(`https://api.comps.gg/connect/discord`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((error) => console.error(error));
    }
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
