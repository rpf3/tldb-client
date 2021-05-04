<script lang="ts">
	import DarkToggle from '$lib/components/DarkToggle.svelte';
	import SearchBox from '$lib/components/SearchBox.svelte';
</script>

<header class="text-gray-600 body-font dark:bg-gray-800 dark:text-gray-300">
	<div class="flex p-5 items-center">
		<a href="/" class="font-medium">
			<span class="text-xl">tldb</span>
		</a>

		<nav class="border-l border-gray-400 ml-4 pl-4">
			<a href="/">Home</a>
		</nav>

		<div class="flex-grow" />

		<DarkToggle enabled={true} />
		<SearchBox />
	</div>
</header>
