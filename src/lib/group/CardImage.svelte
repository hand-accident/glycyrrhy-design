<script lang="ts">
	import CardImageLeft from '$c/CardImageLeft.svelte';
	import CardImageRight from '$c/CardImageRight.svelte';
	let className = '';
	export { className as class };
	export let right = true;
	export let source: string;
	export let alternate: string;
</script>

{#if !right}
	<CardImageLeft class={className} {source} {alternate} />
{/if}
<slot name="cardBody" />
{#if right}
	<CardImageRight class={className} {source} {alternate} />
{/if}
