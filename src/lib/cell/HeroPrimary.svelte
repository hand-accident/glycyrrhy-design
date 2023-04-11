<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="c {className}">
	<slot />
</div>

<style lang="postcss">
	.c {
		@apply bg-cover bg-center bg-primary text-primary-content z-50 opacity-90;
	}
</style>
