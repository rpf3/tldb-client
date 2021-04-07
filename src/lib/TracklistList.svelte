<script lang="ts">
	export let tracklists: Tracklist[];
</script>

{#each tracklists as tracklist, i}
	<div class="flex flex-row mb-10 pb-10 {i < tracklists.length - 1 ? 'border-b' : ''}">
		<div class="flex-grow">
			<h2 class="text-lg">{tracklist.name}</h2>

			<p class="mt-4">
				{#each tracklist.artists as artist, i}
					<a href="/artists/{artist.id}" class="cursor-pointer text-indigo-500">{artist.name}</a>
					{i == tracklist.artists.length - 1 ? '' : ' & '}
				{/each}
			</p>
		</div>

		<div class="h-8 w-8 rounded-full text-blue-500">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
				<a href="/tracklists/{tracklist.id}">
					<circle
						cx="50%"
						cy="50%"
						r="50%"
						class="fill-current"
						fill-opacity="0"
						stroke-opacity="0"
					/>
				</a>
			</svg>
		</div>
	</div>
{/each}
