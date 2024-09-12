<script>
  import { isValidPasswordStore } from "./stores/passwordStore";
  import { fly } from "svelte/transition";

  let message = '';
  let showToast = false;

  $: if( $isValidPasswordStore === null) {
    showToast = false;
  } else {
    message = $isValidPasswordStore ? 'Clave Correcta' : 'Clave Incorrecta';
    showToast = true;
    setTimeout(() => showToast = false, 3000);
  }

  function toastClass() {
    return $isValidPasswordStore === true ? 'success' : 'error'
  }
</script>

{#if showToast}
  <div transition:fly = "{ { y: 30, duration: 300 } }" class={toastClass()} >{message}</div>
{/if}

<style>
  div {
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: #333;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    z-index: 1000;
  }
  .success {
    background-color: #7ce87c;
  }
  .error {
    background-color: #ec7472;
  }
</style>