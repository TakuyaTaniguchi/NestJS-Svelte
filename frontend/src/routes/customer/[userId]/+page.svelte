<script lang="ts">
	import { type User } from '$lib/types/index';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let id: number;
	let firstName: string;
	let lastName: string;
	export let users: User[];

	onMount(async () => {
		id = Number($page.params.userId);
		const response = await fetch(`http://localhost:3000/customers/user?id=${id}`);
		const data = await response.json();
		users = data;
		firstName = users[0].firstName;
		lastName = users[0].lastName;
	});

	async function updateUser() {
		await fetch('http://localhost:3000/customers/update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id, firstName, lastName })
		});
	}
</script>

<div>
	<div>
		<h2>user 詳細ぺーじ</h2>
		<div>
			<table>
				<thead>
					{#if users}
						{#each users as user}
							<div>
								<label for="inputId">:inputId {user.id}</label>
								<input type="number" name="inputId" id="inputId" value={user.id} disabled />
							</div>
							<div class="form-example">
								<label for="firstName">Enter your firstName: </label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									value={user.firstName}
									on:change={(event) => {
										firstName = event.target.value;
									}}
								/>
							</div>
							<div class="form-example">
								<label for="lastname">Enter your lastname: </label>
								<input
									type="text"
									name="lastname"
									id="lastname"
									value={user.lastName}
									on:change={(event) => {
										lastName = event.target.value;
									}}
								/>
							</div>
						{/each}
					{/if}
				</thead>
			</table>
		</div>
		<button
			type="button"
			on:click={() => {
				updateUser();
			}}>保存する</button
		>
	</div>
</div>
