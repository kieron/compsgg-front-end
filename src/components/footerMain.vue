<template
  ><footer class="py-10 text-indigo-100 bg-darker gradient">
    <div class="container px-8 mx-auto">
      <div class="flex flex-col w-full py-6 md:flex-row">
        <div class="flex-1 mb-6">
          <img
            class="inline w-10 h-10 align-middle ine"
            src="/img/logo-small.png"
            alt="Comps.gg Logo"
          />
          <router-link
            :to="'/'"
            class="inline text-2xl font-bold tracking-widest no-underline align-middle header-font hover:no-underline lg:text-4xl"
          >
            comps.gg
          </router-link>
          <p class="text-sm italic text-indigo-200 opacity-50">
            Catchy phrase here
          </p>
        </div>

        <div class="flex-1">
          <p class="text-sm font-semibold tracking-wide uppercase md:mb-6">
            Links
          </p>
          <ul class="mb-6 list-reset">
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <router-link
                :to="'/about/'"
                class="no-underline hover:underline hover:text-orange-500"
                >About</router-link
              >
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <router-link
                :to="'/tos/'"
                class="no-underline hover:underline hover:text-orange-500"
                >TOS</router-link
              >
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <router-link
                :to="'/pp/'"
                class="no-underline hover:underline hover:text-orange-500"
                >Privacy Policy</router-link
              >
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <router-link
                :to="'/contact/'"
                class="no-underline hover:underline hover:text-orange-500"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="text-sm font-semibold tracking-wide uppercase md:mb-6">
            Social
          </p>
          <ul class="mb-6 list-reset">
            <!-- <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >Facebook</a
              >
            </li> -->
            <!-- <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >Linkedin</a
              >
            </li> -->
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/wearecomps"
                target="_blank"
                class="no-underline hover:underline hover:text-orange-500"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <!--<div class="flex-1">
          <p class="text-sm font-semibold tracking-wide uppercase md:mb-6">Legal</p>
          <ul class="mb-6 list-reset">
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >Terms</a
              >
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >Privacy</a
              >
            </li>
          </ul>
        </div>
        
        <div class="flex-1">
          <p class="text-sm font-semibold tracking-wide uppercase md:mb-6">Company</p>
          <ul class="mb-6 list-reset">
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >Official Blog</a
              >
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >About Us</a
              >
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline hover:text-orange-500"
                >Contact</a
              >
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </footer>
</template>
