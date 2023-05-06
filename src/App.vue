<template>
  <div id="app">
    <CompHeader />
    <HomeMenu />
    <router-view />
  </div>
</template>

<script>
import CompHeader from './components/HomeHeader.vue'
import HomeMenu from './components/HomeMenu.vue'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    CompHeader,
    HomeMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.grid {
  width: 100%;
  display: block;
  padding: 0px;
}
.grid.wide {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
