<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import Top from './pages/Top.svelte'
  import Todo from './pages/Todo.svelte'
  import Video from './pages/Video.svelte'

  export let url = ''
</script>

<Router {url}>
  <nav>
    <!-- display all time -->
    <Link to="/">home page |</Link>
    <Link to="todo">todo page |</Link>
    <Link to="video">video page</Link>
  </nav>
  <main>
    <Route path="todo" component={Todo} />
    <Route path="video" component={Video} />
    <Route path="/">
      <Top />
    </Route>
  </main>
</Router>
