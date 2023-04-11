<script lang="ts">
	import Container from '$l/Container.svelte';
	import HeaderHero from '$l/HeaderHero.svelte';
	import HeaderLogo from '$l/HeaderLogo.svelte';
	import SubTitle from '$l/SubTitle.svelte';
	import Title from '$l/Title.svelte';
	import ArticleInner from '$l/ArticleInner.svelte';
	import { articles } from './Articles.svelte';
</script>

<HeaderHero>
	<HeaderLogo
		source="./logo.svg"
		alternate="Glycyrrhy Designのロゴ. 5つのレイヤーからなるクラス図をGとLの形に見えるように図案化している."
	/>
	<Title>Glycyrrhy Design</Title>
	<SubTitle content="個人開発者のための フロントエンド 設計パターン" />
</HeaderHero>

<Container>
	{#each articles as paragraph, i}
		<ArticleInner {paragraph} {i} />
	{/each}
</Container>
