<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp_ } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';

	let { class: className = '', children }: ContainerProp_ = $props();
</script>

<div class={tv({ base: 'container' })({ className })}><RenderSlot {children} /></div>
