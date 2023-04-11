<script lang="ts">
	import HeroContent from '$c/HeroContent.svelte';
	import HeroPrimary from '$c/HeroPrimary.svelte';
</script>

<HeroPrimary class="l">
	<HeroContent class="m">
		<slot />
	</HeroContent>
</HeroPrimary>

<style lang="postcss">
	.l {
		@apply grid w-full place-items-center overflow-hidden sticky top-0;
	}
	.m {
		@apply col-start-1 row-start-1 z-0 grid grid-rows-2 grid-cols-5 md:flex md:flex-row items-center justify-center gap-4 p-4;
	}
</style>
