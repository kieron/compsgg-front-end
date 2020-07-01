<template>
  <section class="bg-gray-100 md:bg-middle flex ">
    <div
      class="flex mx-auto flex-col max-w-4xl md:h-56 bg-gray-100 md:bg-white lg:rounded-lg md:shadow-lg overflow-hidden md:flex-row my-10"
    >
      <div class="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
        <div class="py-6 px-8 md:py-0">
          <h2 class="text-gray-700 text-2xl font-medium md:text-gray-100 tracking-widest">
            Sign up for email notifications!
          </h2>
          <p class="mt-2 text-gray-600 md:text-gray-400">
            Never miss a chance to win, I will send you updates on new
            competitions. (No Spam, I promise)
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 md:bg-gray-100 border-gray-700"
      >
        <mailchimp-subscribe
          url="https://comps.us10.list-manage.com/subscribe/post-json" 
          user-id="215c2ca327be2681682def912"
          list-id="a90b86d2e3"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <div><form @submit.prevent="subscribe">
              <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                <input
                  placeholder="Enter your email"
                  class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-700 focus:bg-gray-100"
                  type="email"
                  @input="setEmail($event.target.value)"
                />
                <button
                  class="py-3 px-4 bg-gray-700 tracking-widest text-gray-100 font-semibold uppercase md:rounded-r-md hover:bg-gray-600"
                  id="mailSubmit"
                  type="submit"
                  >
                  
                  Submit
                </button>
                
              </div>

            </form>
            <div class="flex py-5 pl-2 header-font tracking-widest text-md">
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
import MailchimpSubscribe from "vue-mailchimp-subscribe";

export default {
  components: {
    MailchimpSubscribe,
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