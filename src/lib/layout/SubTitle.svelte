<script lang="ts">
	import ParagraphWs from '$c/ParagraphWS.svelte';

	export let content: string;
</script>

<ParagraphWs {content} class="l" />
<slot />

<style lang="postcss">
	.l {
		@apply col-span-4;
	}
</style>
