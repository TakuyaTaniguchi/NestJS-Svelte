<script lang="ts">
	import Header from '$lib/Header.svelte';
	import CustomerList from '$lib/CustomerList.svelte';
	import { type Customer } from '$lib/types/index';
	import { onMount } from 'svelte';
	import { apiCLient } from '../lib/core/index'
	import Textfield from '$lib/components/Textfield.svelte';
	import {} from '$lib/components/Button.svelte'

	import Button, { Label } from '@smui/button';
	import Drawer, { AppContent, Content } from '@smui/drawer';
 	import List, { Item, Text } from '@smui/list';
// 	 import ImageList, {
//     ImageAspectContainer,
//     Image,
//     Supporting,
//   } from '@smui/image-list';
	let clicked = 0 as number | string;
	let customers: Customer[];
	let id: number;
	let firstName: string;
	let lastName: string;

	onMount(async () => {
		const response = await apiCLient('customers', 'GET');
		customers = response as Customer[];
	});

	async function add(customer: Customer) {		
		await fetch('http://localhost:3000/customers/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ customer })
		});
		await new Promise((resolve) => setTimeout(resolve, 1000)); //sever側でちゃんと実装する
		const response = await fetch('http://localhost:3000/customers');
		const data = (await response.json()) as Customer[];
		customers = data;
	}

	async function removeCustomer(event: CustomEvent<{ id: number }>) {
		await fetch('http://localhost:3000/customers/remove', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: event.detail.id })
		});
		await new Promise((resolve) => setTimeout(resolve, 1000)); //sever側でちゃんと実装する
		const response = await fetch('http://localhost:3000/customers');
		const data = (await response.json()) as Customer[];
		customers = data;
	}
</script>

<div>
	<!-- <Header title="+pageSvelte" />
	<Button on:click={() => clicked++} class="myClass">
		<Label>With a Class {clicked}</Label>
	  </Button> -->
	  <!-- <ImageList class="my-image-list-standard">
		{#each Array(15) as _unused, i}
		  <Item>
			<ImageAspectContainer>
			  <Image
				src="https://placehold.co/190x190?text=square"
				alt="Image {i + 1}"
			  />
			</ImageAspectContainer>
			<Supporting>
			  <Label>Image {i + 1}</Label>
			</Supporting>
		  </Item>
		{/each}
	  </ImageList> -->
	  <div class="drawer-container">
		<Drawer>
		  <Content>
			<List>
			  <Item
				href="javascript:void(0)"
				on:click={() => (clicked = 'Gray Kittens')}
			  >
				<Text>Gray Kittens</Text>
			  </Item>
			  <Item
				href="javascript:void(0)"
				on:click={() => (clicked = 'A Space Rocket')}
			  >
				<Text>A Space Rocket</Text>
			  </Item>
			  <Item
				href="javascript:void(0)"
				on:click={() => (clicked = '100 Pounds of Gravel')}
			  >
				<Text>100 Pounds of Gravel</Text>
			  </Item>
			  <Item
				href="javascript:void(0)"
				on:click={() => (clicked = 'All of the Shrimp')}
			  >
				<Text>All of the Shrimp</Text>
			  </Item>
			  <Item
				href="javascript:void(0)"
				on:click={() => (clicked = 'A Planet with a Mall')}
			  >
				<Text>A Planet with a Mall</Text>
			  </Item>
			</List>
		  </Content>
		</Drawer>
	   
		<AppContent class="app-content">
		  <main class="main-content">
			App content.
			<br />
			{#if clicked === 'Gray Kittens'}
				<Textfield
					type="text"
					value="test"
					dirty={false}
					invalid={false}
					disabled={false}
				></Textfield>
			{/if}
			<pre class="status">Clicked: {clicked}</pre>
		  </main>
		</AppContent>
	  </div>
	<!-- <div class="container">
		<div class="inner">
			<div class="form-example">
				<div class="form-example">
					<label for="inputId">:inputId </label>
					<input
						type="number"
						name="inputId"
						id="inputId"
						on:change={(event) => {
							id = event.target.value;
						}}
					/>
				</div>
				<div class="form-example">
					<label for="firstName">Enter your firstName: </label>
					<input
						type="text"
						name="firstName"
						id="firstName"
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
						on:change={(event) => {
							lastName = event.target.value;
						}}
					/>
				</div>
				<div class="form-example">
					<button
						value="add"
						on:click={() => {
							add({ id, firstName, lastName });
						}}>Add</button
					>
				</div>
			</div>
		</div>
		<div class="inner">
			<CustomerList
				name={'登録ユーザー'}
				{customers}
				on:removeCustomer={removeCustomer}
			/>
		</div>
	</div> -->
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-content: stretch;
		justify-content: space-around;
	}

  /* These classes are only needed because the
    drawer is in a container on the page. */
	.drawer-container {
    position: relative;
    display: flex;
    height: 350px;
    max-width: 100%;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }
 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
 
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
