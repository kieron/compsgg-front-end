<template>
	<div class="giveaway">
		<section class="bg-middle md:bg-primary py-5 px-4 md:px-8">
			<div
				class="md:p-8 mx-auto bg-middle container md:shadow-lg rounded-lg overflow-hidden md:flex border-solid"
			>
				<info />
			</div>
		</section>
	</div>
</template>

<script>
import info from "@/components/singleGiveaway";
export default {
	components: {
		info
	}
};
</script>