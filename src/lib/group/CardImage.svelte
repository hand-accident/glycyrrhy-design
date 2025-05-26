<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { CardProp_ } from '$a/Types.svelte';
	import CardImageLeft from '$c/CardImageLeft.svelte';
	import CardImageRight from '$c/CardImageRight.svelte';

	let { right, children, ...props }: CardProp_ = $props();
</script>

{#if !right}
	<CardImageLeft {...props} />
{/if}
<RenderSlot {children} />
{#if right}
	<CardImageRight {...props} />
{/if}
