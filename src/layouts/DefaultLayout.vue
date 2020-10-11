<template>
	<div class="default-layout">
		<NavBar></NavBar>
		<router-view></router-view>
		<MailChimp />
		<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/navBar'
import Footer from '@/components/footerMain'
import MailChimp from '@/components/mailChimp'
export default {
	name: 'DefaultLayout',
	components: {
		NavBar, Footer, MailChimp
	}
}
</script>