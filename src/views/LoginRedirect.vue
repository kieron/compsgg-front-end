<template>
	<div></div>
</template>
<script>
import api from '../api/api'
import _consts from '../consts'
export default {
	name: 'LoginRedirect',
	created() {
		this.authenticateUser()
	},
	methods: {
		async authenticateUser() {

			// Authenticating login
			let { error, message, data } = await api.authenticate({
				provider: this.$route.params.provider,
				search: location.search
			})

			// Returning if error
			if (error) { return console.log('Error', message); }

			/**
             * @TODO Store the data locally
             * Have to use vuex or similiar something
             */

			// Saving token to localstorage
			localStorage.setItem(_consts.TOKEN, data.jwt)
			localStorage.setItem(_consts.LOGGED_IN, true)

			this.$router.replace({ name: 'Home' })
		}
	},
}

</script>