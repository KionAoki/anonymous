<template>
  <div class="menu-toggle" id="hamburger" v-on:click="pop">
    <a class="hamburgerBar" style="color: white;">
      <i :class="{'fas fa-bars': bar, 'fas fa-times': cross,'fa-sm': size}"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    data: function () {
      return {
        open: false,
        close: true,
        bar: true,
        cross: false,
        size: true
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
      }
    },
    watch: {
      open: function () {
        if (this.open) {
          //landingpage.sidebar_close = false;
          //landingpage.sidebar_open = true;
          //landingpage.open = true;
        }
      },
      close: function () {
        if (this.close) {
          //landingpage.sidebar_close = true;
          //landingpage.sidebar_open = false;
          //landingpage.open = false;
        }
      }
    }
  }
</script>

<style>
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
</style>