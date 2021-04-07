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
</script>

<script lang="ts">
	export let tracklist: Tracklist;
</script>

<h2>{tracklist.name}</h2>
