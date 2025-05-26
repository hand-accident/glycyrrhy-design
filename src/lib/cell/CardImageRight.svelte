<script lang="ts">
	import type { ImageProp } from '$a/Types.svelte';
	import { tv } from 'tailwind-variants';

	let { class: className = '', source: src = '', alternate: alt = '' }: ImageProp = $props();
	let c = tv({
		base: 'flex items-center justify-center min-w-[128px] rounded-ss-[unset] rounded-se-[inherit] rounded-es-[unset] rounded-ee-[inherit]',
		variants: { inner: { true: 'max-w-[unset] w-full h-full' } },
		defaultVariants: { inner: false }
	});
</script>

<figure class={c({})}>
	<img class={c({ inner: true, className })} {src} {alt} />
</figure>
