import { onDestroy } from 'svelte'

export function onInterval(callback: () => number, millisdconds: number) {
  const interval = setInterval(callback, millisdconds)

  onDestroy(() => {
    clearInterval(interval)
  })
}
