<script lang="ts">
	let c = '';
	export { c as class };
</script>

<div class="c {c}">
	<slot />
</div>

<style lang="postcss">
	.c {
		padding: var(--padding-card, 2rem);
		@apply flex flex-col gap-2;
	}
</style>
