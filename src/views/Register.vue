<template>
  <div class="text-indigo-100 about">
    <navbar />
    <section class="px-4 py-5 bg-middle md:bg-primary md:px-8">
      <div
        class="container mx-auto border-solid rounded-lg md:p-8 bg-middle md:shadow-lg"
      >
        <h1 class="pb-5 text-3xl text-indigo-100">Register</h1>
        <div class="w-full">
          <a
            href="https://api.comps.gg/connect/discord"
            class="flex items-center justify-start w-64 px-4 py-3 text-sm font-bold text-gray-100 rounded shadow cursor-pointer discord-bg hover:text-white"
          >
            <svg
              class="w-6 h-6 mr-3 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4a8.18 8.18 0 001.8.536c.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"
              />
            </svg>
            <span class="block w-1 h-6 border-l border-white-800"></span>
            <span class="pl-3">Sign up with Discord</span>
          </a>

          <div
            class="flex items-center justify-start w-64 px-4 py-3 mt-2 text-sm font-bold text-gray-100 rounded shadow cursor-pointer twitter-bg hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-3 fill-current"
            >
              <path
                d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
              />
            </svg>
            <span class="block w-1 h-6 mr-1 border-l border-white-800"></span>
            <span class="pl-3">Sign up with Twitter</span>
          </div>

          <div
            class="flex items-center justify-start w-64 px-4 py-3 mt-2 text-sm font-bold text-gray-100 rounded shadow cursor-pointer twitch-bg hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-3 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"
              />
            </svg>
            <span class="block w-1 h-6 mr-1 border-l border-white-800"></span>
            <span class="pl-3">Sign up with Twitch</span>
          </div>
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
    discord: function() {
      alert("discord");
      fetch(`https://api.comps.gg/connect/discord`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
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
