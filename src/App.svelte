<script>
  import Generate from "./lib/Generate.svelte";
  import OTP from "./lib/OTP.svelte";
  import { isValidPasswordStore, passwordLengthStore, passwordStore } from "./lib/stores/passwordStore";
  import Toast from "./lib/Toast.svelte";
  import { eyeSVG } from "./lib/utils/SVG";

  let user_password = [];
  let showPassword = false;

  function handelKeydown(event) {
    if(user_password.length < $passwordLengthStore) {
      const key = event.key

      if (!isNaN(key) && key !== " ") {
        user_password = [...user_password, key];
      }
    }
  }

  function handleMouseDown() {
    showPassword = true;
  }

  function handleMouseUp() {
    showPassword = false;
  }

  function handleSubmit() {
    if (user_password.join('') === $passwordStore.join('')) {
      console.log('La contraseña es correcta')
      isValidPasswordStore.set(true)
    } else {
      console.log('La contraseña es incorrecta')
      isValidPasswordStore.set(false)
    }
  }
</script>

<svelte:window on:keydown={handelKeydown} />

<div>
  <OTP {user_password} {showPassword}/>
</div>

<div class="button-container">
  <button
    on:click={handleSubmit}
    disabled = {user_password.length < $passwordLengthStore}
  >
    Enviar
  </button>

  <button
    class="eye-button"
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
  >
    <span class="eye-icon">{@html eyeSVG}</span>
  </button>
</div>

<div>
  <Generate />
</div>

<Toast />

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .button-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
  }

  .eye-button {
    background-color: #2d2d2d;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .eye-icon {
    width: 24px;
    height: 24px;
    color: white;
  }

  .eye-button:hover .eye-icon {
    color: #4CAF50;
  }
</style>
