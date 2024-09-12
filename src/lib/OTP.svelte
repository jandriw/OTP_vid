<script>
  import { passwordLengthStore } from './stores/passwordStore'
  import Number from './Number.svelte';

  export let user_password = [];
  export let showPassword = false;
</script>

<div>
  {#each Array($passwordLengthStore) as _, index }
    <Number num={ index < user_password.length ? (showPassword ? user_password[index] : '*') : " "}/>
  {/each}
</div>