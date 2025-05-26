<script lang="ts">
	import type { BasicProp } from '$a/Types.svelte';
	import TextBigBold from '$c/TextBigBold.svelte';
	let { children }: BasicProp = $props();
</script>

<TextBigBold class="col-span-4" {children} />
