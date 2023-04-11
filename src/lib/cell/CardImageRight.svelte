<script lang="ts">
	let className = '';
	export { className as class };
	export let source = '';
	export let alternate = '';
</script>

<figure class="c d">
	<img class="c e {className}" src={source} alt={alternate} />
</figure>
<slot />

<style lang="postcss">
	.d {
		@apply flex items-center justify-center min-w-[128px];
	}
	.c {
		border-start-start-radius: unset;
		border-start-end-radius: inherit;
		border-end-start-radius: unset;
		border-end-end-radius: inherit;
	}
	.e {
		max-width: unset;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
