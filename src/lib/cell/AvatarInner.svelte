<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="c {className}">
	<slot />
</div>

<style lang="postcss">
	.c {
		@apply block aspect-square overflow-hidden w-16 rounded;
	}
</style>
