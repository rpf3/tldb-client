<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';

	var handleClick = function () {
		enabled = !enabled;

		if (enabled) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	afterUpdate(() => {
		enabled = localStorage.getItem('theme') === 'dark';
		visible = true;
	});

	let enabled: boolean;
	let visible = false;
</script>

{#if visible}
	<div
		class="border rounded p-2 mr-2 cursor-pointer dark:border-gray-700"
		on:click={handleClick}
		in:fade={{ duration: 200 }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 {enabled ? '' : 'hidden'}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 {enabled ? 'hidden' : ''}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	</div>
{/if}
