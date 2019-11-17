<template>
  <div id="app">
    <div class="menu-toggle" id="hamburger" v-on:click="pop">
      <a class="hamburgerBar" style="color: white;">
        <i :class="{'fas fa-bars': bar, 'fas fa-times': cross,'fa-sm': size}"></i>
      </a>
    </div>
    <main id="landing" v-on:click.capture="closesidebar">
      <nav id="sidebar-wrapper" :class="{ 'open':  sidebar_open, 'close':  sidebar_close }">
        <ul class="sidebar-nav" id="list-item">
          <li class="sidebar-brand">
            <a href="#banner">匿名 Anonymous</a>
          </li>
          <li class="sidebar-nav-item" v-for="value in items" v-bind:key="value.key">
            <p><a class="js-scroll-trigger" :href=value.link>{{value.title}}</a></p>
          </li>
        </ul>
      </nav>
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
    Banner,
    Introduction,
    Story,
    Cyberbully,
    Role,
    Instagram,
    shareCredit
  },
  data: function () {
    return {
      open: false,
      close: true,
      bar: true,
      cross: false,
      size: true,
      items: [
        {key: 1, link: '#story', title: '聽聽他們怎麼說'},
        {key: 2, link: '#cyberbully', title: '什麼是網路霸凌'},
        {key: 3, link: '#role', title: '不同角色該怎麼應對'},
        {key: 4, link: '#instagram', title: 'IG 故事人物介紹'}
      ],
      sidebar_open: false,
      sidebar_close: true,
      //open: hb.open,
    }
  },
  methods: {
    pop: function () {
      if (this.close) {
        this.open = true;
        this.close = false;
        this.cross = true;
        this.bar = false;
      } else {
        this.open = false;
        this.close = true;
        this.cross = false;
        this.bar = true;
      }
    },
    closesidebar: function () {
      if (this.open) {
        this.sidebar_open = false;
        this.sidebar_close = true;
        this.open = false;
        this.close = true;
        this.cross = false;
        this.bar = true;
      }
    }
  },
  watch: {
    open: function () {
      if (this.open) {
        this.sidebar_close = false;
        this.sidebar_open = true;
        this.open = true;
      }
    },
    close: function () {
      if (this.close) {
        this.sidebar_close = true;
        this.sidebar_open = false;
        this.open = false;
      }
    }
  }
}
</script>

<style>
  /* background */
  
  .star {
    background-image: url('./assets/star.svg');
    background-color: #050511;
  }
  
  /* hamburger bar */

  .menu-toggle {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    color: rgb(1, 51, 83);
    background: transparent;
    line-height: 50px;
    z-index: 99;
    margin-top: 10px;
    margin-left: 10px;
  }

  .hamburgerBar {
    cursor: pointer;
    padding: 10px 15px 10px 15px;
    background-color: #707070;
  }

  a:not([href]) {
    text-decoration: none;
  }
  
  /* side bar */
  #sidebar-wrapper {
    position: fixed;
    z-index: 5;
    top: 0;
    width: 250px;
    height: 100%;
    -webkit-transition: all .4s ease 0s;
    transition: all .4s ease 0s;
    -webkit-transform: translateX(250px);
    transform: translateX(250px);
    background: #FFFFFF;
  }

  .open {
    left: -250px;
  }

  .close {
    left: -500px;
  }

  .sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none
  }

  .sidebar-nav li.sidebar-nav-item a {
    display: block;
    text-decoration: none;
    color: #999999;
    padding: 8px 8px 8px 20px;
  }

  .sidebar-nav li a:hover {
    text-decoration: none;
    color: #666666;
    background: #AFBFBC;
    opacity: 0.8;
  }

  .sidebar-nav li a, .sidebar-nav li a:focus {
    text-decoration: none
  }

  .sidebar-nav > .sidebar-brand {
    font-size: 1.1rem;
    height: 90px;
    line-height: 60px;
    padding: 10.5px 0px 1px 20px;
    margin-top: 65px;
  }

  .sidebar-nav > .sidebar-brand a {
    color: #999999;
    font-weight: bold;
  }

  .sidebar-nav > .sidebar-brand a:hover {
    color: #666666;
    background: 0 0
  }
  
</style>
