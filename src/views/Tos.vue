<template>
  <div class="text-indigo-100 about">
    <navbar />
    <section class="px-4 py-5 bg-middle md:bg-primary md:px-8">
      <div
        class="container mx-auto border-solid rounded-lg md:p-8 bg-middle md:shadow-lg"
      >
        <h1 class="text-3xl text-indigo-100">TOS</h1>
        <p class="mb-3">
          Coming Soon
        </p>
      </div>
    </section>
    <mailChimp />
    <footerMain />
  </div>
</template>

<script>
import navbar from "@/components/navBar.vue";
import footerMain from "@/components/footerMain.vue";
import mailChimp from "@/components/mailChimp.vue";

export default {
  components: {
    navbar,
    mailChimp,
    footerMain,
  },
  metaInfo() {
    return {
      title: "TOS | Comps.gg",
      meta: [
        {
          name: "description",
          content:
            this.metaTitle +
            "About Comps.gg. Find Competitions & Giveaways from all over the web.",
        },
      ],
    };
  },
};
</script>
