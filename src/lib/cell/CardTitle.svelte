<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="c {className}">
	<slot />
</div>

<style lang="postcss">
	.c {
		@apply flex items-center gap-2 text-xl font-semibold text-3xl;
	}
</style>
