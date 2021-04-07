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
	export let tracklists: Tracklist[];
</script>

<div class="flex flex-col text-center mb-10">
	<h1>Tracklists</h1>
</div>

<ol class="list-none">
	{#each tracklists as tracklist, i}
		<li class="flex flex-row pb-4 mb-4 {i < tracklists.length - 1 ? 'border-b' : ''}">
			<div class="flex-grow">
				<span>{tracklist.name}</span>

				<p class="mt-2">
					{#each tracklist.artists as artist, i}
						<a href="/artists/{artist.id}" class="cursor-pointer text-indigo-500">{artist.name}</a>
						{i == tracklist.artists.length - 1 ? '' : ' & '}
					{/each}
				</p>
			</div>

			<div class="h-8 w-8 rounded-full text-blue-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
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
		</li>
	{/each}
</ol>
