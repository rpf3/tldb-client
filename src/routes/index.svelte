<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		let pageParam = Number(page.query.get('page'));
		let pageNumber = pageParam > 1 ? pageParam : 1;
		let skip = pageNumber > 1 ? (pageNumber - 1) * 10 : 0;

		const tracklists = await fetch(
			`http://localhost:5000/tracklists?verbose=1&skip=${skip}`
		).then((r) => r.json());
		return {
			props: {
				pageNumber: pageNumber,
				tracklists: tracklists
			}
		};
	}
</script>

<script lang="ts">
	export let pageNumber: number;
	export let tracklists: Tracklist[];
</script>

<div class="flex flex-col text-center mb-10">
	<h1>Tracklists</h1>
</div>

<ol class="list-none">
	{#each tracklists as tracklist, i}
		<li class="flex items-center pb-4 mb-4 {i < tracklists.length - 1 ? 'border-b' : ''}">
			<div class="flex-grow">
				<span>{tracklist.name}</span>

				<p class="mt-2">
					{#each tracklist.artists as artist, i}
						<a href="/artists/{artist.id}" class="cursor-pointer text-indigo-500">{artist.name}</a>
						{i == tracklist.artists.length - 1 ? '' : ' & '}
					{/each}
				</p>
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

<div class="flex flex-row">
	{#if pageNumber > 1}
		<a
			href="/?page={pageNumber - 1}"
			class="mx-auto bg-blue-500 text-white rounded text-large px-4 py-2 hover:bg-blue-600 focus:outline-none"
			>Previous</a
		>
	{:else}
		<a class="mx-auto bg-gray-500 text-white rounded text-large px-4 py-2">Previous</a>
	{/if}

	<a
		href="/?page={pageNumber + 1}"
		class="mx-auto bg-blue-500 text-white rounded text-large px-4 py-2 hover:bg-blue-600 focus:outline-none"
		>Next</a
	>
</div>
