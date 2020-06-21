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
      <div class="flex flex-wrap justify-between">
        <p
          class="text-indigo-100 text-3xl md:text-4xl font-medium leading-tight header-font tracking-widest"
        >
          {{ giveaway.name }}
        </p>
        <div class="flex items-end justify-end py-1 md:py-0 mb-1 md:mb-0">
          <label class="flex items-center">
            <div
              class="select-none text-lg font-medium text-gray-600 inline align-middle header-font tracking-widest"
            >
              Mark as done
            </div>
            <div
              class="bg-darker opacity-50 border-2 rounded border-gray-400 w-6 h-6 md:w-8 md:h-8 flex flex-shrink-0 justify-center items-center ml-2 focus-within:border-blue-500 inline align-middle"
            >
              <input
                type="checkbox"
                :value="giveaway.id"
                id="mainCat.merchantId"
                @change="markAsDone(giveaway.id)"
                :checked="completed == true"
                class="opacity-0 absolute inline"
              />
              <svg
                class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
          </label>
        </div>
      </div>

      <hr class="mb-3 md:my-3 opacity-25" />
      <div class="flex flex-wrap md:flex-no-wrap">
        <div
          class="py-1 px-2  w-full bg-lighter rounded-lg md:mb-0 md:mr-2 flex flex-wrap items-center header-font border border-indigo-200 text-gray-600 text-md border-opacity-25 tracking-widest"
        >
          <img
            v-if="giveaway.twitterProfileImage"
            class="rounded-full w-8 mr-3 "
            v-bind:src="giveaway.twitterProfileImage"
          />
          <div class="mr-2 p-1 md:p-0 flex items-center">
            <svg
              class="inline w-5 h-5 mr-1 inline align-middle"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
            <a
              class="header-font inline align-middle"
              v-if="giveaway.display_name"
              target="_blank"
              v-bind:href="giveaway.twitterProfileUrl"
              ><span class="">{{ giveaway.display_name }}</span></a
            >
          </div>
          <div
            v-if="giveaway.verified_twitter"
            class="mr-2 p-1 md:p-0 flex items-center"
          >
            <svg
              class="inline w-5 h-5 text-green-600 mr-1 inline align-middle"
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
            <span class="header-font inline align-middle">Verified</span>
          </div>

          <div
            v-if="createdDate"
            class="mr-2 p-1 md:p-0 header-font flex items-center"
          >
            <svg
              class="inline w-5 h-5 mr-1 "
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
            <span class="">ADDED {{ createdDate }}</span>
          </div>

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
            <p class="text-yellow-300 ">Boosted Post!</p>
          </div>
        </div>
        <div
          class="py-1 px-2 w-full bg-lighter rounded-lg md:mb-0 flex flex-row items-center md:mt-0 mt-2 flex justify-between flex-wrap border border-indigo-200 border-opacity-25"
        >
          <span
            class="inline-block align-middle tracking-widest header-font text-gray-600"
            >Share this Competition</span
          >
          <a
            v-bind:href="
              'https://twitter.com/intent/tweet/?text=Check out this giveaway on Comps.gg: ' +
                giveaway.name +
                ', &amp;url=' +
                currentUrl
            "
            target="_blank"
            class="text-center p-2 bg-blue-400 bg-opacity-25 hover:bg-blue-500 text-blue-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
            ><svg
              class="inline-block align-middle w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
              />
            </svg>
          </a>
          <a
            v-bind:href="
              'https://facebook.com/sharer/sharer.php?u=' + currentUrl
            "
            target="_blank"
            class="text-center p-2 bg-blue-700 bg-opacity-25 hover:bg-blue-700 text-blue-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
            ><svg
              class="inline-block align-middle w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
              />
            </svg>
          </a>
          <a
            v-bind:href="
              'whatsapp://send?text=Check out this giveaway on Comps.gg: ' +
                giveaway.name +
                ' ' +
                currentUrl
            "
            target="_blank"
            class="text-center p-2 bg-green-400 bg-opacity-25 hover:bg-green-500 text-green-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
            ><svg
              class="inline-block align-middle w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </a>
          <a
            v-bind:href="
              'mailto:?subject=Check out this giveaway on Comps.gg' +
                giveaway.name +
                '=o%20tracking.&amp;body=' +
                currentUrl
            "
            target="_blank"
            class="text-center p-2 bg-gray-500 bg-opacity-25 hover:bg-gray-500 text-gray-100 hover:text-gray-800 rounded-lg shadow-sm text-xs tracking-wide uppercase"
            ><svg
              class="inline-block align-middle w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <!--   -->

      <div v-if="giveaway.description" class="my-5 text-gray-600">
        <span class="text-lg font-bold text-indigo-100">Requirements</span>
        <hr class="my-2 opacity-25" />
        <div v-if="giveaway.playr_url" class>
          <p class="mb-2">
            This giveaway is being hosted on the Playr platform, if your browser
            allows it, you can fill it in right here on Comps.gg below, or if
            not, you should see a button that will take you to the competition!
          </p>
        </div>
        <div v-if="giveaway.gleam_url" class>
          <p class="mb-2">
            This giveaway is being hosted on the Gleam platform, if your browser
            allows it, you can fill it in right here on Comps.gg below, or if
            not, you should see a button that will take you to the competition!
          </p>
        </div>
        <div v-if="giveaway.entry_url" class="flex">
          <p class="mb-2">
            This giveaway is being hosted externally, you should see a button
            that will take you to the competition!
          </p>
        </div>
        <div v-if="giveaway.like_required || giveaway.rt_required">
          <p class="mb-2">
            This giveaway may requires you to
            <span v-if="giveaway.like_required">like</span>
            <span v-if="giveaway.like_required && giveaway.rt_required">/</span>
            <span v-if="giveaway.rt_required">retweet</span> a tweet, you can
            use the links below to do that, or open the tweet to do it manually.
            Be sure to check the description we found below, for any additional
            information!
          </p>
          <div class="pt-3 flex items-center flex-wrap">
            <a
              v-if="giveaway.like_required"
              v-bind:href="
                'https://twitter.com/intent/like?tweet_id=' +
                  giveaway.tweet_id_str
              "
              target="_blank"
              class="text-center flex items-center bg-indigo-500 hover:bg-indigo-300 font-medium text-white hover:text-gray-800 rounded-lg shadow-md sm:mt-0 py-2 px-2 mr-2 mb-2 md:mb-0"
              ><svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                ></path></svg
              >Like Tweet</a
            >

            <a
              v-if="giveaway.rt_required"
              v-bind:href="
                'https://twitter.com/intent/retweet?tweet_id=' +
                  giveaway.tweet_id_str
              "
              target="_blank"
              class="text-center flex items-center bg-indigo-500 hover:bg-indigo-300 font-medium text-white hover:text-gray-800 rounded-lg shadow-md sm:mt-0 py-2 px-2 mr-2 mb-2 md:mb-0"
              ><svg
                class="w-4 h-4 mr-1"
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
              <span class="inline align-middle">Retweet Tweet</span></a
            >
            <a
              v-bind:href="
                'https://twitter.com/' +
                  giveaway.display_name +
                  '/status/' +
                  giveaway.tweet_id_str
              "
              target="_blank"
              class="text-center flex block items-center bg-indigo-500 hover:bg-indigo-300 font-medium text-white hover:text-gray-800 rounded-lg shadow-md sm:mt-0 py-2 px-2 mr-2 mb-2 md:mb-0"
              ><svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path></svg
              ><span class="">Open Tweet</span></a
            >
          </div>
        </div>
      </div>

      <div v-if="giveaway.description" class="my-8 text-gray-600">
        <span class="text-lg font-bold text-indigo-100">Description</span>
        <hr class="my-2 opacity-25" />
        {{ giveaway.description }}
      </div>

      <!-- 
       ██████╗ ██╗     ███████╗ █████╗ ███╗   ███╗
      ██╔════╝ ██║     ██╔════╝██╔══██╗████╗ ████║
      ██║  ███╗██║     █████╗  ███████║██╔████╔██║
      ██║   ██║██║     ██╔══╝  ██╔══██║██║╚██╔╝██║
      ╚██████╔╝███████╗███████╗██║  ██║██║ ╚═╝ ██║
       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ 
       -->
      <div class="items-center" id="gleam-housing">
        <a
          v-if="giveaway.gleam_url"
          v-bind:href="giveaway.gleam_url"
          target="_blank"
          rel="nofollow"
          class="e-widget inline text-center items-center bg-indigo-500 hover:bg-indigo-300 font-medium text-white hover:text-gray-800 rounded-lg shadow-md sm:mt-0 py-3 px-2 mb-2"
          id="cjecl"
          ><svg
            class="inline w-4 h-4 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
          <span class="inline align-middle items-center">Open Giveaway</span></a
        >
      </div>

      <!--                                                                                       
      ██████╗ ██╗      █████╗ ██╗   ██╗██████╗     ██████╗  ██████╗ 
      ██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔══██╗   ██╔════╝ ██╔════╝ 
      ██████╔╝██║     ███████║ ╚████╔╝ ██████╔╝   ██║  ███╗██║  ███╗
      ██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══██╗   ██║   ██║██║   ██║
      ██║     ███████╗██║  ██║   ██║   ██║  ██║██╗╚██████╔╝╚██████╔╝
      ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ 
      -->

      <div v-if="giveaway.playr_url" class="flex">
        <div class="w-full overflow-hidden relative" style="min-height:768px">
          <iframe
            class="responsive-iframe"
            style="height:100%"
            width="768px"
            height="100%"
            v-bind:src="giveaway.playr_url + '/embed'"
          ></iframe>
        </div>
      </div>

      <!--
      ███████╗██╗  ██╗████████╗    ██╗   ██╗██████╗ ██╗     
      ██╔════╝╚██╗██╔╝╚══██╔══╝    ██║   ██║██╔══██╗██║     
      █████╗   ╚███╔╝    ██║       ██║   ██║██████╔╝██║     
      ██╔══╝   ██╔██╗    ██║       ██║   ██║██╔══██╗██║     
      ███████╗██╔╝ ██╗   ██║       ╚██████╔╝██║  ██║███████╗
      ╚══════╝╚═╝  ╚═╝   ╚═╝        ╚═════╝ ╚═╝  ╚═╝╚══════╝
      -->

      <div v-if="giveaway.entry_url" class="flex mb-6">
        <a
          v-if="giveaway.entry_url"
          v-bind:href="giveaway.entry_url"
          target="_blank"
          rel="nofollow"
          class="mx-auto mt-3 w-full text-center sm:mt-0 py-2 px-2 md:py-3 md:px-6 bg-indigo-500 hover:bg-indigo-300 font-bold text-white hover:text-gray-800 rounded-lg shadow-md"
        >
          Open Giveaway
          <svg
            class="inline w-5 h-5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </div>
      <div class="flex justify-end">
        <a
          class="self-end bg-lighter px-5 py-2 mt-4 border border-indigo-200 text-gray-600 text-md border-opacity-25 rounded-md cursor-pointer header-font tracking-widest"
          @click="$router.go(-1)"
          >Go Back</a
        >
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

