<template>
	<div></div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
	name: 'LoginRedirect',
	created() {

		// Saving social authentication informations
		let data = {
			queryString: location.search,
			provider: this.$route.params.provider
		}
		this.setSocial({ ...data, authenticatedAt: Date.now() })

		// Authentication user with the authentication informations
		this.authenticate(data).then(() => {
			this.$router.replace({ name: 'Home' })
		})
	},
	methods: {
		...mapMutations('auth', ['setSocial']),
		...mapActions('auth', ['authenticate']),
	},
}

</script>