<script lang="ts">
 import  { type User}  from '$lib/types/index'

  export let name : string
  export let users : User[]
</script>


<div>
  <h2>{name}</h2>
  <table>
    <thead>
      {#if users }
        {#each users as user}
          <tr>
            <td>
              <a href=/customer/{user.id}>{user.id}</a> 
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
          </tr>
        {/each}

      {/if}
    </thead>
    <tbody>
   
    </tbody>
  </table>
</div>
