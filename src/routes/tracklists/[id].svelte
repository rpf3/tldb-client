<script lang="ts" context="module">
	import * as api from '$lib/api';

	export async function load({ page }) {
		const tracklistId = page.params.id;

		const tracklists: Tracklist[] = await api.get(`/tracklists/${tracklistId}?verbose=1`);

		return {
			props: {
				tracklist: tracklists[0]
			}
		};
	}
</script>

<script lang="ts">
	import TextLink from '$lib/components/TextLink.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import TrackName from '$lib/components/TrackName.svelte';

	export let tracklist: Tracklist;
</script>

<div class="flex flex-col text-center mb-10">
	<h1>{tracklist.name}</h1>
</div>

<div class="grid grid-cols-5 gap-4">
	<div>
		<div class="p-2 border-r">
			<div class="mb-5 text-center">
				<h2>Details</h2>
			</div>

			<div class="grid grid-cols-5 gap-2">
				<div>Date</div>
				<div class="col-span-4">{tracklist.date}</div>

				<div>Tags</div>
				<div class="col-span-4">
					<div class="flex flex-wrap gap-1">
						{#each tracklist.tags as tag}
							<div class="border border-solid rounded-full text-center px-3 py-1">{tag}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="col-span-4">
		<ol class="list-none">
			{#each tracklist.tracks as track, i}
				<ListItem isLastItem={i < tracklist.tracks.length - 1}>
					<div>
						<span>{track.index}</span>
					</div>

					<div class="flex-grow ml-4">
						<TrackName track={track.track} />

						<p class="mt-2">
							<TextLink href="/artists/{track.track.artist.id}" text={track.track.artist.name} />
						</p>
					</div>

					<IconLink href="/tracks/{track.track.id}" />
				</ListItem>
			{/each}
		</ol>
	</div>
</div>
