<script lang="ts">
	import type { BasicProp } from '$a/Types.svelte';
	import HeroContent from '$c/HeroContent.svelte';
	import HeroPrimary from '$c/HeroPrimary.svelte';
	let { children }: BasicProp = $props();
</script>

<HeroPrimary class={['grid', 'w-full', 'place-items-center', 'overflow-hidden', 'sticky', 'top-0']}>
	<HeroContent
		class={[
			'col-start-1',
			'row-start-1',
			'z-0',
			'grid',
			'grid-rows-2',
			'grid-cols-5',
			'md:flex',
			'md:flex-row',
			'items-center',
			'justify-center',
			'gap-4',
			'p-4'
		]}
		{children}
	/>
</HeroPrimary>
