<template>
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
</template>
<script>
  export default {
    name: 'SideBar',
    data: function () {
      return {
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
      closesidebar: function () {
        if (this.open) {
          this.sidebar_open = false;
          this.sidebar_close = true;
          //hb.open = false;
          //hb.close = true;
          //hb.cross = false;
          //hb.bar = true;
        }
      }
    }
  }
</script>
<style>
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