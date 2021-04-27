<script>
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="text-gray-600 body-font">
	<div class="container mx-auto py-20">
		<slot />
	</div>
</main>
