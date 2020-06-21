<template>
  <section id="homeList" class="sm:bg-primary py-1">
    <div
      class="container mx-auto m-8 bg-lighter p-2 md:p-10 py-5 sm:rounded-lg"
    >
      <div class="w-full items-center justify-center px-2 md:p-0" id="app">
        <div v-if="loading" class="mx-auto w-full">
          <img class="mx-auto" src="/img/spinner.svg" />
        </div>
        <div v-else>
          <div
            v-for="giveaway in giveaways"
            :key="giveaway.id"
            class="w-full px-2 mb-5 transition transform hover:-translate-y-2 duration-100 ease-out"
          >
            <div
              v-bind:class="{ 'opacity-25': giveaway.completed }"
              class="bg-middle shadow-sm hover:shadow-md hover:bg-primary transition duration-300 transform rounded-lg overflow-hidden md:flex border-solid border-l-8 border-indigo-500 hover:border-indigo-200"
            >
              <router-link :to="'/giveaway/' + giveaway.id" class="w-full">
                <div class="px-3 py-2 md:p-3 lg:p-4">
                  <div class="flex justify-between items-center">
                    <div class="w-full">
                      <div class="flex items-center flex-wrap "><p class="font-medium text-lg  lg:text-2xl text-indigo-100 header-font tracking-widest mr-2">
                        {{ giveaway.name }}
                      </p>
                      <div class="flex items-center" v-if="giveaway.boost">
                      <svg
                        class="inline-block align-middle md:w-5 md:h-5 w-4 h-4 mr-1 text-yellow-300"
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
                      <p class="text-yellow-300 md:text-sm text-xs uppercase">Boosted Post!</p>
                      </div>
                      </div>
                      <div
                        v-if="giveaway.verified_twitter"
                        class="inline text-xs text-gray-600 items-center mr-2"
                      >
                        <svg
                          class="inline-block align-middle w-4 h-4 mr-1 text-green-600"
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
                          class="inline-block align-middle"
                          >Verified</span
                        >
                      </div>
                      <div
                        v-if="giveaway.created_at"
                        class="inline text-xs text-gray-600 items-center mb-2 mr-2"
                      >
                        <svg
                          class="inline-block align-middle w-4 h-4 mr-1"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span class="inline-block align-middle"
                          >Added {{ giveaway.created_at }}</span
                        >
                      </div>
                      <div
                        v-if="giveaway.gleam_url"
                        class="inline text-xs text-gray-600 items-center mb-2 mr-2"
                      >
                        <svg
                          class="inline-block align-middle w-4 h-4 mr-1"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span class="inline-block align-middle"
                          >Gleam Competition</span
                        >
                      </div>

                      <div
                        v-if="giveaway.like_required"
                        class="inline text-xs text-gray-600 items-center mb-2 mr-2"
                      >
                        <svg
                          class="inline-block align-middle w-4 h-4 mr-1"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>

                        <span class="inline-block align-middle"
                          >'Like' Required</span
                        >
                      </div>

                      <div
                        v-if="giveaway.rt_required"
                        class="inline text-xs text-gray-600 items-center mb-2 mr-2"
                      >
                        <svg
                          class="inline-block align-middle w-4 h-4 mr-1"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          ></path>
                        </svg>

                        <span class="inline-block align-middle"
                          >'ReTweet' Required</span
                        >
                      </div>

                      <div class="flex items-center my-3 hidden lg:block">
                        <div class="flex justify-between items-center">
                          <div class="flex flex-row-reverse justify-end">
                            <p class="text-indigo-100 tracking-widest text-sm">
                              {{ giveaway.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr class="opacity-25 my-2 hidden md:block" />
                      <div
                        class="font-medium text-gray-600 text-sm md:text-lg header-font tracking-widest md:mt-0 mt-3"
                      >
                        <img
                          v-if="giveaway.twitterProfileImage"
                          class="rounded-full w-8 inline-block mr-1 "
                          v-bind:src="giveaway.twitterProfileImage"
                        />
                        {{ giveaway.display_name }}
                      </div>
                    </div>
                    <!-- <router-link
                      :to="'/giveaway/' + giveaway.id"
                      class="ml-5 mt-3 sm:mt-0 px-1 px-3 md:py-1 md:p-4 bg-indigo-500 transition duration-300 hover:bg-indigo-200 font-bold hover:text-indigo-800 text-indigo-200 hover:text-gray-600 rounded-lg shadow-md"
                    >
                      <svg
                        class="h-6 w-6 "
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path></svg
                    ></router-link> -->
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="pagination flex mx-auto">
            <ul class="flex mt-10 mx-auto">
              <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                <a class="flex items-center font-bold" href="#">
                  <span class="mx-1">previous</span>
                </a>
              </li>
              <li
                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-gray-100 rounded-lg"
              >
                <a class="font-bold" href="#">1</a>
              </li>
              <li
                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-gray-100 rounded-lg"
              >
                <a class="font-bold" href="#">2</a>
              </li>
              <li
                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-gray-100 rounded-lg"
              >
                <a class="font-bold" href="#">3</a>
              </li>
              <li
                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-gray-100 rounded-lg"
              >
                <a class="flex items-center font-bold" href="#">
                  <span class="mx-1">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var moment = require("moment");
moment().format();

export default {
  data() {
    return {
      giveaways: [],
      loading: true,
      markedAsDone: [],
    };
  },
  methods: {
    async getAllGiveAways() {
      try {
        let response = await this.$http.get("giveaways?published=true&_sort=created_at:desc&_limit=50");

        this.giveaways = response.data.map((item) => ({
          ...item,
          created_at: moment(item.created_at).format("DD/MM/YY"),
        }));

        let markedAsDone = localStorage.getItem("markedAsDone");

        if (markedAsDone != null) {
          this.giveaways.forEach(function(item) {
            item.completed = markedAsDone.includes(item.id);
          });
        }

        this.giveaways.sort((a, b) => Number(b.boost) - Number(a.boost));

      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getAllGiveAways();
  },
};
</script>
