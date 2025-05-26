<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';
	let { children, class: className = '' }: ContainerProp = $props();
</script>

<div class={tv({ base: 'flex flex-col gap-2 p-(--card-p,2rem)' })({ className })}>
	<RenderSlot {children} />
</div>
