<script lang="ts">
	export let isLastItem: boolean;
</script>

<li class="flex items-center pb-4 mb-4 {isLastItem ? 'border-b' : ''}">
	<slot />
</li>
