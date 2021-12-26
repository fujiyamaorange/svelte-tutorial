<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import Top from './pages/Top.svelte'
  import Todo from './pages/Todo.svelte'
  import Video from './pages/Video.svelte'
  import Eliza from './pages/Eliza.svelte'
</script>

<Router>
  <nav>
    <!-- display all time -->
    <Link to="/">home page |</Link>
    <Link to="todo">todo page |</Link>
    <Link to="video">video page |</Link>
    <Link to="top">top page</Link>
  </nav>
  <main>
    <div>
      <Route path="todo" component={Todo} />
      <Route path="video" component={Video} />
      <Route path="eliza" component={Eliza} />
      <Route path="top" component={Top} />
      <Route exact path="/" component={Eliza} />
    </div>
  </main>
</Router>
