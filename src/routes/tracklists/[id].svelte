<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		const tracklistId = page.params.id;
		const tracklist = await fetch(
			`http://localhost:5000/tracklists/${tracklistId}?verbose=1`
		).then((r) => r.json());
		return {
			props: {
				tracklist: tracklist
			}
		};
	}

	const getTrackDisplayName = function (track: Track) {
		let displayName = track.name;
		if (track.remix) {
			displayName = `${displayName} (${track.remix.artist.name} ${track.remix.name})`;
		}
		return displayName;
	};
</script>

<script lang="ts">
	export let tracklist: Tracklist;
</script>

<div class="flex flex-col text-center mb-10">
	<h1>{tracklist.name}</h1>
</div>

<ol class="list-none">
	{#each tracklist.tracks as track, i}
		<li class="flex items-center pb-4 mb-4 {i < tracklist.tracks.length - 1 ? 'border-b' : ''}">
			<div>
				<span>{track.index}</span>
			</div>

			<div class="ml-4">
				<h2>{getTrackDisplayName(track.track)}</h2>
				<p class="mt-2">
					<a href="/artists/{track.track.artist.id}" class="cursor-pointer text-indigo-500"
						>{track.track.artist.name}</a
					>
				</p>
			</div>
		</li>
	{/each}
</ol>
