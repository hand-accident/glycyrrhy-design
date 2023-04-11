<script lang="ts">
	let className = '';
	export { className as class };
	export let content = '';
</script>

<p class="c {className}">
	{#each content.split(' ') as block}
		{block}<wbr />
	{/each}
	<slot />
</p>

<style lang="postcss">
	.c {
		@apply break-keep break-words;
	}
</style>
