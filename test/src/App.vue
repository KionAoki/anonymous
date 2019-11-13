<template>
  <div id="app">
    <Hamburger/>
    <main id="landing">
      <SideBar/>
      <Banner/>
    </main>
  </div>
</template>

<script>
import Hamburger from './components/Hamburger.vue'
import SideBar from './components/SideBar.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'app',
  components: {
    Hamburger,
    SideBar,
    Banner
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

#role a {
  color: #9DDFF8;
}

.qrcode-title > h2 {
  color: #050511;
}

#instagram h3{
  color: #11283A;
}

#instagram p {
  color: #4D4D4D;
}

/* background */

.star {
  background-image: url('assets/star.svg');
  background-color: #050511;
}
.center {
  width: 75%;
  margin: auto;
  padding: 30px;
}

.shallow {
  position: relative;
  background-color: rgb(58, 65, 81, 0.7);
  border-radius: 20px;
  z-index: 2;
}

.inner {
  padding: 40px;
}
</style>
