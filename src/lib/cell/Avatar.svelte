<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';
	let { class: className = '', children }: ContainerProp = $props();
</script>

<div class={tv({ base: 'avatar' })({ className })}><RenderSlot {children} /></div>
