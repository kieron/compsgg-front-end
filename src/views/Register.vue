<template>
  <div class="text-indigo-100 about">
    <section class="px-4 py-5 bg-middle md:bg-primary md:px-8">
      <div
        class="container mx-auto border-solid rounded-lg md:p-8 bg-middle md:shadow-lg"
      >
        <h1 class="text-3xl text-indigo-100">Register</h1>
        <p>
          Register on Comps.gg to start saving your competition entry history!
        </p>
        <div class="flex flex-col pt-5 providers">
          <a
            v-for="provider of providers"
            :key="provider"
            :href="apiUrl + provider"
            :class="`${provider}-bg`"
            class="flex w-full px-4 py-3 text-sm font-bold text-gray-100 rounded shadow cursor-pointer md:w-64 hover:text-white"
          >
            <SvgIcon :type="provider" />
            <span class="block w-1 h-6 border-l border-white-800"></span>
            <span class="pl-3">Sign up with {{ capitalize(provider) }}</span>
          </a>
        </div>
        <h2 class="mt-6 text-2xl text-indigo-100">
          Huh? Why should I register?
        </h2>
        <p class="mb-1">
          Rest assured, you can continue to use Comps.gg as anonymously as you'd
          like too. However, if you do choose to register, when you mark a
          competition as complete, we can save that information to your account,
          so you can continue from any device at all, making it easier than ever
          to get entering competitions.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    apiUrl: process.env.VUE_APP_API_BASE_URL + "connect/",
    providers: ["discord", "twitter"],
  }),
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  metaInfo() {
    return {
      title: "Register | Comps.gg",
      meta: [
        {
          name: "description",
          content:
            this.metaTitle +
            "Register with Comps.gg. Find Competitions & Giveaways from all over the web.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.providers a:not(:last-child) {
  margin-bottom: 0.5rem;
}
.discord-bg {
  background-color: #7289da;
}
.twitch-bg {
  background-color: #9146ff;
}
.twitter-bg {
  background-color: #1da1f2;
}
</style>
