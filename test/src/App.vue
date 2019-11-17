<template>
  <div id="app">
    <Hamburger/>
    <main id="landing">
      <SideBar/>
      <Banner/>
      <Introduction/>
      <Story/>
      <Cyberbully/>
      <Role/>
      <Instagram/>
    </main>
    <footer>
      <shareCredit/>
    </footer>
  </div>
</template>

<script>
import Hamburger from './components/Hamburger.vue'
import SideBar from './components/SideBar.vue'
import Banner from './components/Banner.vue'
import Introduction from './components/Introduction.vue'
import Story from './components/Story.vue'
import Cyberbully from './components/Cyberbully.vue'
import Role from './components/Role.vue'
import Instagram from './components/Instagram.vue'
import shareCredit from './components/credit.vue'

export default {
  name: 'app',
  components: {
    Hamburger,
    SideBar,
    Banner,
    Introduction,
    Story,
    Cyberbully,
    Role,
    Instagram,
    shareCredit
  }
}
</script>

<style>
  .star {
    background-image: url('./assets/star.svg');
    background-color: #050511;
  }
</style>
