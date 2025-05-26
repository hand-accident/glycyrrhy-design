<script lang="ts">
	import type { IndexedParagraph } from '$a/Types.svelte';
	import CardBody from '$c/CardBody.svelte';
	import CardSideNeutral from '$c/CardSideNeutral.svelte';
	import CardImage from '$g/CardImage.svelte';
	import CardTitle from '$c/CardTitle.svelte';
	import IndicatorOuter from '$c/IndicatorOuter.svelte';
	import IndicatorTopStart from '$c/IndicatorTopStart.svelte';
	import ParagraphWs from '$c/ParagraphWS.svelte';

	let { paragraph, i }: IndexedParagraph = $props();
</script>

<IndicatorOuter class="mt-4 w-full">
	<IndicatorTopStart content={'' + (i + 1)} />
	<CardSideNeutral class="w-full">
		<CardImage
			right={i % 2 != 0}
			source={paragraph.source}
			alternate={paragraph.alternate}
			class="bg-neutral-content h-full shrink-0 overflow-hidden object-contain"
		>
			<CardBody class="grow">
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
