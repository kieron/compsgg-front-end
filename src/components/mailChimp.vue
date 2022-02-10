<template>
  <section class="flex bg-gray-100 md:bg-middle">
    <div
      class="flex flex-col max-w-4xl mx-auto my-10 overflow-hidden bg-gray-100  md:h-56 md:bg-white lg:rounded-lg md:shadow-lg md:flex-row"
    >
      <div class="items-center justify-center md:flex md:w-1/2 md:bg-gray-700">
        <div class="px-8 py-6 md:py-0">
          <h2
            class="text-2xl font-medium tracking-widest text-gray-700  md:text-gray-100"
          >
            Never miss a chance to win!
          </h2>
          <p class="mt-2 text-gray-600 md:text-gray-400">
            Sign up for email notifications, I will send you updates on new
            competitions. (No Spam, I promise)
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center pb-6 border-gray-700  md:py-0 md:w-1/2 md:border-b-8 md:bg-gray-100"
      >
        <mailchimp-subscribe
          url="https://comps.us10.list-manage.com/subscribe/post-json"
          user-id="215c2ca327be2681682def912"
          list-id="a90b86d2e3"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <div>
              <form @submit.prevent="subscribe">
                <div
                  class="flex flex-col overflow-hidden rounded-lg sm:flex-row"
                >
                  <input
                    placeholder="Enter your email"
                    class="px-4 py-3 text-gray-800 placeholder-gray-700 bg-gray-200 border-2 border-gray-300 outline-none  focus:bg-gray-100"
                    type="email"
                    @input="setEmail($event.target.value)"
                  />
                  <button
                    class="px-4 py-3 font-semibold tracking-widest text-gray-100 uppercase bg-gray-700  md:rounded-r-md hover:bg-gray-600"
                    id="mailSubmit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div class="flex py-5 pl-2 tracking-widest header-font text-md">
                <div v-if="error">{{ error }}</div>
                <div v-if="success">You will receive a confirmation email!</div>
                <div v-if="loading">Processing...</div>
              </div>
            </div>
          </template>
        </mailchimp-subscribe>
      </div>
    </div>
  </section>
</template>

<script>
// import MailchimpSubscribe from "vue-mailchimp-subscribe";

export default {
  components: {
    // MailchimpSubscribe,
  },
  methods: {
    onError() {
      // handle error
    },
    onSuccess() {
      //
    },
  },
};
</script>