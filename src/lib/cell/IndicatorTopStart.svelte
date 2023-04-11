<script lang="ts">
	let className = '';
	export { className as class };
	export let content = '';
</script>

<span class="c {className}">{content} </span>
<slot />

<style lang="postcss">
	.c {
		z-index: 1;
		@apply absolute transform whitespace-nowrap 
        right-auto left-0 top-0 bottom-auto 
        -translate-x-1/2 -translate-y-1/2;
		@apply /* inline-flex */ hidden
		items-center justify-center transition duration-200 ease-in-out;
		@apply h-5 text-sm leading-5;
		width: fit-content;
		padding-left: 0.563rem;
		padding-right: 0.563rem;
		@apply border rounded-badge border-secondary bg-secondary text-secondary-content;
	}
	@media (min-width: 768px) {
		.c {
			@apply inline-flex;
		}
	}
</style>
