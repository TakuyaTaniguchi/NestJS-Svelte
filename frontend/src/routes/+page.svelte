<script lang="ts">
    import  Header  from '$lib/Header.svelte'
    import CustomerList from '$lib/CustomerList.svelte'
    import { type User } from '$lib/types/index'
    import { onMount } from 'svelte'

    let user : User

    onMount(async ()=>{
        const response = await fetch('http://localhost:3000/customers/sample');
        const data = await response.json() as User;
        user = data
    })


    const add = async (name: string) => {
        const response = await fetch('http://localhost:3000/customers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
        const data = await response.json() as User;
        user = data
    }
</script>


<div>
    <Header title="+pageSvelte"/>
    <div class="container">
        <div class="inner">
          <div class="form-example">
            <div class="form-example">
              <label for="firstName">Enter your firstName: </label>
              <input type="text" name="firstName" id="firstName"  />
            </div>
            <div class="form-example">
              <label for="lastname">Enter your lastname: </label>
              <input type="text" name="lastname" id="lastname"  />
            </div>
            <div class="form-example">
              <button value="add"  on:click={()=>{
                add('test')
            }}>Add</button>
            </div>
          </div>
        </div>
        <div class="inner">
          <CustomerList name={'登録ユーザー'} user={user}/>
        </div>
      </div>
</div>

<style>
  .container {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    align-content: stretch;
    justify-content: space-around;
  }
  
  </style>
