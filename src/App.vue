<template>
	<div id="app" class="font-sans">
		<router-view />
	</div>
</template>
<script>
export default {
	created() {
		this.$store.dispatch('auth/initializeAuth')
	}
}
</script>