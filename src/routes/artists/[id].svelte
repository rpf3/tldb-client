<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		const artistId = page.params.id;

		const artist = await fetch(`http://localhost:5000/artists/${artistId}`).then((r) => r.json());

		const tracklists = await fetch(
			`http://localhost:5000/artists/${artistId}/tracklists`
		).then((r) => r.json());

		const tracks = await fetch(
			`http://localhost:5000/artists/${artistId}/tracks?verbose=1`
		).then((r) => r.json());

		return {
			props: {
				artist: artist,
				tracklists: tracklists,
				tracks: tracks
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
		<li class="flex items-center pb-4 mb-4 {i < tracklists.length - 1 ? 'border-b' : ''}">
			<div class="flex-grow">
				<span>{tracklist.name}</span>
			</div>

			<div class="text-blue-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
					<a href="/tracklists/{tracklist.id}" target="_blank">
						<rect
							x="0"
							y="0"
							width="100%"
							height="100%"
							class="fill-current"
							fill-opacity="0"
							stroke-opacity="0"
						/>
					</a>
				</svg>
			</div>
		</li>
	{/each}
</ol>

<div class="flex flex-col text-center mb-10">
	<h2>Tracks</h2>
</div>

<ol class="list-none">
	{#each tracks as track, i}
		<li class="flex items-center pb-4 mb-4 {i < tracks.length - 1 ? 'border-b' : ''}">
			<div class="flex-grow">
				<span>{getTrackDisplayName(track)}</span>
			</div>
		</li>
	{/each}
</ol>
