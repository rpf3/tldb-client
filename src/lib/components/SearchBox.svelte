<script lang="ts" context="module">
	import { goto } from '$app/navigation';

	var handleSearch = async function (event) {
		const query = searchString.trim();

		if (event.keyCode == 13 && query !== '') {
			goto(`/search?query=${query}`);
		}
	};

	let searchString: string;
</script>

<input
	type="text"
	class="border rounded w-4/12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700"
	placeholder="Search"
	bind:value={searchString}
	on:keydown={handleSearch}
/>
