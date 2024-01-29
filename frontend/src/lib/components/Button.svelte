<script lang="ts">
	import Button, { Label } from '@smui/button';
	export let clicked = 0 as number;
	export let label : string;
</script>

<div class="title">
	<Button on:click={() => clicked++}>
		<Label>{label}</Label>
	</Button>
</div>

<style>
</style>
