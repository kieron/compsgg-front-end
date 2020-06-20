<template>
  <div class="giveaway">
    <navbar />
    <section class="bg-primary py-10">
      <div class="px-5 py-1 md:py-8 mx-auto bg-middle container md:shadow-lg rounded-lg overflow-hidden md:flex border-solid">
        <info />
      </div>
    </section>
    <mailChimp />
    <footerMain />
  </div>
</template>

<script>
import info from "@/components/singleGiveaway";
import navbar from "@/components/navBar.vue";
import footerMain from "@/components/footerMain.vue";
import mailChimp from "@/components/mailChimp.vue";

export default {
  components: {
    navbar,
    info,
    mailChimp,
    footerMain,
  }
};
</script>