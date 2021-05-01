<script lang="ts" context="module">
	import * as api from '$lib/api';

	export async function load({ page }) {
		const artistId = page.params.id;

		const artist = await api.get(`/artists/${artistId}`);
		const tracklists = await api.get(`/artists/${artistId}/tracklists`);
		const tracks = await api.get(`/artists/${artistId}/tracks?verbose=1`);

		return {
			props: {
				artist: artist,
				tracklists: tracklists,
				tracks: tracks
			}
		};
	}
</script>

<script lang="ts">
	import IconLink from '$lib/components/IconLink.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import TrackName from '$lib/components/TrackName.svelte';

	export let artist: Artist;
	export let tracklists: Tracklist[];
	export let tracks: Track[];
</script>

<div class="flex flex-col text-center mb-10">
	<h1>{artist.name}</h1>
</div>

<div class="flex flex-col text-center mb-10">
	<h2>Tracklists</h2>
</div>

<ol class="list-none">
	{#each tracklists as tracklist, i}
		<ListItem isLastItem={i < tracklists.length - 1}>
			<div class="flex-grow">
				<span>{tracklist.name}</span>
			</div>

			<IconLink href="/tracklists/{tracklist.id}" />
		</ListItem>
	{/each}
</ol>

<div class="flex flex-col text-center mb-10">
	<h2>Tracks</h2>
</div>

<ol class="list-none">
	{#each tracks as track, i}
		<ListItem isLastItem={i < tracks.length - 1}>
			<div class="flex-grow">
				<TrackName {track} />
			</div>

			<IconLink href="/tracks/{track.id}" />
		</ListItem>
	{/each}
</ol>
