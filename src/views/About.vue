<template>
  <div class="about text-indigo-100">
    <section class="bg-middle md:bg-primary py-5 px-4 md:px-8">
      <div
        class="md:p-8 mx-auto bg-middle container md:shadow-lg rounded-lg border-solid"
      >
        <h1 class="text-indigo-100 text-3xl">About Comps.gg</h1>
        <p class="mb-3">
          I love to enter competitions in the tech community specifically, and I noticed there is a lot of really cool web applications for doing it, like Gleam, Playr, and Sideqik, so I wanted to bring all of the competitions I enter to one place, and make them super easy to take part in.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "About | Comps.gg",
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
