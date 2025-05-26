<script lang="ts">
	import type { BasicProp } from '$a/Types.svelte';
	import Container from '$c/Container.svelte';
	let { children }: BasicProp = $props();
</script>

<Container class="relative mx-auto p-8" {children} />
