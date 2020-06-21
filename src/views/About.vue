<template>
  <div class="about text-indigo-100">
    <navbar />
    <section class="bg-middle md:bg-primary py-5 px-4 md:px-8">
      <div
        class="md:p-8 mx-auto bg-middle container md:shadow-lg rounded-lg border-solid"
      >
        <h1 class="text-indigo-100 text-3xl">About Comps.gg</h1>
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          hendrerit maximus eros in volutpat. Fusce luctus arcu dui, sit amet
          facilisis mauris auctor eu. Pellentesque quis tellus et augue aliquet
          eleifend. In dapibus convallis justo, non iaculis ex ullamcorper sit
          amet. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Maecenas malesuada leo convallis arcu
          lobortis, eu dignissim leo posuere. Donec in nunc eu massa porttitor
          scelerisque. Sed maximus nibh eu aliquam placerat.
        </p>
        <p class="mb-3">
          Pellentesque magna purus, commodo sed placerat in, condimentum eu
          orci. Vivamus pretium nibh at leo viverra, sit amet rhoncus ipsum
          pharetra. Ut ut tempor metus. Morbi blandit, lacus tristique feugiat
          semper, nisl magna dictum est, et interdum neque risus nec tortor. Ut
          eget elit egestas, laoreet orci quis, tincidunt dui. In hac habitasse
          platea dictumst. Mauris sit amet volutpat massa, vitae luctus lorem.
          Nullam tortor mauris, pharetra eget tincidunt non, hendrerit et mi.
          Quisque volutpat quam quis semper finibus.
        </p>
        <p class="mb-3">
          Duis sodales et quam ac imperdiet. Aliquam posuere justo sed sem
          laoreet, vel venenatis metus blandit. Fusce ut mi eget turpis posuere
          elementum. Vestibulum at dapibus tellus. Etiam pharetra, ligula at
          tincidunt porttitor, lectus sapien pellentesque nisl, in mattis diam
          felis non lacus. Curabitur sed fermentum enim. Sed urna leo, facilisis
          vitae magna vitae, ornare iaculis lorem. Nulla malesuada id quam sit
          amet aliquam.
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
