<script>
	import { islogin, mode } from './stores.js';
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';


</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if !$islogin}
<Login />
{:else}
	{#if $mode == 'menu'}
  <h1>login succsees </h1>
  {/if}
  <Logout/>
{/if}


<style>

	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

</style>