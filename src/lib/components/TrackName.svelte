<script lang="ts">
	import TextLink from '$lib/components/TextLink.svelte';

	export let track: Track;
</script>

{#if track.remix}
	<span
		>{track.name} (<TextLink
			href="/artists/{track.remix.artist.id}"
			text={track.remix.artist.name}
		/>
		{track.remix.name})</span
	>
{:else}
	<span>{track.name}</span>
{/if}
