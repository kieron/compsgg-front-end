<template>
	<div class="not-found">
		<div>
			<h1>404 | Page Not found</h1>
			<router-link to="/">Return to home</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
}
</script>
<style scoped>
	.not-found {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
	}
	.not-found h1 {
		font-size: 2em;
		margin-bottom: 1rem;
	}
	.not-found a {
		color: #414e64;
		text-decoration: underline;
	}
</style>