<template>
	<svg
		v-if="path"
		class="w-6 h-6 mr-3 fill-current"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path :d="path" />
	</svg>
	<p v-else>Icon Not Found</p>
</template>

<script>
import icons from '@/icons'
export default {
	name: 'SvgIcon',
	props: {
		type: {
			type: String,
			required: true
		}
	},
	computed: {
		path() {
			return icons[this.type]
		}
	}
}
</script>