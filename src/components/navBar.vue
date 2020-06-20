<template>
  <nav id="header" class="w-full z-30 top-0 text-white bg-darker">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <img class="w-10  h-10"  src="/img/logo-small.png" alt="">
        <router-link :to="'/'" class="toggleColour text-indigo-100 no-underline hover:no-underline font-bold text-2xl lg:text-4xl tracking-wide uppercase header-font">Comps.gg</router-link>
 
      </div>

      <div class="block lg:hidden pr-4">
        <!-- <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> -->
      </div>

      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <!-- <li class="mr-3">
						<a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
					</li>
					<li class="mr-3">
						<a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
					</li>
					<li class="mr-3">
						<a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
          </li> -->
        </ul>
        <!-- <button id="navAction" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow">
          Start
          Winning
        </button> -->
      </div>
    </div>
    <hr class="border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>