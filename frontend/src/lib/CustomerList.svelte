<script lang="ts">
	import { type Customer } from '$lib/types/index';
	import { createEventDispatcher } from 'svelte';
	export let name: string;
	export let users: Customer[];

	const dispatch = createEventDispatcher<{ removeuser: { id: number } }>();
	function removeuser(id: number) {
		dispatch('removeuser', {
			id: id
		});
	}
</script>

<div>
	<h2>{name}</h2>
	<table>
		<thead>
			{#if users}
				{#each users as user}
					<tr>
						<td>
							<a href="/customer/{user.id}">{user.id}</a>
						</td>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
						<td>
							<div>
								<button
									type="button"
									on:click={() => {
										removeuser(user.id);
									}}>remove</button
								>
							</div>
						</td>
					</tr>
				{/each}
			{/if}
		</thead>
	</table>
</div>
