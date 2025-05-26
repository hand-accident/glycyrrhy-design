<script lang="ts">
	import RenderSlot from '$a/snippets/RenderSlot.svelte';
	import type { ContentProp_ } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';

	let { class: className = '', content = '' }: ContentProp_ = $props();
	let c = tv({
		base: [
			'z-[1] absolute transform whitespace-nowrap right-auto left-0 top-0 bottom-auto -translate-x-1/2 -translate-y-1/2',
			'hidden items-center justify-center transition duration-200 ease-in-out',
			'h-5 text-sm leading-5',
			'w-fit pl-[0.563rem] pr-[0.563rem]',
			'border rounded-selector border-secondary bg-secondary text-secondary-content',
			'md:inline-flex'
		]
	});
</script>

<span class={c({ className })}><RenderSlot>{content}</RenderSlot></span>
