<template>
  <div class="w-full">
    <span class="ml-2 flex flex-row  font-medium text-indigo-200 opacity-25"
      >Page {{ this.pageNumber }}</span
    >
    <ul class="flex justify-center  mt-10 mx-auto">
      <li class="flex-grow mr-1">
        <button
          :disabled="pageNumber === 0"
          @click="prevPage"
          class="w-full px-5 py-2 btn text-center bg-lighter hover:bg-primary tracking-widest border border-indigo-200 text-gray-600 text-md border-opacity-25 rounded-lg"
        >
          Previous
        </button>
      </li>
      <li class="flex-grow ml-1">
        <button
          :disabled="pageNumber >= pageCount - 1"
          @click="nextPage"
          class="w-full px-5 py-2 btn text-center bg-lighter hover:bg-primary tracking-widest border border-indigo-200 text-gray-600 text-md border-opacity-25 rounded-lg"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { setQuery, deleteQuery } from '../helpers'
export default {
  props: ["data"],
  data() {
    return {
      pageNumber: 1,
      perpage: 10,
    };
  },
  watch:{
      data:{
          handler(){
			let { page } = this.$route.query
			if(page) this.pageNumber = +page
			this.$emit("loadedData", this.paginatedData());
          },
          immediate: true
		},
		'$route.query':{
			handler(v){
				if(v.page && +v.page !== this.pageNumber) this.pageNumber = +v.page
				else if(!v.page) this.pageNumber = 1
				this.changePage({ skipQuery: true })
			},
			deep: true
		}
  },
  methods: {
	changePage(opt = {}){
		if(this.pageNumber === 1) deleteQuery()
		else if(!opt.skipQuery) setQuery({ page: this.pageNumber })
		this.$emit("loadedData", this.paginatedData());
		document.querySelector('.giveway-container')
			.scrollIntoView({behavior: 'smooth'})
	},
    nextPage() {
      this.pageNumber++;
      this.changePage()
    },
    prevPage() {
		if(this.pageNumber > 1){
			this.pageNumber--;
			this.changePage()
		}
    },
    paginatedData() {
      const start = (this.pageNumber - 1) * this.perpage,
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
