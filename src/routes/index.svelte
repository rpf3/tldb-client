<script lang="ts" context="module">
	export async function load({ fetch }) {
		const tracklists = await fetch('http://localhost:5000/tracklists?verbose=1').then((r) =>
			r.json()
		);
		return {
			props: {
				tracklists: tracklists
			}
		};
	}
</script>

<script lang="ts">
	import TracklistList from '$lib/TracklistList.svelte';
	export let tracklists: Tracklist[];
</script>

<TracklistList {tracklists} />
