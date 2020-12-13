<template>
  <div class="text-indigo-100 about">
    <section class="px-4 py-5 bg-middle md:bg-primary md:px-8">
      <div
        class="container mx-auto border-solid rounded-lg md:p-8 bg-middle md:shadow-lg"
      >
        <h1 class="text-3xl text-indigo-100">Privacy Policy</h1>
        <p class="mb-3">
          Here at Comps.gg we use Ezoic to provide personalization and analytic
          services on this website, as such Ezoic's privacy policy is in effect
          and can be reviewed
          <a target="_blank" href="https://g.ezoic.net/privacy/comps.gg">here</a
          >.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Privacy Policy | Comps.gg",
      meta: [
        {
          name: "description",
          content:
            this.metaTitle +
            "Comps.gg Privacy Policy. Find Competitions & Giveaways from all over the web.",
        },
      ],
    };
  },
};
</script>