<!--
     ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
     ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
     ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║   
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║   
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
-->

<script>
var moment = require("moment");
moment().format();
export default {
  data() {
    return {
      giveaway: {},
      loading: true,
      errored: false,
      currentUrl: window.location.href,
      metaTitle: "",
      createdDate: "",
      newItemTitle: "",
      completed: false,
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
        this.createdDate = moment(response.data.created_at).format("DD/MM/YY");
        let markedAsDone = localStorage.getItem("markedAsDone");
        if (markedAsDone) {
          this.completed = markedAsDone.includes(this.giveaway.id) ? true : false;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
        const plugin = document.createElement("script");
        plugin.setAttribute("src", "https://widget.gleamjs.io/e.js");
        plugin.async = true;
        document.head.appendChild(plugin);
        gleamChecker();
      }
    },
    markAsDone: function(gId) {
      const markedAsDone = JSON.parse(window.localStorage.getItem("markedAsDone")) || {};
      if (markedAsDone[gId]) {
        delete markedAsDone[gId];
        window.localStorage.setItem(
          "markedAsDone",
          JSON.stringify(markedAsDone)
        );
        this.completed = false;
      } else {
        markedAsDone[gId] = {
          id: gId,
        };
        window.localStorage.setItem(
          "markedAsDone",
          JSON.stringify(markedAsDone)
        );
        this.completed = true;
      }
    },
  },
  created() {
    this.getGiveawayInfo(this.$route.params.id);
  },
  metaInfo() {
    return {
      title: this.metaTitle + " Giveaway | Comps.gg",
      meta: [
        {
          name: "description",
          content:
            this.metaTitle +
            " Giveaway on, Comps.gg. Find Competitions & Giveaways from all over the web.",
        },
      ],
    };
  },
};

function gleamChecker() {
  setTimeout(function() {
    let gleamButs = document.getElementsByClassName("w-entry-button");
    gleamButs.forEach((element) => {
      element.classList.add(
        "newGleamHook",
        "inline",
        "text-center",
        "items-center",
        "bg-indigo-500",
        "hover:bg-indigo-300",
        "font-medium",
        "text-white",
        "hover:text-gray-800",
        "rounded-lg",
        "shadow-md",
        "sm:mt-0",
        "py-3",
        "px-3",
        "mb-2"
      );
      element.classList.remove("w-entry-button");
      element.innerHTML += "<svg class='inline w-5 h-5 ml-2' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'><path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path></svg>";
    });
  }, 200);
}
</script>
