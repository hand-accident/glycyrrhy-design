<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';
	let { class: className = '', children }: ContainerProp = $props();
	let c = tv({ base: 'text-5xl font-bold' });
</script>

<h1 class={c({ className })}><RenderSlot {children} /></h1>
