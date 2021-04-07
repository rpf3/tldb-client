<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		const artistId = page.params.id;
		const artist = await fetch(`http://localhost:5000/artists/${artistId}`).then((r) => r.json());
		return {
			props: {
				artist: artist
			}
		};
	}
</script>

<script lang="ts">
	export let artist: Artist;
</script>

<h2>{artist.name}</h2>
