<template>
  <section id="homeList" class="sm:bg-primary md:py-1">
    <div
      class="container p-2 py-5 mx-auto  giveway-container md:my-8 bg-lighter md:p-7 lg:p-10 md:rounded-lg"
    >
      <div class="items-center justify-center w-full px-2 md:p-0" id="app">
        <div v-if="loading" class="w-full mx-auto">
          <img class="mx-auto" src="/img/spinner.svg" />
        </div>
        <div v-else class="slide-in-bottom">
          <div
            class="flex px-5 py-1 mx-2 overflow-hidden transition duration-1000 transform border-indigo-200 rounded-t-lg shadow-sm cursor-pointer  bg-middle md:flex"
            id="filterToggle"
            v-on:click="animateFilter"
            @click="showToggle = !showToggle"
            v-bind:class="{
              'rounded-b-lg': !showToggle,
              'border-b-2': showToggle,
            }"
          >
            <span
              class="flex-grow my-2 font-semibold tracking-widest text-gray-500 uppercase  text-md"
            >
              Filter
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 my-2 text-gray-600"
              id="filterIcon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>

          <div
            class="p-5 mx-2 mb-5 overflow-hidden transition duration-300 ease-in-out transform rounded-b-lg shadow-sm  swing-in-top-fwd bg-middle hover:border-indigo-200"
            id="filter"
            v-if="showToggle"
          >
            <div class="flex flex-wrap">
              <div class="w-1/2 px-3 mb-6 lg:w-1/3 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="grid-state"
                >
                  Platform
                </label>
                <div class="relative">
                  <select
                    class="block w-full px-4 py-3 pr-8 leading-tight text-indigo-200 border border-indigo-200 border-opacity-50 rounded opacity-50 appearance-none  bg-middle focus:outline-none focus:bg-lighter focus:border-gray-500"
                    id="grid-state"
                    v-model="filter.platform"
                  >
                    <option value="none">All</option>
                    <option value="gleam_url">Gleam</option>
                    <option value="playr_url">Playr</option>
                    <option value="sdqk_url">Sideqik</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none "
                  >
                    <svg
                      class="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-3 mb-6 lg:w-1/3 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="grid-state"
                >
                  Verified
                </label>
                <div class="relative">
                  <select
                    class="block w-full px-4 py-3 pr-8 leading-tight text-indigo-200 border border-indigo-200 border-opacity-50 rounded opacity-50 appearance-none  bg-middle focus:outline-none focus:bg-lighter focus:border-gray-500"
                    id="grid-state"
                    v-model="filter.verified_twitter"
                  >
                    <option value="none">Both</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none "
                  >
                    <svg
                      class="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-full px-3 mb-6 lg:w-1/3 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="grid-state"
                >
                  Include Ended
                </label>
                <div class="relative">
                  <select
                    class="block w-full px-4 py-3 pr-8 leading-tight text-indigo-200 border border-indigo-200 border-opacity-50 rounded opacity-50 appearance-none  bg-middle focus:outline-none focus:bg-lighter focus:border-gray-500"
                    id="grid-state"
                    v-model="filter.include_ended"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none "
                  >
                    <svg
                      class="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--
          █████╗ ██████╗ ██╗   ██╗███████╗██████╗ ████████╗
          ██╔══██╗██╔══██╗██║   ██║██╔════╝██╔══██╗╚══██╔══╝
          ███████║██║  ██║██║   ██║█████╗  ██████╔╝   ██║   
          ██╔══██║██║  ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗   ██║   
          ██║  ██║██████╔╝ ╚████╔╝ ███████╗██║  ██║   ██║   
          ╚═╝  ╚═╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝   ╚═╝   
          -->

          <div
            class="w-full px-2 mt-5 mb-5 transition duration-100 ease-out transform  hover:-translate-y-2"
          >
            <div
              class="overflow-hidden transition duration-300 transform bg-indigo-900 border-l-8 border-indigo-200 border-solid rounded-lg shadow-sm  hover:shadow-md hover:bg-primary md:flex hover:border-indigo-200"
            >
              <a
                href="mailto:hello@comps.gg?subject=A%20great%20new%20opportunity"
                class="w-full"
              >
                <div class="px-3 py-3 md:p-3 lg:p-4">
                  <div class="flex items-center justify-between">
                    <div class="w-full">
                      <div class="flex flex-wrap items-center">
                        <p
                          class="mr-2 text-lg font-medium tracking-widest text-indigo-100  lg:text-2xl header-font"
                        >
                          Your Message Here!
                        </p>
                      </div>

                      <div class="flex flex-row-reverse justify-end">
                        <p
                          class="text-xs tracking-widest text-gray-200  md:text-sm"
                        >
                          Want to advertise on Comps.gg? Let's Talk.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- 
          ██████╗ ██╗██╗   ██╗███████╗ █████╗ ██╗    ██╗ █████╗ ██╗   ██╗███████╗
          ██╔════╝ ██║██║   ██║██╔════╝██╔══██╗██║    ██║██╔══██╗╚██╗ ██╔╝██╔════╝
          ██║  ███╗██║██║   ██║█████╗  ███████║██║ █╗ ██║███████║ ╚████╔╝ ███████╗
          ██║   ██║██║╚██╗ ██╔╝██╔══╝  ██╔══██║██║███╗██║██╔══██║  ╚██╔╝  ╚════██║
          ╚██████╔╝██║ ╚████╔╝ ███████╗██║  ██║╚███╔███╔╝██║  ██║   ██║   ███████║
           ╚═════╝ ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
          -->

          <div
            v-for="giveaway in paginatedData"
            :key="giveaway.id"
            class="w-full px-2 mt-5 mb-5 transition duration-100 ease-out transform  hover:-translate-y-2"
          >
            <div
              v-bind:class="{ 'opacity-25': giveaway.completed }"
              class="overflow-hidden transition duration-300 transform border-l-8 border-indigo-500 border-solid rounded-lg shadow-sm  bg-middle hover:shadow-md hover:bg-primary md:flex hover:border-indigo-200"
            >
              <router-link :to="'/giveaway/' + giveaway.id" class="w-full">
                <div class="px-3 py-2 md:p-3 lg:p-4">
                  <div class="flex items-center justify-between">
                    <div class="w-full">
                      <div class="flex flex-wrap items-center">
                        <p
                          class="mr-2 text-lg font-medium tracking-widest text-indigo-200  lg:text-2xl header-font"
                        >
                          {{ giveaway.name }}
                        </p>
                        <div class="flex items-center" v-if="giveaway.boost">
                          <svg
                            class="inline-block w-4 h-4 mr-1 text-yellow-300 align-middle  md:w-5 md:h-5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                          <p
                            class="text-xs text-yellow-300 uppercase md:text-sm"
                          >
                            Boosted Post!
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center mb-2">
                        <div class="flex items-center justify-between">
                          <div class="flex flex-row-reverse justify-end">
                            <p
                              class="text-xs tracking-widest text-gray-500  md:text-sm"
                            >
                              {{ giveaway.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr class="my-1 opacity-25 md:my-2" />
                      <div class="flex flex-wrap text-xs giveawayInfo">
                        <div
                          v-if="giveaway.verified_twitter"
                          class="flex flex-no-wrap items-center mr-2 text-gray-600 "
                        >
                          <svg
                            class="inline w-4 h-4 mr-1 text-green-600 align-middle "
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          <span
                            title="This competition host is verified on Twitter"
                            class="whitespace-no-wrap align-middle"
                            >Verified</span
                          >
                        </div>
                        <div
                          v-if="giveaway.created_at"
                          class="flex flex-no-wrap items-center mr-2 text-gray-600 "
                        >
                          <svg
                            class="inline w-4 h-4 mr-1 align-middle"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span class="whitespace-no-wrap align-middle"
                            >Added {{ giveaway.created_at }}</span
                          >
                        </div>
                        <div
                          v-if="giveaway.ends_at"
                          class="flex flex-no-wrap items-center mr-2 text-gray-600 "
                        >
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="inline w-4 h-4 mr-1 align-middle"
                          >
                            <path
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>

                          <span class="whitespace-no-wrap align-middle"
                            >Ends {{ giveaway.ends_at }}</span
                          >
                        </div>
                        <div
                          v-if="
                            giveaway.gleam_url ||
                            giveaway.playr_url ||
                            giveaway.sdqk_url
                          "
                          class="flex flex-no-wrap items-center mr-2 text-gray-600 "
                        >
                          <svg
                            class="inline w-4 h-4 mr-1 align-middle"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span
                            v-if="giveaway.gleam_url"
                            title="Giveaway hosted by gleam.io platform."
                            class="whitespace-no-wrap align-middle"
                            >Gleam Competition</span
                          >
                          <span
                            v-if="giveaway.playr_url"
                            title="Giveaway hosted by playr.gg platform."
                            class="whitespace-no-wrap align-middle"
                            >Playr Competition</span
                          >
                          <span
                            title="Giveaway hosted by sdqk.me platform."
                            v-if="giveaway.sdqk_url"
                            class="whitespace-no-wrap align-middle"
                            >Sdqk Competition</span
                          >
                        </div>

                        <div
                          v-if="giveaway.like_required"
                          class="flex flex-no-wrap items-center mr-2 text-gray-600 "
                        >
                          <svg
                            class="inline w-4 h-4 mr-1 align-middle"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>

                          <span
                            title="Giveaway may require you to 'like' a tweet."
                            class="whitespace-no-wrap align-middle"
                            >Like Required</span
                          >
                        </div>

                        <div
                          v-if="giveaway.rt_required"
                          class="items-center mr-2 text-gray-600"
                        >
                          <svg
                            class="inline w-4 h-4 mr-1 align-middle"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>

                          <span
                            title="Giveaway may require you to 'retweet' a tweet."
                            class="whitespace-no-wrap align-middle"
                            >Retweet Required</span
                          >
                        </div>

                        <div
                          v-if="giveaway.follow_required"
                          class="items-center mr-2 text-gray-600"
                        >
                          <svg
                            class="inline w-4 h-4 mr-1 align-middle"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            ></path>
                          </svg>

                          <span
                            title="Giveaway may require you to 'follow' a user."
                            class="whitespace-no-wrap align-middle"
                            >Follow Required</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="px-1 mt-3 ml-5 font-bold text-indigo-300 transition duration-300 rounded-lg  sm:mt-0 md:py-1 md:p-4 hover:text-indigo-100"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!--
          ██████╗  █████╗  ██████╗ ██╗███╗   ██╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
          ██╔══██╗██╔══██╗██╔════╝ ██║████╗  ██║██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
          ██████╔╝███████║██║  ███╗██║██╔██╗ ██║███████║   ██║   ██║██║   ██║██╔██╗ ██║
          ██╔═══╝ ██╔══██║██║   ██║██║██║╚██╗██║██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
          ██║     ██║  ██║╚██████╔╝██║██║ ╚████║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
          ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
          -->

          <div
            class="flex pb-5 mx-auto pagination"
            v-if="filteredGiveaways.length > 10"
          >
            <paginator
              :data="filteredGiveaways"
              @loadedData="getPaginatedData"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import paginator from "../util/paginator";
var moment = require("moment");
moment().format();

export default {
  mounted() {},
  components: {
    paginator,
  },
  data() {
    return {
      filter: {
        verified_twitter: "none",
        platform: "none",
        include_ended: "yes",
      },
      giveaways: [],
      loading: true,
      markedAsDone: [],
      paginatedData: [],
      showToggle: false,
    };
  },
  computed: {
    filteredGiveaways() {
      let fg = this.giveaways;
      let { platform, verified_twitter, include_ended } = this.filter;
      let verified = this.deString(verified_twitter);
      let filters = [];
      if (include_ended === "no") {
        fg = fg.filter((item) => {
          console.log(item);
          return (
            item.end_date && new Date(item.end_date).getTime() > Date.now()
          );
        });
      }

      if (verified !== "none") {
        filters.push({ key: "verified_twitter", value: verified });
      }
      if (platform !== "none") {
        filters.push({ key: platform, value: null, op: "ne" });
      }
      fg = fg.filter((gw) => {
        return filters.every(({ key, value, op }) => {
          return op && op === "ne" ? gw[key] !== value : gw[key] === value;
        });
      });
      this.getPaginatedData(fg);
      return fg;
    },
  },
  methods: {
    getPaginatedData(value) {
      this.paginatedData = value;
    },
    deString(value) {
      return {
        none: "none",
        yes: true,
        no: false,
      }[value];
    },
    async getAllGiveAways() {
    try {
      // Hardcoded data array
      const data = [
        [{"id":15943,"name":"Gaming Bundle Vast Campaign","description":"We’ve teamed up with @KingGeorge for this HUGE Gaming Bundle giveaway!\n\nTo enter, perform these actions via the link below.\n\n-   Retweet and like this tweet\n-   Follow @KingGeorge \n\nEnter Here:  ","tweet_url":"https://twitter.com/VastGG/status/1635741875419185203","tweet_created_at":"Tue Mar 14 20:37:08 +0000 2023","display_name":"VastGG","verified_twitter":false,"user_followers_count":831684,"published":true,"gleam_url":"https://gleam.io/JvAei/kinggeorge-huge-gaming-bundle-vast-campaign-mar-14th-apr-13th","detected_urls":"https://vast.link/kinggeorge","twitterProfileUrl":"https://twitter.com/VastGG","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610319099560615937/OIqiXqhX_normal.jpg","entry_url":null,"like_required":true,"rt_required":true,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1635741875419185203","follow_required":true,"user_id":"851661253944766465","end_date":"2023-04-14T06:59:59.000Z","created_at":"2023-03-14T19:37:16.000Z","updated_at":"2023-03-14T19:37:16.000Z"},{"id":15942,"name":"Win a Raspberry Pi Case on Pi day!","description":"It's Pi day! And instead of a giveaway with a few of our Pi Case 40s, we're giving away a total of 100! Yes, your eyes do not deceive you. 100 Pi cases on Pi day. Just be sure to share a slice with a friend 😎  #win #CoolerMaster #piDay2023 #raspberrypi","tweet_url":"https://twitter.com/CoolerMaster_NA/status/1635699185596141568","tweet_created_at":"Tue Mar 14 17:47:30 +0000 2023","display_name":"CoolerMaster_NA","verified_twitter":false,"user_followers_count":160728,"published":true,"gleam_url":"https://gleam.io/GMVY1/win-a-raspberry-pi-case-on-pi-day","detected_urls":null,"twitterProfileUrl":"https://twitter.com/CoolerMaster_NA","twitterProfileImage":"https://pbs.twimg.com/profile_images/1556684135380369408/aX6cqJ4T_normal.jpg","entry_url":null,"like_required":false,"rt_required":false,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1635699185596141568","follow_required":false,"user_id":"28228172","end_date":"2023-03-22T06:59:59.000Z","created_at":"2023-03-14T16:47:36.000Z","updated_at":"2023-03-14T16:47:36.000Z"},{"id":15934,"name":"Astro A10 Gen 2","description":"We're super excited to announce this giveaway with \n@lilchief2007!\n\nOne person will win this Astro A10 Gen 2!\n\nTo enter, perform these tasks via the link below:\n\n- Retweet + Like\n- Follow @lilchief2007 + @VastGG\n\nEnter Here:  ","tweet_url":"https://twitter.com/VastGG/status/1635437869731913729","tweet_created_at":"Tue Mar 14 00:29:07 +0000 2023","display_name":"VastGG","verified_twitter":false,"user_followers_count":831857,"published":true,"gleam_url":"https://gleam.io/W92kf/lilchief2007-astro-a10-gen-2-vast-campaign-mar-13th-apr-12th","detected_urls":"https://vast.link/lilchief","twitterProfileUrl":"https://twitter.com/VastGG","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610319099560615937/OIqiXqhX_normal.jpg","entry_url":null,"like_required":true,"rt_required":true,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1635437869731913729","follow_required":true,"user_id":"851661253944766465","end_date":"2023-04-13T06:59:59.000Z","created_at":"2023-03-13T23:29:15.000Z","updated_at":"2023-03-13T23:29:15.000Z"},{"id":15922,"name":"Gaming Bundle","description":"We’ve teamed up with @TMT_Church to giveaway 6,700 Apex coins or $60 cash!\n \nTo enter, perform these actions via the link below.\n\n-   Retweet and like this tweet\n-   Follow @TMT_Church + @VastGG\n\nEnter Here:  ","tweet_url":"https://twitter.com/VastGG/status/1633937283224162311","tweet_created_at":"Thu Mar 09 21:06:20 +0000 2023","display_name":"VastGG","verified_twitter":false,"user_followers_count":831039,"published":true,"gleam_url":"https://gleam.io/3L1ci/takemetochurch-6700-apex-coins-or-60-giveaway-mar-9th-apr-8th","detected_urls":"https://vast.link/TakeMeToChurch","twitterProfileUrl":"https://twitter.com/VastGG","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610319099560615937/OIqiXqhX_normal.jpg","entry_url":null,"like_required":true,"rt_required":true,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1633937283224162311","follow_required":true,"user_id":"851661253944766465","end_date":"2023-04-09T06:59:59.000Z","created_at":"2023-03-09T20:06:28.000Z","updated_at":"2023-03-09T20:06:28.000Z"},{"id":15916,"name":"Gaming PC Bundle","description":"We’ve teamed up with @beacn for this PC Bundle giveaway!\n\nTo enter, perform these actions via the link below.\n\n-   Retweet and like this tweet\n-   Follow @BEACN\n\nEnter Here:  ","tweet_url":"https://twitter.com/VastGG/status/1633146109244702720","tweet_created_at":"Tue Mar 07 16:42:29 +0000 2023","display_name":"VastGG","verified_twitter":false,"user_followers_count":831053,"published":true,"gleam_url":"https://gleam.io/1T79V/beacn-gaming-pc-bundle-mar-7th-apr-6th","detected_urls":"https://vast.link/BEACN-PC","twitterProfileUrl":"https://twitter.com/VastGG","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610319099560615937/OIqiXqhX_normal.jpg","entry_url":null,"like_required":true,"rt_required":true,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1633146109244702720","follow_required":true,"user_id":"851661253944766465","end_date":"2023-04-07T06:59:59.000Z","created_at":"2023-03-07T15:42:37.000Z","updated_at":"2023-03-07T15:42:37.000Z"},{"id":15915,"name":"Suicide Guy PS5 (EU) Codes!","description":"Hello my friends!\n\nA new giveaway for PlayStation 5 has started! \n it out before it ends \n#giveaway","tweet_url":"https://twitter.com/ChubbyPixel/status/1633144531934752771","tweet_created_at":"Tue Mar 07 16:36:13 +0000 2023","display_name":"ChubbyPixel","verified_twitter":false,"user_followers_count":114402,"published":true,"gleam_url":"https://gleam.io/ZuyJ3/suicide-guy-for-playstation-5-eu-giveaway","detected_urls":null,"twitterProfileUrl":"https://twitter.com/ChubbyPixel","twitterProfileImage":"https://pbs.twimg.com/profile_images/1613274346260238336/afpboWIz_normal.jpg","entry_url":null,"like_required":false,"rt_required":false,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1633144531934752771","follow_required":false,"user_id":"625410020","end_date":null,"created_at":"2023-03-07T15:36:19.000Z","updated_at":"2023-03-07T15:36:19.000Z"},{"id":15908,"name":"Bundle Giveaway!","description":"We’re excited to launch this epic bundle Giveaway with \n@blackoni\n\nTo enter, perform these actions via the link below.\n\n-   Retweet and like\n-   Follow @VastGG + @blackoni \n \nEnter Here:  ","tweet_url":"https://twitter.com/VastGG/status/1632150408524095489","tweet_created_at":"Sat Mar 04 22:45:55 +0000 2023","display_name":"VastGG","verified_twitter":false,"user_followers_count":830793,"published":true,"gleam_url":"https://gleam.io/9aVFt/black-oni-bundle-giveaway-mar-4th-apr-3rd","detected_urls":"https://vast.link/Black-Oni","twitterProfileUrl":"https://twitter.com/VastGG","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610319099560615937/OIqiXqhX_normal.jpg","entry_url":null,"like_required":true,"rt_required":true,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1632150408524095489","follow_required":true,"user_id":"851661253944766465","end_date":"2023-04-04T06:59:59.000Z","created_at":"2023-03-04T21:46:03.000Z","updated_at":"2023-03-04T21:46:03.000Z"},{"id":15904,"name":"ROCCAT Giveaway","description":"This month, our fans can win a Vulcan TKL and Kone XP! ⌨️🖱️\n\nTo enter, follow @ROCCAT, head to the link below and follow the instructions to enter! 👇\n ","tweet_url":"https://twitter.com/ROCCAT/status/1632077720044617728","tweet_created_at":"Sat Mar 04 17:57:05 +0000 2023","display_name":"ROCCAT","verified_twitter":true,"user_followers_count":277807,"published":true,"gleam_url":null,"detected_urls":null,"twitterProfileUrl":"https://twitter.com/ROCCAT","twitterProfileImage":"https://pbs.twimg.com/profile_images/1562482258228875266/5ZGTM7jV_normal.jpg","entry_url":null,"like_required":false,"rt_required":false,"playr_url":null,"boost":false,"sdqk_url":"https://sdqk.me/p/roccat-monthly-giveaway-march-2023-icTpqAW8","tweet_id":"1632077720044617728","follow_required":true,"user_id":"20556356","end_date":null,"created_at":"2023-03-04T16:57:13.000Z","updated_at":"2023-03-04T16:57:13.000Z"},{"id":15902,"name":"PS5 or $500","description":"We’ve teamed up with @Tweaker_Energy for this PS5 or $500 giveaway!\n\nTo enter, perform these actions via the link below.\n\n-   Retweet and like this tweet\n-   Follow @Tweaker_Energy\n\nEnter Here:  ","tweet_url":"https://twitter.com/VastGG/status/1631769210798874628","tweet_created_at":"Fri Mar 03 21:31:11 +0000 2023","display_name":"VastGG","verified_twitter":false,"user_followers_count":830826,"published":true,"gleam_url":"https://gleam.io/JiMX9/tweaker-energy-ps5-or-500-giveaway-mar-3rd-apr-2nd","detected_urls":"https://vast.link/Tweaker-Energy-PS5","twitterProfileUrl":"https://twitter.com/VastGG","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610319099560615937/OIqiXqhX_normal.jpg","entry_url":null,"like_required":true,"rt_required":true,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1631769210798874628","follow_required":true,"user_id":"851661253944766465","end_date":"2023-04-03T06:59:59.000Z","created_at":"2023-03-03T20:31:19.000Z","updated_at":"2023-03-03T20:31:19.000Z"},{"id":15894,"name":"ROCCAT Giveaway","description":"Thanks to @MrSavage, you could win a Magma Mini gaming keyboard ⌨️\n\nSimply enter here and follow the instructions 👇 \n ","tweet_url":"https://twitter.com/ROCCAT/status/1631347659767263232","tweet_created_at":"Thu Mar 02 17:36:05 +0000 2023","display_name":"ROCCAT","verified_twitter":true,"user_followers_count":277775,"published":true,"gleam_url":null,"detected_urls":null,"twitterProfileUrl":"https://twitter.com/ROCCAT","twitterProfileImage":"https://pbs.twimg.com/profile_images/1562482258228875266/5ZGTM7jV_normal.jpg","entry_url":null,"like_required":false,"rt_required":false,"playr_url":null,"boost":false,"sdqk_url":"https://sdqk.me/p/mrsavage-x-roccat-magma-mini-giveaway-dhd3tH43","tweet_id":"1631347659767263232","follow_required":true,"user_id":"20556356","end_date":null,"created_at":"2023-03-02T16:36:14.000Z","updated_at":"2023-03-02T16:36:14.000Z"},{"id":15874,"name":"Win Samsung's Galaxy S23 from SUPCASE","description":"Thought we wouldn't do a #giveaway? Sike! We partnered up with @9to5Google to give one lucky fan a brand new #GalaxyS23 🙏⁣⁣⁣\n⁣⁣⁣\nMake sure to tag your friends and #enter by March 16 at  #win #entries #sweepstakes #contest ","tweet_url":"https://twitter.com/supcase_atl/status/1630204880408158208","tweet_created_at":"Mon Feb 27 13:55:05 +0000 2023","display_name":"supcase_atl","verified_twitter":false,"user_followers_count":22508,"published":true,"gleam_url":"http://gleam.io/WCapU/a/","detected_urls":null,"twitterProfileUrl":"https://twitter.com/supcase_atl","twitterProfileImage":"https://pbs.twimg.com/profile_images/1610096953362096128/AH9aV7so_normal.jpg","entry_url":null,"like_required":false,"rt_required":false,"playr_url":null,"boost":false,"sdqk_url":null,"tweet_id":"1630204880408158208","follow_required":false,"user_id":"3069896577","end_date":"2023-03-17T06:59:59.000Z","created_at":"2023-02-27T12:55:12.000Z","updated_at":"2023-02-27T12:55:12.000Z"}
      ]
  
      // Process the hardcoded data
      this.giveaways = data.map((item) => ({
        ...item,
        created_at: moment(item.created_at).format("DD/MM/YY"),
        ends_at: item.end_date
          ? moment(item.end_date).format("DD/MM/YY HH:MM")
          : "",
      }))
  
      let markedAsDone = localStorage.getItem("markedAsDone")
  
      if (markedAsDone != null) {
        this.giveaways.forEach(function(item) {
          item.completed = markedAsDone.includes(item.id)
        })
      }
  
      this.giveaways.sort((a, b) => Number(b.boost) - Number(a.boost))
  
      this.loading = false
    } catch (err) {
      console.log(err)
    }
  },
    async getAllGiveAwaysOld() {
      try {
        await fetch(
          "https://api.comps.gg/giveaways?published=true&_sort=created_at:desc&_limit=250"
        )
          .then((response) => response.json())
          .then((data) => {
            this.giveaways = data.map((item) => ({
              ...item,
              created_at: moment(item.created_at).format("DD/MM/YY"),
              ends_at: item.end_date
                ? moment(item.end_date).format("DD/MM/YY HH:MM")
                : "",
            }));
            let markedAsDone = localStorage.getItem("markedAsDone");

            if (markedAsDone != null) {
              this.giveaways.forEach(function (item) {
                item.completed = markedAsDone.includes(item.id);
              });
            }

            this.giveaways.sort((a, b) => Number(b.boost) - Number(a.boost));

            this.loading = false;
          });
      } catch (err) {
        console.log(err);
      }
    },
    animateFilter: function () {
      document.getElementById("filterIcon").classList.add("jello-horizontal");
      setTimeout(function () {
        document
          .getElementById("filterIcon")
          .classList.remove("jello-horizontal");
      }, 500);
    },
  },

  created() {
    this.getAllGiveAways();
  },
};
</script>

<style scoped>
button:disabled {
  cursor: default;
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
