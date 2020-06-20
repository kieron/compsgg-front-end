<template>
  <div class="w-full">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <div v-if="loading" class="mx-auto w-full">
      <img class="mx-auto" src="/img/spinner.svg" />
    </div>
    <div v-else>
      <p class="text-indigo-100 text-4xl font-bold leading-tight header-font tracking-widest">{{ giveaway.name }}</p>
      <hr class="mb-3 md:my-3" />
      <div class="flex flex-wrap md:flex-no-wrap">
        <div class="py-2 px-5 w-full bg-lighter rounded-lg md:mb-0 md:mr-2 flex items-center" >
            <img
              v-if="giveaway.twitterProfileImage"
              class="rounded-full w-8 mr-2 inline-block align-middle"
              v-bind:src="giveaway.twitterProfileImage"
            />
            <div class="font-bold text-gray-600 inline-block align-middle">
              <a class="inline-block align-middle tracking-widest header-font"
                v-if="giveaway.display_name"
                target="_blank"
                v-bind:href="giveaway.twitterProfileUrl"
              >{{ giveaway.display_name }}</a>
            </div>

            <span v-if="giveaway.verified_twitter" class="text-gray-600 text-md ml-2 inline-block align-middle">
              <svg class="inline-block align-middle w-5 h-5 text-green-600 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              <span class="inline-block align-middle">Verified</span>
            </span>

            <div v-if="giveaway.tweet_created_at" class="text-gray-600 text-md ml-2 inline-block align-middle">
              <svg class="inline-block align-middle w-5 h-5 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <p class="inline-block align-middle" >{{ giveaway.tweet_created_at }}</p>
            </div>
        </div>
        <div
          class="py-2 px-5 w-full bg-lighter rounded-lg md:mb-0 flex flex-row items-center md:mt-0 mt-2 flex justify-between flex-wrap"
        >
          <span class="text-lg font-bold mr-2 text-gray-600 tracking-widest header-font">Share</span>
          <a
            v-bind:href="
                  'https://twitter.com/intent/tweet/?text=Check out this giveaway on Comps.gg: ' +
                    giveaway.name +
                    ', &amp;url=' +
                    currentUrl
                "
            target="_blank"
            class="text-center mr-2 mt-3 sm:mt-0 px-2 py-2 bg-blue-400 hover:bg-blue-500 text-blue-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
          >Twitter</a>
          <a
            v-bind:href="
                  'https://facebook.com/sharer/sharer.php?u=' + currentUrl
                "
            target="_blank"
            class="text-center mr-2 mt-3 sm:mt-0 px-2 py-2 bg-blue-700 hover:bg-blue-800 text-blue-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
          >Facebook</a>
          <a
            v-bind:href="
                  'whatsapp://send?text=Check out this giveaway on Comps.gg: ' +
                    giveaway.name +
                    ' ' +
                    currentUrl
                "
            target="_blank"
            class="text-center mr-2 mt-3 sm:mt-0 px-2 py-2 bg-green-400 hover:bg-green-500 text-green-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
          >WhatsApp</a>
          <a
            v-bind:href="
                  'mailto:?subject=Check out this giveaway on Comps.gg' +
                    giveaway.name +
                    '=o%20tracking.&amp;body=' +
                    currentUrl
                "
            target="_blank"
            class="text-center mr-2 mt-3 sm:mt-0 px-2 py-2 bg-gray-500 hover:bg-gray-500 text-gray-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
          >Email</a>
        </div>
      </div>
      <div v-if="giveaway.description" class="my-5 text-gray-600">
        <span class="text-lg font-bold text-indigo-100">Requirements</span>
        <hr class="my-2" />
        <div v-if="giveaway.gleam_url" class>
          <p class="mb-2">
            This giveaway is being hosted on the Gleam platform, if your browser allows it, you can fill it in right here on Comps.gg below, or if not, you should see a button that will take you to the competition!
          </p>
        </div>
        <div v-if="giveaway.entry_url" class="flex">
          <p class="mb-2">
            This giveaway is being hosted externally, you should see a button that will take you to the competition!
          </p>
        </div>
        <div v-if="giveaway.like_required || giveaway.rt_required">
          <p class="mb-2">
            This giveaway requires may you to
            <span v-if="giveaway.like_required">like</span>
            <span v-if="giveaway.like_required && giveaway.rt_required">/</span>
            <span v-if="giveaway.rt_required">retweet</span> a tweet!
          </p>
          <div class="flex">
            <a
              v-if="giveaway.like_required"
              v-bind:href="
              'https://twitter.com/intent/like?tweet_id=' +
                giveaway.tweet_id_str
            "
              target="_blank"
              class="mt-3 text-center sm:mt-0 py-2 px-2 md:py-3 md:px-6 bg-indigo-500 hover:bg-indigo-300 font-bold text-white hover:text-gray-800 rounded-lg shadow-md mr-2"
            >Like Tweet</a>
            <a
              v-if="giveaway.rt_required"
              v-bind:href="
              'https://twitter.com/intent/retweet?tweet_id=' +
                giveaway.tweet_id_str
            "
              target="_blank"
              class="mt-3 text-center sm:mt-0 py-2 px-2 md:py-3 md:px-6 bg-indigo-500 hover:bg-indigo-300 font-bold text-white hover:text-gray-800 rounded-lg shadow-md mr-2"
            >Retweet Tweet</a>
          </div>
          <div class="my-3">
            <p class="mb-4">Prefer to Like/RT yourself? Use the link below!</p>
            <a
              v-bind:href="
              'https://twitter.com/' +
                giveaway.display_name +
                '/status/' +
                giveaway.tweet_id_str
            "
              target="_blank"
              class="mt-3 text-center sm:mt-0 py-2 px-2 md:py-3 md:px-6 bg-indigo-400 hover:bg-indigo-300 font-bold text-white hover:text-gray-800 rounded-lg shadow-md mr-2"
            >Link to Tweet</a>
          </div>
        </div>
      </div>

      <div v-if="giveaway.description" class="my-8 text-gray-600">
        <span class="text-lg font-bold text-indigo-100">Description</span>
        <hr class="my-2" />
        {{ giveaway.description }}
      </div>

      <a
        v-if="giveaway.gleam_url"
        v-bind:href="giveaway.gleam_url"
        target="_blank"
        rel="nofollow"
        class="e-widget mt-3 sm:mt-0 py-2 px-2 md:py-3 md:px-6 bg-indigo-500 hover:bg-indigo-300 font-bold text-white hover:text-gray-800 rounded-lg shadow-md"
      >Open on Gleam</a>
      <div v-if="giveaway.entry_url" class="flex">
        <a
          v-if="giveaway.entry_url"
          v-bind:href="giveaway.entry_url"
          target="_blank"
          rel="nofollow"
          class="mx-auto mt-3 w-full text-center sm:mt-0 py-2 px-2 md:py-3 md:px-6 bg-indigo-500 hover:bg-indigo-300 font-bold text-white hover:text-gray-800 rounded-lg shadow-md"
        >
          Open Giveaway
          <svg class="inline w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      </div>

      <noscript>
        <strong>Please Update Your Browser</strong>
        <!-- <strong>We're sorry but Comps.gg doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong>-->
      </noscript>
      <!-- <a
        href="#"
        class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-red-500 hover:bg-red-300 font-bold text-white hover:text-gray-700 rounded-lg shadow-md"
        >Report</a
      >-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      giveaway: {},
      loading: true,
      errored: false,
      currentUrl: window.location.href,
      metaTitle: "",
    };
  },
  methods: {
    async getGiveawayInfo(id) {
      try {
        let response = await this.$http.get(
          `https://api.seekly.io/giveaways/${id}`
        );
        this.giveaway = response.data;
        this.metaTitle = response.data.name;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
        const plugin = document.createElement("script");
        plugin.setAttribute("src", "https://widget.gleamjs.io/e.js");
        plugin.async = true;
        document.head.appendChild(plugin);
      }
    }
  },
  created() {
    this.getGiveawayInfo(this.$route.params.id);
  },
  metaInfo() {
  return {
    title: this.metaTitle + ' Giveaway | Comps.gg',
    meta: [
      { name: 'description', content: this.metaTitle + ' Giveaway on, Comps.gg. Find Competitions & Giveaways from all over the web.' },
    ]
  }
},
};
</script>
