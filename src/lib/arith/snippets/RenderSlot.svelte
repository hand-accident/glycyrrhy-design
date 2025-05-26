<script lang="ts">
	import type { Snippet } from 'svelte';

	let { snippet, children }: Partial<Record<'snippet' | 'children', Snippet>> = $props();
</script>

{#if children}
	{#if snippet}
		{@render snippet()}
	{:else}
		{@render children()}
	{/if}
{:else if snippet}
	{@render snippet()}
{/if}
