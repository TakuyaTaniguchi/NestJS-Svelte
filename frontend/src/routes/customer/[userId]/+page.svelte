<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores';
  export let id : string

  onMount(() => {
    id = $page.params.userId

    // 詳細ページの情報を取得する
    
  });
</script>


<div>
    <div>
      user 詳細ページ {id}
    </div>
</div>
