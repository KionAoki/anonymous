<template>
  <div id="app">
    <Hamburger/>
    <main id="landing">
      <SideBar/>
    </main>
  </div>
</template>

<script>
import Hamburger from './components/Hamburger.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    Hamburger,
    SideBar
  }
}
</script>

<style>
/* font size & color */

h1 {
  font-size: 50px;
  font-family: 'Noto Sans TC', sans-serif;
  color: #ffffff;
}

h2 {
  font-size: 34px;
  color: #FFFFFF;
  font-family: 'Noto Sans TC', sans-serif;
}

h3 {
  font-size: 24px;
  color: #F1C320;
  font-family: 'Noto Sans TC', sans-serif;
}

p {
  font-size: 18px;
  color: #F2F2F2;
  font-family: 'Noto Sans TC', sans-serif;
  line-height: 2em;
}
</style>
