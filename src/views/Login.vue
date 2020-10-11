<template>
	<div class="text-indigo-100 about">
		<section class="px-4 py-5 bg-middle md:bg-primary md:px-8">
			<div
				class="container mx-auto border-solid rounded-lg md:p-8 bg-middle md:shadow-lg"
			>
				<h1 class="text-3xl text-indigo-100">Login</h1>
				<p>Login to Comps.gg to retrieve your competition entry history!</p>
				<div class="providers flex flex-col pt-5">
					<button
						v-for="provider of providers"
						:key="provider"
						:class="`${provider}-bg`"
						@click="handleLogin(provider)"
						class="flex w-full px-4 py-3 text-sm font-bold text-gray-100 rounded shadow cursor-pointer md:w-64 hover:text-white"
					>
						<SvgIcon :type="provider" />
						<span class="block w-1 h-6 border-l border-white-800"></span>
						<span class="pl-3"
							>Log in with {{ capitalize(provider) }}</span
						>
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data: () => ({
		apiUrl: process.env.VUE_APP_API_BASE_URL + 'connect/',
		providers: [
			'discord',
			'twitter',
            'twitch'
		]
	}),
	methods: {
		...mapActions('auth', ['login']),
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		},
		async handleLogin(provider) {
			let { success } = await this.login(provider)
			if (success) return this.$router.replace({ name: 'Home' })
			location.replace(this.apiUrl + provider)
		}
	},
	metaInfo() {
		return {
			title: "Login | Comps.gg",
			meta: [
				{
					name: "description",
					content:
						this.metaTitle +
						"Login to Comps.gg. Find Competitions & Giveaways from all over the web.",
				},
			],
		};
	},
};
</script>

<style scoped>
	.providers button:not(:last-child) {
		margin-bottom: 0.5rem;
	}
	.discord-bg {
		background-color: #7289da;
	}
	.twitch-bg {
		background-color: #9146ff;
	}
	.twitter-bg {
		background-color: #1da1f2;
	}
</style>
