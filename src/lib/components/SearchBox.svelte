<script lang="ts" context="module">
	var handleSearch = async function (event) {
		if (event.keyCode == 13) {
			window.location.assign(`/search?query=${searchString}`);
		}
	};

	let searchString: string;
</script>

<input
	type="text"
	class="border rounded p-2 w-4/12"
	placeholder="Search"
	bind:value={searchString}
	on:keydown={handleSearch}
/>
