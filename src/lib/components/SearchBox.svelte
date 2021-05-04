<script lang="ts" context="module">
	var handleSearch = async function (event) {
		const query = searchString.trim();

		if (event.keyCode == 13 && query !== '') {
			window.location.assign(`/search?query=${query}`);
		}
	};

	let searchString: string;
</script>

<input
	type="text"
	class="border rounded p-2 w-4/12 dark:bg-gray-900 dark:border-gray-700"
	placeholder="Search"
	bind:value={searchString}
	on:keydown={handleSearch}
/>
