<script lang="ts">
	import type { Content } from '$a/Types.svelte';
	import ParagraphWs from '$c/ParagraphWS.svelte';
	let { content }: Content = $props();
</script>

<ParagraphWs {content} class="col-span-4" />
