<script lang="ts">
	import Container from '$c/Container.svelte';
</script>

<Container class="l">
	<slot />
</Container>

<style lang="postcss">
	.l {
		@apply mx-auto p-8 relative;
	}
</style>
