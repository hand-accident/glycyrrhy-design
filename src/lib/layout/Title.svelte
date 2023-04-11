<script lang="ts">
	import TextBigBold from '$c/TextBigBold.svelte';
</script>

<TextBigBold class="l">
	<slot />
</TextBigBold>

<style lang="postcss">
	.l {
		@apply col-span-4;
	}
</style>
