<script lang="ts">
	import Avatar from '$c/Avatar.svelte';
	import AvatarInner from '$c/AvatarInner.svelte';
	export let source: string, alternate: string;
	const src = source,
		alt = alternate;
</script>

<Avatar class="l">
	<AvatarInner>
		<img {src} {alt} />
	</AvatarInner>
</Avatar>
<slot />

<style lang="postcss">
	.l {
		@apply row-span-2;
	}
</style>
