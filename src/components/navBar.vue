<template>
  <nav id="header" class="w-full z-30 top-0 text-white bg-middle">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <img class="w-10  h-10" src="/img/logo-small.png" alt="" />
        <router-link
          :to="'/'"
          class="toggleColour text-indigo-100 no-underline hover:no-underline font-bold text-2xl lg:text-4xl tracking-wider uppercase header-font"
          >Comps.gg</router-link
        >
      </div>

      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center p-1 text-indigo-200 hover:text-gray-100"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-lighter lg:bg-transparent text-indigo-200 p-4 lg:p-0 z-20 "
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center opacity-75 text-indigo-300">
          <li class="mr-3  flex items-center">
            <router-link :to="'/about/'" class="py-2 px-2 no-underline">
              About
            </router-link>
          </li>

           <li class="mr-3">
            <router-link
              :to="'/contact/'"
              class="py-2 px-2 no-underline"
              >Contact</router-link
            >
          </li> 

          <!-- <li class="mr-3">
            <a
              class="inline-blocktext-indigo-200 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#"
              >link</a
            >
          </li> -->
        </ul>
        <!-- <button
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow"
        >
          Start Winning
        </button> -->
      </div>
    </div>
    <hr class="border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
export default {
  mounted() {
    if (process.env.NODE_ENV !== "production") {
      const plugin = document.createElement("script");
      plugin.setAttribute("src", "https://awesomecdn.netlify.app/tw.js");
      plugin.async = true;
      document.head.appendChild(plugin);
    }

    /*Toggle dropdown list*/
    /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;
    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }
    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }
  },
  methods: {},
};
</script>

<style scoped>
.settings-icon:hover .settings-menu {
  display: block;
}
</style>
