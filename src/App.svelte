<script>
	import { islogin, mode } from './stores.js';
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';
	import Menu from './Menu.svelte';
	import Registry from './Registry.svelte'
	import Withdrawal from './Withdrawal.svelte'
	import Result from './Result.svelte'


</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if !$islogin}
<Login />
{:else}
	{#if $mode == 'menu'}
		  <Menu/>
	{:else if $mode == 'registry'}
	  <Registry />
	{:else if $mode == 'result'}
	  <Result />
	{:else if $mode == 'withdrawal'}
	  <Withdrawal />
  {/if}
  <Logout/>
{/if}


<style>
	
</style>