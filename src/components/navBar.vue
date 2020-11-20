<template>
  <nav id="header" class="top-0 z-30 w-full text-white bg-middle">
    <div
      class="container flex flex-wrap items-center justify-between w-full pt-2 pb-2 mx-auto mt-0"
      id="navParent"
    >
      <div class="flex items-center pl-4">
        <img class="w-10 h-10" src="/img/logo-small.png" alt="" />
        <router-link
          :to="'/'"
          class="text-2xl font-bold tracking-wider text-indigo-100 no-underline uppercase toggleColour hover:no-underline lg:text-4xl header-font"
          >Comps.gg</router-link
        >
      </div>

      <div class="block pr-4 lg:hidden">
        <button
          id="nav-toggle"
          class="flex items-center p-1 text-indigo-200 hover:text-gray-100"
          v-on:click="animate"
          @click="navToggle = !navToggle"
        >
          <svg
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="z-20 flex-grow hidden w-full p-4 mt-2 text-indigo-200 swing-in-top-fwd lg:flex lg:items-center lg:w-auto lg:mt-0 bg-lighter lg:bg-transparent lg:p-0"
        id="nav-content"
      >
        <ul
          class="items-center justify-end flex-1 text-indigo-300 opacity-75 list-reset lg:flex"
        >
          <li class="flex items-center mr-3">
            <router-link to="/about" class="px-2 pb-2 no-underline lg:py-2">
              About
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/contact" class="px-2 pb-2 no-underline lg:py-2"
              >Contact</router-link
            >
          </li>

          <!-- <li class="mr-3" v-if="loggedIn">
            <span
              class="px-2 py-2"
              style="cursor: pointer"
              @click="handleLogout"
              >Logout</span
            >
          </li> -->
          <!-- <li class="mr-3" v-else>
            <router-link to="/login" class="px-2 py-2 no-underline"
              >Login</router-link
            >
          </li> -->
          <!-- <li class="mr-3">
            <a
              class="px-4 py-2 no-underline inline-blocktext-indigo-200 hover:text-gray-800 hover:text-underline"
              href="#"
              >link</a
            >
          </li> -->
        </ul>
        <!-- <button
          id="navAction"
          class="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow lg:mx-0 hover:underline lg:mt-0"
        >
          Start Winning
        </button> -->
      </div>
    </div>
    <hr v-if="notHomepage" class="py-0 my-0 border-gray-100 opacity-25" />
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      navToggle: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    notHomepage() {
      if (this.$route.path == "/") {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapMutations("auth", ["setAuthState", "resetAuthState"]),
    handleLogout() {
      this.setAuthState({ loggedOut: true });
      this.resetAuthState({ exclude: ["socials", "loggedOut"] });
      this.$router.push("/login");
    },
    animate: function() {
      if (document.getElementById("nav-content").classList.contains("hidden")) {
        document.getElementById("nav-toggle").classList.add("rotate-center");
        setTimeout(function() {
          document
            .getElementById("nav-toggle")
            .classList.remove("rotate-center");
        }, 500);
      }
    },
  },
  mounted() {
    //breakpoint sizing
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
    var navParent = document.getElementById("navParent");

    document.onclick = check;
    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);
      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            this.navToggle = true;
            navMenuDiv.classList.remove("hidden");
            navParent.classList.remove("pb-2");
          } else {
            navMenuDiv.classList.add("hidden");
            navParent.classList.add("pb-2");
            this.navToggle = false;
          }
        } else {
          // click both outside link and outside menu, hide menu
          this.navToggle = false;
          navMenuDiv.classList.add("hidden");
          navParent.classList.add("pb-2");
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
};
</script>

<style scoped>
.settings-icon:hover .settings-menu {
  display: block;
}
button:disabled {
  cursor: default;
}

.rotate-center {
  -webkit-animation: rotate-center 0.6s ease-in-out both;
  animation: rotate-center 0.6s ease-in-out both;
}

/* ----------------------------------------------
 * Generated by Animista on 2020-11-20 19:43:7
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation rotate-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
