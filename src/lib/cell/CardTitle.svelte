<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp_ } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';
	let { class: className = '', children }: ContainerProp_ = $props();
</script>

<div class={tv({ base: 'flex items-center gap-2 text-3xl font-semibold' })({ className })}>
	<RenderSlot {children} />
</div>
