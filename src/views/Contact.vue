<template>
  <div class="about text-indigo-100">
    <section class="bg-middle md:bg-primary py-5 px-4 md:px-8">
      <div
        class="md:p-8 mx-auto bg-middle container md:shadow-lg rounded-lg border-solid"
      >
        <h1 class="text-indigo-100 text-3xl">Contact</h1>
        <p>If you want to talk, feel free to email me here: <a href="mailto:hello@comps.gg" class="mb-3">
          hello@comps.gg
        </a></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Contact | Comps.gg",
      meta: [
        {
          name: "description",
          content:
            this.metaTitle +
            "Contact Comps.gg. Find Competitions & Giveaways from all over the web.",
        },
      ],
    };
  },
};
</script>
