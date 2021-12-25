<script lang="ts">
  import CustomButton from '../components/CustomButton.svelte'
  import InputField from '../components/InputField.svelte'
  import type { Menu } from '../model/Menu'

  let name: string = 'World'
  let yes: boolean = false

  let flavours: Menu[] = ['Mint choc chip']
  let field: any

  let menu: Menu[] = ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple']

  function handleClick() {
    console.log('Button Clicked!', Date.now())
  }

  function joinFlavour(flavours: Menu[]) {
    if (flavours.length === 1) return flavours[0]
    // english notation
    return `${flavours.slice(0, -1).join(', ')} and ${flavours.at(-1)}`
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
    <label>
      <input type="checkbox" bind:checked={yes} />
      Yes! Send me regular email spam
    </label>

    {#each menu as flavour}
      <label>
        <input
          type="checkbox"
          bind:group={flavours}
          name="flavours"
          value={flavour} />
        {flavour}
      </label>
    {/each}

    {joinFlavour(flavours)}

    <CustomButton on:click={handleClick} />
    <div>
      <InputField bind:this={field} />
      <button on:click={() => field.focus()}>focus this field</button>
    </div>
  </div>
</main>
