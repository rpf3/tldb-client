<script>
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="text-gray-600 body-font dark:text-gray-300">
	<div class="container mx-auto py-20">
		<slot />
	</div>
</main>
