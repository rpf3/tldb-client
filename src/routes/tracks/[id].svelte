<script lang="ts" context="module">
	import * as api from '$lib/api';

	export async function load({ page }) {
		const trackId = page.params.id;

		const track = await api.get(`/tracks/${trackId}?verbose=1`);

		return {
			props: {
				track: track
			}
		};
	}
</script>

<script lang="ts">
	import * as utils from '$lib/utils';

	export let track: Track;
</script>

<div class="flex flex-col text-center mb-10">
	<h1>{utils.getTrackName(track)}</h1>
</div>
