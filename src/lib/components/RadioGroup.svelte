<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const change = () => dispatch('change');

	export let value: string;
	export let options: RadioOption[];
</script>

<div>
	{#each options as option, i}
		<div class="flex items-center">
			<input
				type="radio"
				id="option_{i}_{option.value}"
				class="cursor-pointer border-gray-200 text-blue-500 focus:ring-blue-500"
				bind:group={value}
				value={option.value}
				on:change={change}
			/>
			<label for="option_{i}_{option.value}" class="ml-2">{option.key}</label>
		</div>
	{/each}
</div>
