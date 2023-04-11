<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="c {className}">
	<slot />
</div>

<style lang="postcss">
	.c {
		@apply relative flex flex-col rounded-box 
		bg-neutral shadow text-neutral-content;
		align-items: stretch;
		flex-direction: row;
	}
	.c:focus {
		@apply outline-none;
	}
</style>
