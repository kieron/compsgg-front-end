<template>
  <div class="giveaway">
    <navbar />
    <section class="bg-middle md:bg-primary py-5 px-4 md:px-8">
      <div class="md:p-8 mx-auto bg-middle container md:shadow-lg rounded-lg overflow-hidden md:flex border-solid">
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