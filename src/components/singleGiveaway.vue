<template>
  <div class="w-full">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <div v-if="loading" class="w-full mx-auto">
      <img class="mx-auto" src="/img/spinner.svg" />
    </div>
    <div v-else>
      <div class="flex flex-wrap justify-between">
        <span
          class="text-3xl font-medium leading-tight tracking-widest text-indigo-100 md:text-4xl header-font"
        >
          {{ giveaway.name }}
        </span>
        <div class="flex items-end justify-end py-1 mb-1 md:py-0 md:mb-0">
          <label class="flex items-center">
            <div
              class="inline text-lg font-medium tracking-widest text-gray-600 align-middle select-none header-font"
            >
              Mark as done
            </div>

            <div
              class="flex items-center justify-center flex-shrink-0 w-6 h-6 ml-2 align-middle border-2 border-gray-400 rounded opacity-50 bg-darker md:w-8 md:h-8 focus-within:border-blue-500"
            >
              <input
                type="checkbox"
                :value="giveaway.id"
                id="mainCat.merchantId"
                @change="markAsDone(giveaway.id)"
                :checked="completed == true"
                class="absolute inline opacity-0"
              />
              <svg
                class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
          </label>
        </div>
      </div>

      <hr class="mb-3 opacity-25 md:my-3" />
      <div class="flex flex-wrap md:flex-no-wrap">
        <div
          class="flex flex-wrap items-center w-full px-2 py-1 tracking-widest text-gray-600 border border-indigo-200 border-opacity-25 rounded-lg bg-lighter md:mb-0 md:mr-2 header-font text-md"
        >
          <img
            v-if="giveaway.twitterProfileImage"
            class="w-5 h-5 mr-1 rounded-full lg:w-8 lg:h-8 md:mr-3"
            v-bind:src="giveaway.twitterProfileImage"
          />
          <div class="flex items-center p-1 mr-2 md:p-0">
            <svg
              class="inline w-5 h-5 mr-1 align-middle"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <a
              class="inline align-middle "
              v-if="giveaway.display_name"
              target="_blank"
              v-bind:href="giveaway.twitterProfileUrl"
            >
              <span class="header-font">{{ giveaway.display_name }}</span>
            </a>
          </div>
          <div
            v-if="giveaway.verified_twitter"
            class="flex items-center p-1 mr-2 md:p-0"
          >
            <svg
              class="inline w-5 h-5 mr-1 text-green-600 align-middle"
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
            <span class="inline align-middle header-font">Verified</span>
          </div>

          <div
            v-if="createdDate"
            class="flex items-center p-1 mr-2 md:p-0 header-font"
          >
            <svg
              class="inline w-5 h-5 mr-1"
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
            <span class="tracking-widest text-gray-600 align-middle header-font"
              >Added {{ createdDate }}</span
            >
          </div>

          <div
            v-if="endDate"
            class="flex items-center p-1 mr-2 md:p-0 header-font"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline w-5 h-5 mr-1"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="tracking-widest text-gray-600 align-middle header-font"
              >Ends {{ endDate }}</span
            >
          </div>

          <div class="flex items-center" v-if="giveaway.boost">
            <svg
              class="inline-block w-4 h-4 mr-1 text-yellow-300 align-middle md:w-5 md:h-5"
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
            <p class="text-yellow-300">Boosted Post!</p>
          </div>
        </div>
        <div
          class="flex flex-row flex-wrap items-center justify-between w-full px-2 py-1 mt-2 border border-indigo-200 border-opacity-25 rounded-lg bg-lighter md:mb-0 md:mt-0"
        >
          <span
            class="inline-block tracking-widest text-gray-600 align-middle header-font"
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
            class="p-2 text-xs tracking-wide text-center text-blue-100 uppercase bg-blue-400 bg-opacity-25 rounded-lg shadow-sm hover:bg-blue-500 hover:text-gray-800"
          >
            <svg
              class="inline-block w-5 h-5 align-middle fill-current"
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
            class="p-2 text-xs tracking-wide text-center text-blue-100 uppercase bg-blue-700 bg-opacity-25 rounded-lg shadow-sm hover:bg-blue-700 hover:text-gray-800"
          >
            <svg
              class="inline-block w-5 h-5 align-middle fill-current"
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
            class="p-2 text-xs tracking-wide text-center text-green-100 uppercase bg-green-400 bg-opacity-25 rounded-lg shadow-sm hover:bg-green-500 hover:text-gray-800"
          >
            <svg
              class="inline-block w-5 h-5 align-middle fill-current"
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
            class="p-2 text-xs tracking-wide text-center text-gray-100 uppercase bg-gray-500 bg-opacity-25 rounded-lg shadow-sm hover:bg-gray-500 hover:text-gray-800"
          >
            <svg
              class="inline-block w-5 h-5 align-middle"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div v-if="giveaway.description" class="my-5 text-gray-600">
        <span class="text-lg font-medium text-indigo-100">Requirements</span>
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
            This giveaway may require you to
            <span v-if="giveaway.like_required">like</span>
            <span v-if="giveaway.like_required && giveaway.rt_required">/</span>
            <span v-if="giveaway.rt_required">retweet</span> a tweet, or even
            follow a user, you can use the links below to do that, or open the
            tweet to do it manually. Be sure to check the description we found
            below, for any additional information!
          </p>
          <div class="flex flex-wrap items-center pt-3 tracking-widest">
            <a
              v-if="giveaway.like_required"
              v-bind:href="
                'https://twitter.com/intent/like?tweet_id=' + giveaway.tweet_id
              "
              target="_blank"
              class="flex items-center px-2 py-2 mb-2 mr-2 font-medium text-center text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-300 hover:text-gray-800 sm:mt-0 md:mb-0"
            >
              <svg
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
                />
              </svg>
              <span class="inline align-middle header-font">Like Tweet</span>
            </a>

            <a
              v-if="giveaway.rt_required"
              v-bind:href="
                'https://twitter.com/intent/retweet?tweet_id=' +
                  giveaway.tweet_id
              "
              target="_blank"
              class="flex items-center px-2 py-2 mb-2 mr-2 font-medium text-center text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-300 hover:text-gray-800 sm:mt-0 md:mb-0"
            >
              <svg
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
                />
              </svg>
              <span class="inline align-middle header-font">Retweet Tweet</span>
            </a>

            <a
              v-if="giveaway.follow_required"
              v-bind:href="
                'https://twitter.com/intent/follow?user_id=' + giveaway.user_id
              "
              target="_blank"
              class="flex items-center px-2 py-2 mb-2 mr-2 font-medium text-center text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-300 hover:text-gray-800 sm:mt-0 md:mb-0"
            >
              <svg
                class="w-4 h-4 mr-1"
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
              <span class="inline align-middle header-font">Follow User</span>
            </a>

            <a
              v-bind:href="giveaway.tweet_url"
              target="_blank"
              class="flex items-center px-2 py-2 mb-2 mr-2 font-medium text-center text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-300 hover:text-gray-800 sm:mt-0 md:mb-0"
            >
              <svg
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
                />
              </svg>
              <span class="header-font">Open Tweet</span>
            </a>
          </div>
        </div>
      </div>

      <div v-if="giveaway.description" class="my-5 text-gray-600">
        <span class="text-lg font-medium text-indigo-100">Description</span>
        <hr class="my-2 opacity-25" />
        <p>{{ giveaway.description }}</p>
      </div>

      <!-- 
       ██████╗ ██╗     ███████╗ █████╗ ███╗   ███╗
      ██╔════╝ ██║     ██╔════╝██╔══██╗████╗ ████║
      ██║  ███╗██║     █████╗  ███████║██╔████╔██║
      ██║   ██║██║     ██╔══╝  ██╔══██║██║╚██╔╝██║
      ╚██████╔╝███████╗███████╗██║  ██║██║ ╚═╝ ██║
       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ 
      -->
      <div
        v-if="giveaway.gleam_url"
        class="items-center mb-6"
        id="gleam-housing"
      >
        <a
          v-if="giveaway.gleam_url"
          v-bind:href="giveaway.gleam_url"
          target="_blank"
          rel="nofollow"
          class="items-center inline px-2 py-3 mb-2 font-medium text-center text-white bg-indigo-500 rounded-lg shadow-md e-widget hover:bg-indigo-300 hover:text-gray-800 sm:mt-0"
          id="cjecl"
        >
          <!-- <svg
            class="inline w-4 h-4 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg> -->
          <!-- <span class="items-center inline text-center align-middle">Open Giveaway</span> -->
        </a>
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
        <div class="relative w-full overflow-hidden" style="min-height:868px">
          <iframe
            id="playrFrame"
            class="responsive-iframe"
            style="height:100%"
            width="768px"
            height="100%"
            :src="giveaway.playr_url"
          ></iframe>
        </div>
      </div>

      <!--
      ███████╗██╗██████╗ ███████╗ ██████╗ ██╗██╗  ██╗
      ██╔════╝██║██╔══██╗██╔════╝██╔═══██╗██║██║ ██╔╝
      ███████╗██║██║  ██║█████╗  ██║   ██║██║█████╔╝ 
      ╚════██║██║██║  ██║██╔══╝  ██║▄▄ ██║██║██╔═██╗ 
      ███████║██║██████╔╝███████╗╚██████╔╝██║██║  ██╗
      ╚══════╝╚═╝╚═════╝ ╚══════╝ ╚══▀▀═╝ ╚═╝╚═╝  ╚═╝
      -->

      <div v-if="giveaway.sdqk_url" class="flex">
        <div class="relative w-full overflow-hidden" style="min-height:768px">
          <iframe
            class="responsive-iframe"
            style="height:100%"
            width="768px"
            height="100%"
            v-bind:src="giveaway.sdqk_url + '/embed'"
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
          class="w-full px-2 py-2 mx-auto mt-3 font-bold text-center text-white bg-indigo-500 rounded-lg shadow-md sm:mt-0 md:py-3 md:px-6 hover:bg-indigo-300 hover:text-gray-800"
        >
          Enter Competition
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
            />
          </svg>
        </a>
      </div>
      <div class="flex justify-end">
        <a
          id="go-back-button"
          class="self-end w-full px-5 py-2 mt-4 tracking-widest text-center text-gray-600 border border-indigo-200 border-opacity-25 rounded-md cursor-pointer bg-lighter hover:bg-primary text-md header-font"
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
        class="px-5 py-2 mt-3 font-medium text-white bg-red-500 rounded-lg shadow-md sm:mt-0 md:py-3 md:px-6 hover:bg-red-300 hover:text-gray-700"
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
      endDate: "",
      newItemTitle: "",
      completed: false,
      tweetIdFix: "",
    };
  },
  methods: {
    async getGiveawayInfo(id) {
      try {
        fetch(`https://api.comps.gg/giveaways/${id}`)
          .then((response) => response.json())
          .then((data) => {
            this.giveaway = data;
            this.metaTitle = data.name;
            this.createdDate = moment(data.created_at).format("DD/MM/YY");
            if (data.end_date)
              this.endDate = moment(data.end_date).format("DD/MM/YY HH:MM");
            let markedAsDone = localStorage.getItem("markedAsDone");
            if (markedAsDone) {
              this.completed = markedAsDone.includes(this.giveaway.id)
                ? true
                : false;
            }
            this.loading = false;
            if (this.giveaway.gleam_url) {
              const plugin = document.createElement("script");
              plugin.setAttribute("src", "https://widget.gleamjs.io/e.js");
              plugin.async = true;
              document.head.appendChild(plugin);
              gleamChecker();
            }

            if (this.giveaway.playr_url) {
              if (!this.giveaway.playr_url.includes("embed")) {
                if (this.giveaway.playr_url.slice(-1) == "/") {
                  this.giveaway.playr_url += "embed";
                } else {
                  this.giveaway.playr_url += "/embed";
                }
              }
            }

            //missing tweet ID fix
            if (!this.giveaway.tweet_id) {
              let str = this.giveaway.tweet_url.split("/");
              this.giveaway.tweet_id = str[str.length - 1];
            }

            backButtonFix();
          })
          .catch((error) => console.error(error));
      } catch (err) {
        console.log(err);
      }
    },
    markAsDone: function(gId) {
      const markedAsDone =
        JSON.parse(window.localStorage.getItem("markedAsDone")) || {};
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
      title: `${this.metaTitle} Giveaway | Comps.gg`,
      meta: [
        {
          name: "description",
          content: `${this.metaTitle} Giveaway on, Comps.gg. Find Competitions & Giveaways from all over the web.`,
        },
        {
          name: "twitter:title",
          content: `${this.metaTitle} Giveaway | Comps.gg`,
        },
        {
          name: "twitter:description",
          content: `${this.metaTitle} Giveaway on, Comps.gg. Find Competitions & Giveaways from all over the web.`,
        },
        {
          property: "og:title",
          content: `${this.metaTitle} Giveaway | Comps.gg`,
        },
        {
          property: "og:description",
          content: `${this.metaTitle} Giveaway on, Comps.gg. Find Competitions & Giveaways from all over the web.`,
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
        "mx-auto",
        "mt-3",
        "w-full",
        "text-center",
        "sm:mt-0",
        "py-2",
        "px-2",
        "md:py-3",
        "md:px-6",
        "header-font",
        "bg-indigo-500",
        "hover:bg-indigo-300",
        "font-bold",
        "text-white",
        "hover:text-gray-800",
        "rounded-lg",
        "shadow-md",
        "w-full",
        "flex",
        "text-center"
      );
      element.classList.remove("w-entry-button");
      let childSpan = element.getElementsByClassName("w-entry-button-inner")[0];
      childSpan.classList.add("mx-auto");
      childSpan.innerHTML +=
        "<svg class='inline w-5 h-5 ml-2' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'><path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path></svg>";
    });
  }, 1100);
}

function backButtonFix() {
  setTimeout(function() {
    if (window.history.length == 1) {
      document.getElementById("go-back-button").classList.add("hidden");
    }
  }, 300);
}
</script>

<style scoped>
.responsive-iframe {
  position: absolute;

  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
