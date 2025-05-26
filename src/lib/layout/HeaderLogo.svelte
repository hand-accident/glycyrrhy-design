<script lang="ts">
	import type { ImageDesc } from '$a/Types.svelte';
	import Avatar from '$c/Avatar.svelte';
	import AvatarInner from '$c/AvatarInner.svelte';

	const { source: src, alternate: alt }: ImageDesc = $props();
</script>

<Avatar class="row-span-2">
	<AvatarInner>
		<img {src} {alt} />
	</AvatarInner>
</Avatar>
