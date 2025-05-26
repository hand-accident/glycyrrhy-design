<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContainerProp_ } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';
	let { class: className = '', children }: ContainerProp_ = $props();
	const c = tv({
		base: ['bg-cover', 'bg-center', 'bg-primary', 'text-primary-content', 'z-50', 'opacity-90']
	});
</script>

<div class={c({ className })}><RenderSlot {children} /></div>
