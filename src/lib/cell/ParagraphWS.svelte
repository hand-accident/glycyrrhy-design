<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContentContainer_ } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';

	let { content = '', class: className = '', children }: ContentContainer_ = $props();
	let c = tv({ base: 'break-keep wrap-break-word' });
</script>

<p class={c({ className })}>
	{#each content.split(' ') as block}
		{block}<wbr />
	{/each}
	<RenderSlot {children} />
</p>
