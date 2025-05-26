<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';
	let { class: className = '', children }: ContainerProp = $props();
	let c = tv({ base: 'block aspect-square overflow-hidden w-16 rounded' });
</script>

<div class={c({ className })}><RenderSlot {children} /></div>
