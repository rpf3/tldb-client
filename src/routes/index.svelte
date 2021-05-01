<script lang="ts" context="module">
	import * as api from '$lib/api';

	export async function load({ page }) {
		let pageParam = Number(page.query.get('page'));
		let pageNumber = pageParam > 1 ? pageParam : 1;
		let skip = pageNumber > 1 ? (pageNumber - 1) * 10 : 0;

		const tracklists = await api.get(`/tracklists?verbose=1&skip=${skip}`);

		return {
			props: {
				pageNumber: pageNumber,
				tracklists: tracklists
			}
		};
	}
</script>

<script lang="ts">
	import TextLink from '$lib/components/TextLink.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import ListItem from '$lib/components/ListItem.svelte';

	export let pageNumber: number;
	export let tracklists: Tracklist[];
</script>

<div class="flex flex-col text-center mb-10">
	<h1>Tracklists</h1>
</div>

<ol class="list-none">
	{#each tracklists as tracklist, i}
		<ListItem isLastItem={i < tracklists.length - 1}>
			<div class="flex-grow">
				<span>{tracklist.name}</span>

				<p class="mt-2">
					{#each tracklist.artists as artist, i}
						<TextLink href="/artists/{artist.id}" text={artist.name} />
						{i == tracklist.artists.length - 1 ? '' : ' & '}
					{/each}
				</p>
			</div>

			<IconLink href="/tracklists/{tracklist.id}" />
		</ListItem>
	{/each}
</ol>

<div class="flex flex-row">
	{#if pageNumber > 1}
		<ButtonLink href="/?page={pageNumber - 1}" text="Previous" />
	{:else}
		<ButtonLink text="Previous" />
	{/if}

	<ButtonLink href="/?page={pageNumber + 1}" text="Next" />
</div>
