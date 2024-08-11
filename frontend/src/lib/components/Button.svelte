<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button, { Label } from '@smui/button';

	export let clicked = 0 as number;
	export let label: string;

	const dispatch = createEventDispatcher();

	function handleClick() {
		clicked++;
		dispatch('clicked');  // カスタムイベント "clicked" をディスパッチ
	}
</script>

<div class="title">
	<Button on:click={handleClick}>
		<Label>{label}</Label>
	</Button>
</div>

<style>
</style>
