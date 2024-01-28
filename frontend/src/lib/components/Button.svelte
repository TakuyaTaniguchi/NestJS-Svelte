<script lang="ts">
	import Button, { Label } from '@smui/button';
	export let clicked = 0 as number | string;
</script>

<div class="title">
	<Button on:click={() => clicked++} class="myClass">
		<Label>With a Class {clicked}</Label>
	</Button>
</div>

<style>
</style>
