<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores';
  export let id : string

  onMount(() => {
    // $paramsからuserIdを取得
    id = $page.params.userId
    
  });
</script>


<div>
    <div>
      user 詳細ページ {id}
    </div>
</div>
