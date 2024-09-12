<script>
  import { passwordStore, passwordLengthStore } from "./stores/passwordStore";

  function generatePassword() {
    const length = $passwordLengthStore
    const newPassword = Array.from({ length }, () => Math.floor(Math.random() * 10))
    passwordStore.set(newPassword)
    alert(`Se ha generado la siguiente clave para usted: ${newPassword.join('')}`)
  }
</script>

<button on:click={generatePassword}>Genearar Clave</button>