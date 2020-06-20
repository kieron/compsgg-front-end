<template>
  <div class="home">
    <navbar />
    <hero />
    <list />
    <mailChimp />
    <footerMain />
  </div>
</template>

<script>
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
metaInfo () {
  return {
    title: 'Giveaways & Competitions | Comps.gg',
    meta: [
      { name: 'description', content: 'Find & Win giveaways and competitions from all over the web on Comps.gg' }
    ]
  }
}
};
</script>