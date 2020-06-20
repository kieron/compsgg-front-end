<template>
  <section class="bg-gray-100 md:bg-middle flex ">
    <div
      class="flex mx-auto flex-col max-w-4xl md:h-56 bg-gray-100 md:bg-white rounded-lg md:shadow-lg overflow-hidden md:flex-row my-10"
    >
      <div class="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
        <div class="py-6 px-8 md:py-0">
          <h2 class="text-gray-700 text-2xl font-bold md:text-gray-100 tracking-widest">
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
          url="https://seekly.us10.list-manage.com/subscribe/post"
          user-id="abddf2044d40ac995d9e0db23"
          list-id="603fb50940"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <form @submit.prevent="subscribe">
              <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                <input
                  placeholder="Enter your email"
                  class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                  type="email"
                  @input="setEmail($event.target.value)"
                />
                <button
                  class="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600"
                  type="submit"
                >
                  >
                </button>
                <div v-if="error">{{ error }}</div>
                <div v-if="success">Yay!</div>
                <div v-if="loading">Loading…</div>
              </div>
            </form>
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
      // handle success
    },
  },
};
</script>