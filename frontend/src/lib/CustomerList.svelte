<script lang="ts">
 import  { type User}  from '$lib/types/index'

  export let name : string
  export let user : User
</script>


<div>
  <h2>{name}</h2>
  <table>
    <thead>
      {#if user }
        <tr>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
        </tr>
      {/if}
    </thead>
    <tbody>
   
    </tbody>
  </table>
</div>
