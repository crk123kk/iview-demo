<template>
  <div id="app">
    <TopTitle/>
    <NavigationBar/>
    <router-view/>
  </div>
</template>

<script>
import TopTitle from './components/TopTitle'
import NavigationBar from './components/NavigationBar'
export default {
  name: 'App',
  components: {
    TopTitle,
    NavigationBar
  }
}
</script>


