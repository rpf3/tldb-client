<script lang="ts">
	export let track: Track;
</script>

{#if track.remix}
	<span
		>{track.name} (<a href="/artists/{track.remix.artist.id}" class="cursor-pointer text-blue-500"
			>{track.remix.artist.name}</a
		>
		{track.remix.name})</span
	>
{:else}
	<span>{track.name}</span>
{/if}
