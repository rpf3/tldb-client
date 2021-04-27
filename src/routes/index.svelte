<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		let pageParam = Number(page.query.get('page'));
		let pageNumber = pageParam > 1 ? pageParam : 1;
		let skip = pageNumber > 1 ? (pageNumber - 1) * 10 : 0;

		const tracklists = await fetch(
			`http://localhost:5000/tracklists?verbose=1&skip=${skip}`
		).then((r) => r.json());
		return {
			props: {
				pageNumber: pageNumber,
				tracklists: tracklists
			}
		};
	}
</script>

<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import IconLink from '$lib/components/IconLink.svelte';

	export let pageNumber: number;
	export let tracklists: Tracklist[];
</script>

<div class="flex flex-col text-center mb-10">
	<h1>Tracklists</h1>
</div>

<ol class="list-none">
	{#each tracklists as tracklist, i}
		<li class="flex items-center pb-4 mb-4 {i < tracklists.length - 1 ? 'border-b' : ''}">
			<div class="flex-grow">
				<span>{tracklist.name}</span>

				<p class="mt-2">
					{#each tracklist.artists as artist, i}
						<a href="/artists/{artist.id}" class="cursor-pointer text-blue-500">{artist.name}</a>
						{i == tracklist.artists.length - 1 ? '' : ' & '}
					{/each}
				</p>
			</div>

			<IconLink href="/tracklists/{tracklist.id}" />
		</li>
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
