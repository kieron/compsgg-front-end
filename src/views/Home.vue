<template>
	<div class="home">
		<hero />
		<list />
	</div>
</template>

<script>
import hero from "@/components/heroHeader.vue";
import list from "@/components/giveawayList.vue";

export default {
	name: "Home",
	components: {
		hero,
		list
	},
	metaInfo() {
		return {
			title: ' Comps.gg | Competitions & Giveaways',
			meta: [
				{ name: 'description', content: 'Find & Win Competitions & Giveaways from all over the web on Comps.gg' }
			]
		}
	}
};
</script>