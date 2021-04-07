<script lang="ts">
	export let tracklists: Tracklist[];
</script>

{#each tracklists as tracklist, i}
	<div class="flex mb-10 pb-10 {i < tracklists.length - 1 ? 'border-b' : ''}">
		<p>{tracklist.name}</p>
	</div>
{/each}
