<template>
  <div class="w-full">
    <span class="ml-2 flex flex-row  font-medium text-indigo-200 opacity-25"
      >Page {{ this.pageNumber + 1 }}</span
    >
    <ul class="flex justify-center  mt-10 mx-auto">
      <li class="flex-grow mr-1">
        <button
          :disabled="pageNumber === 0"
          @click="prevPage"
          class="w-full px-5 py-2 btn text-center bg-lighter  tracking-widest border border-indigo-200 text-gray-600 text-md border-opacity-25 rounded-lg"
        >
          Previous
        </button>
      </li>
      <li class="flex-grow ml-1">
        <button
          :disabled="pageNumber >= pageCount - 1"
          @click="nextPage"
          class="w-full px-5 py-2 btn text-center bg-lighter  tracking-widest border border-indigo-200 text-gray-600 text-md border-opacity-25 rounded-lg"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      pageNumber: 0,
      perpage: 2,
    };
  },
  created() {
    this.$emit("loadedData", this.paginatedData());
  },
  methods: {
    nextPage() {
      this.pageNumber++;
      this.$emit("loadedData", this.paginatedData());
      document.body.scrollTop = document.documentElement.scrollTop = 300;
    },
    prevPage() {
      this.pageNumber--;
      this.$emit("loadedData", this.paginatedData());
      document.body.scrollTop = document.documentElement.scrollTop = 300;
    },
    paginatedData() {
      const start = this.pageNumber * this.perpage,
        end = start + this.perpage;
      return this.data.slice(start, end);
    },
  },
  computed: {
    pageCount() {
      let l = this.data.length,
        s = this.perpage;
      return Math.ceil(l / s);
    },
  },
};
</script>
