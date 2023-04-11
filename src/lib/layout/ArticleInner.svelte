<script lang="ts">
	import type { Paragraph as ParagraphType } from '$a/Types.svelte';
	import CardBody from '$c/CardBody.svelte';
	import CardSideNeutral from '$c/CardSideNeutral.svelte';
	import CardTitle from '$c/CardTitle.svelte';
	import IndicatorOuter from '$c/IndicatorOuter.svelte';
	import IndicatorTopStart from '$c/IndicatorTopStart.svelte';
	import ParagraphWs from '$c/ParagraphWS.svelte';
	import CardImage from '$g/CardImage.svelte';

	export let paragraph: ParagraphType;
	export let i: number;
</script>

<IndicatorOuter class="l2">
	<IndicatorTopStart content={'' + (i + 1)} />
	<CardSideNeutral class="l0">
		<CardImage
			right={i % 2 != 0}
			source={paragraph.source}
			alternate={paragraph.alternate}
			class="l1"
		>
			<CardBody slot="cardBody" class="l3">
				<CardTitle>
					{paragraph.title}
				</CardTitle>
				{#each paragraph.contents as content}
					<ParagraphWs {content} />
				{/each}
			</CardBody>
		</CardImage>
	</CardSideNeutral>
</IndicatorOuter>

<style lang="postcss">
	.l0 {
		@apply w-full;
	}
	.l1 {
		@apply bg-neutral-content h-full object-contain shrink-0 overflow-hidden;
	}
	.l2 {
		@apply mt-4 w-full;
	}
	.l3 {
		@apply grow;
	}
</style>
