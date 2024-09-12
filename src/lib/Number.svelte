<script>
  import { isValidPasswordStore } from "./stores/passwordStore";

  export let num;

  $: validatePassword = () => {
    if( $isValidPasswordStore === null ) {
      return ""
    } else if ( $isValidPasswordStore ) {
      return "valid"
    } else if ( !$isValidPasswordStore ) {
      return "invalid"
    }
  }

</script>

<div class={validatePassword()}>
  {num}
</div>

<style>
  div {
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  color: white;
  background-color: #333;
  font-size: 1.5rem;
  text-align: center;
  width: 35px;
  height: 50px;
  line-height: 25px;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 2px;
  }

  .valid {
    border-color: #7ce87c;
  }

  .invalid {
    border-color: #ec7472;
  }
</style>