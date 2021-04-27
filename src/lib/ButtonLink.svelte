<script lang="ts">
	export let href: string;
	export let text: string;
</script>

{#if href}
	<a
		{href}
		class="mx-auto bg-blue-500 text-white rounded text-large px-4 py-2 hover:bg-blue-600 focus:outline-none"
		>{text}</a
	>
{:else}
	<a {href} class="mx-auto bg-gray-500 text-white rounded text-large px-4 py-2">{text}</a>
{/if}
