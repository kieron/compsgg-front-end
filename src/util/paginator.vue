<template>
  <div>
    <ul class="flex mt-10 mx-auto">
      <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg">
        <button class="btn" :disabled="pageNumber === 0" @click="prevPage">Previous</button>
      </li>
      <li
        class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-gray-100 rounded-lg"
      >
        <button :disabled="pageNumber >= pageCount -1" @click="nextPage" class="btn">Next</button>
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
      perpage: 2
    };
  },
  created() {
    this.$emit("loadedData", this.paginatedData());
  },
  methods: {
    nextPage() {
      this.pageNumber++;
      this.$emit("loadedData", this.paginatedData());
    },
    prevPage() {
      this.pageNumber--;
      this.$emit("loadedData", this.paginatedData());
    },
    paginatedData() {
      const start = this.pageNumber * this.perpage,
        end = start + this.perpage;
      return this.data.slice(start, end);
    }
  },
  computed: {
    pageCount() {
      let l = this.data.length,
        s = this.perpage;
      return Math.ceil(l / s);
    }
  }
};
</script>