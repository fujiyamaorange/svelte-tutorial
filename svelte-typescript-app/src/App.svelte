<script lang="ts">
  import CustomButton from './components/CustomButton.svelte'

  export let name: string

  function handleClick() {
    console.log('Button Clicked!', Date.now())
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .outerBox {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <div class="outerBox">
    <input type="text" bind:value={name} />
    <CustomButton on:click={handleClick} />
  </div>
</main>
