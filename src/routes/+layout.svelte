<script>
	import favicon from '$lib/assets/tubbdoose-icon.svg';
	import './layout.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>TubbDoose</title>
	<meta name="description" content="TubbDoose.ca is the personal website of Sam Low." />
</svelte:head>

{@render children()}
