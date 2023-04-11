<script lang="ts">
	let className = '';
	export { className as class };
</script>

<h1 class="c {className}">
	<slot />
</h1>

<style lang="postcss">
	.c {
		@apply text-5xl font-bold;
	}
</style>
