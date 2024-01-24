<script lang="ts">
	import { type Customer } from '$lib/types/index';
	import { createEventDispatcher } from 'svelte';
	export let name: string;
	export let users: Customer[];

	const dispatch = createEventDispatcher<{ removeCustomer: { id: number } }>();
	function removeCustomer(id: number) {
		dispatch('removeCustomer', {
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
										removeCustomer(user.id);
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
