<template>
  <div class="home">
		<navbar :isLoggedIn='auth.loggedIn' @logout='handleLogout'/>
    <hero />
    <list />
    <mailChimp />
    <footerMain />
  </div>
</template>

<script>
import _consts from '../consts';
import hero from "@/components/heroHeader.vue";
import navbar from "@/components/navBar.vue";
import list from "@/components/giveawayList.vue";
import footerMain from "@/components/footerMain.vue";
import mailChimp from "@/components/mailChimp.vue"

export default {
  name: "Home",
  components: {
    hero,
    navbar,
    list,
    mailChimp,
    footerMain
  },
    data:() => ({
        auth:{
            accessToken: null,
            isLoggedIn: false
        }
    }),
	created() {

		let accessToken = localStorage.getItem(_consts.TOKEN)
		let isLoggedIn = localStorage.getItem(_consts.LOGGED_IN)

		this.auth = (accessToken && isLoggedIn === 'true') ?
			{
				loggedIn: true,
				accessToken
			} : {
				loggedIn: false,
				accessToken: null,
				user: null
            }
            
    },
    methods:{
        handleLogout(){
            localStorage.clear();
            this.auth = {}
        }
    },
metaInfo () {
  return {
    title: ' Comps.gg | Competitions & Giveaways',
    meta: [
      { name: 'description', content: 'Find & Win Competitions & Giveaways from all over the web on Comps.gg' }
    ]
  }
}
};
</script>