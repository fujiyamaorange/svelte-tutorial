<script>
  let input

  // フォーカス機能だけexportする
  export function focus() {
    input.focus()
  }
</script>

<input bind:this={input} />
