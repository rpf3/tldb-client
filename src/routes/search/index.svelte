<script lang="ts" context="module">
	import { goto } from '$app/navigation';
	import * as api from '$lib/api';

	export async function load({ page }) {
		let query = String(page.query.get('query'));
		let pageParam = Number(page.query.get('page'));
		let pageNumber = pageParam > 1 ? pageParam : 1;
		let skip = pageNumber > 1 ? (pageNumber - 1) * 10 : 0;

		let resourceType = String(page.query.get('type') || 'tracklist');

		let tracks: Track[];
		let artists: Artist[];
		let tracklists: Tracklist[];

		if (resourceType === 'track') {
			tracks = await api.get(`/tracks?verbose=1&skip=${skip}&query=${query}`);
		} else if (resourceType == 'artist') {
			artists = await api.get(`/artists?skip=${skip}&query=${query}`);
		} else {
			tracklists = await api.get(`/tracklists?verbose=1&skip=${skip}&query=${query}`);
		}

		return {
			props: {
				query: query,
				pageNumber: pageNumber,
				tracks: tracks,
				artists: artists,
				tracklists: tracklists,
				resourceType: resourceType
			}
		};
	}
</script>

<script lang="ts">
	import TextLink from '$lib/components/TextLink.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import TrackName from '$lib/components/TrackName.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';

	var applyFilters = async function (event) {
		goto(`/search?query=${query}&type=${resourceFilter}`);
	};

	export let query: string;
	export let pageNumber: number;
	export let tracks: Track[];
	export let artists: Artist[];
	export let tracklists: Tracklist[];
	export let resourceType: string;

	let resourceFilter: string = resourceType;

	let filterOptions: RadioOption[] = [
		{
			key: 'Tracklists',
			value: 'tracklist'
		},
		{
			key: 'Tracks',
			value: 'track'
		},
		{
			key: 'Artists',
			value: 'artist'
		}
	];
</script>

<div class="flex flex-col text-center mb-10">
	<h1>Search Results</h1>
</div>

<div class="grid grid-cols-5 gap-4">
	<div>
		<div class="p-2 border-r">
			<div class="mb-5 text-center">
				<h2>Filters</h2>
			</div>

			<RadioGroup bind:value={resourceFilter} options={filterOptions} on:change={applyFilters} />
		</div>
	</div>

	<div class="col-span-4">
		<ol class="list-none">
			{#if resourceType === 'track'}
				{#each tracks as track, i}
					<ListItem isLastItem={i < tracks.length - 1}>
						<div class="flex-grow">
							<TrackName {track} />
						</div>

						<IconLink href="/tracks/{track.id}" />
					</ListItem>
				{/each}
			{:else if resourceType === 'artist'}
				{#each artists as artist, i}
					<ListItem isLastItem={i < artists.length - 1}>
						<div class="flex-grow">
							<span>{artist.name}</span>
						</div>

						<IconLink href="/artists/{artist.id}" />
					</ListItem>
				{/each}
			{:else}
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
			{/if}
		</ol>

		<div class="flex flex-row">
			{#if pageNumber > 1}
				<ButtonLink
					href="/search?query={query}&page={pageNumber - 1}&type={resourceType}"
					text="Previous"
				/>
			{:else}
				<ButtonLink text="Previous" />
			{/if}

			<ButtonLink
				href="/search?query={query}&page={pageNumber + 1}&type={resourceType}"
				text="Next"
			/>
		</div>
	</div>
</div>
