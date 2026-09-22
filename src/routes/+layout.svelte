<script>
	import favicon from '$lib/assets/tubbdoose-icon.svg';
	import './layout.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
