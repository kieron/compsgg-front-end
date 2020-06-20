<template>
  <section id="homeList" class="sm:bg-primary py-1">
    <div class="container mx-auto m-8 bg-lighter p-2 md:p-10 py-5 sm:rounded-lg">
      <div class="w-full items-center justify-center px-2 md:p-0" id="app">
        <div v-if="loading" class="mx-auto w-full">
          <img class="mx-auto" src="/img/spinner.svg" />
        </div>
        <div v-else>
          <div
            v-for="giveaway in giveaways"
            :key="giveaway.id"
            class="w-full px-2 mb-5  transition transform hover:-translate-y-2 duration-100 ease-out "
          >
            <div
              class="bg-middle shadow-md rounded-lg overflow-hidden md:flex border-solid border-l-8 border-indigo-500 hover:border-indigo-200"
            >
              <router-link :to="'/giveaway/' + giveaway.id"  class="w-full">
                <div class="p-4 md:p-5">
                  <div class="flex justify-between items-center">
                    <div>
                      <p class="font-bold text-md md:text-2xl lg:text-3xl text-indigo-100 header-font tracking-wide">
                        {{ giveaway.name }}
                      </p>

                      <div v-if="giveaway.tweet_created_at" class="text-sm text-gray-600 block flex items-center mb-2">
                        <svg class="inline-block align-middle w-5 h-5 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                         <span class="inline-block align-middle">Added 20/06/20 <!--{{ giveaway.tweet_created_at }}--></span> 
                      </div>
                      <div class="flex items-center mb-3 ">
                        <div class="flex justify-between items-center">
                          <div class="flex flex-row-reverse justify-end">
                            <p class="text-indigo-100 hidden tracking-wide md:block text-sm">
                              {{ giveaway.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="font-bold text-gray-600 text-sm header-font tracking-widest">
                        <img v-if="giveaway.twitterProfileImage" 
                          class="rounded-full w-8 inline-block mr-1 "
                          v-bind:src="giveaway.twitterProfileImage"
                        /> {{ giveaway.display_name }}
                        <div class="inline" v-if="giveaway.verified_twitter">
                          <svg class="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                          </svg>
                          <span title="This competition host is verified on Twitter" class="tracking-wider py-1 text-xs rounded leading-loose text-xs font-medium">Verified</span>
                        </div>
                      </div>
                    </div>
                    <router-link
                      :to="'/giveaway/' + giveaway.id"
                      class="ml-5 mt-3 sm:mt-0 py-1 px-3 md:py-1 md:px-4 bg-indigo-500 hover:bg-indigo-200 font-bold hover:text-indigo-800 text-white rounded-lg shadow-md"
                      >Open</router-link
                    >
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
export default {
  data() {
    return {
      giveaways: [],
      loading: true,
    };
  },
  methods: {
    async getAllGiveAways() {
      try {
        let response = await this.$http.get(
          "giveaways?published=true&_sort=created_at:desc&_limit=10"
        );
        this.giveaways = response.data;
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
