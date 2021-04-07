<script lang="ts">
	export let tracklists: Tracklist[];
</script>

{#each tracklists as tracklist, i}
	<div class="flex flex-col mb-10 pb-10 {i < tracklists.length - 1 ? 'border-b' : ''}">
		<h2 class="text-lg">{tracklist.name}</h2>

		<p class="mt-4">
			{#each tracklist.artists as artist, i}
				<a href="/artists/{artist.id}" class="cursor-pointer text-indigo-500">{artist.name}</a>
				{i == tracklist.artists.length - 1 ? '' : ' & '}
			{/each}
		</p>
	</div>
{/each}
