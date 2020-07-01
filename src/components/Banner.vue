<template>
  <div id="banner">
    <div class="web-title">
      <h1><b>致受害者的你我</b></h1>
      <h2><b>網路霸凌是如何傷害我們的？</b></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #banner {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url('../assets/banner-01.jpg');
    background-color: #050511;
    min-height: 110vh;
    background-size: 100vw;
    background-repeat: no-repeat;
  }
  
  .web-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 150px;
  }

  /* underline */

  h1 b{
    border-bottom:0px #F1C320 solid;
  }

  h2 b{
    border-bottom:0px #F1C320 solid;
  }

  @media only screen and (min-width: 736px) and (max-width: 1024px) {
    #banner{
      min-height: 50vh;
      justify-content: center;
      align-items: flex-end;
      background-image: url('../assets/banner-01.jpg');
    }
    .web-title {
      align-items: center;
      margin-right: 0px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 735px) {
    #banner{
      min-height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-image: url('../assets/banner-09.jpg');
    }
    .web-title {
      align-items: center;
      margin-right: 0px;
      margin-top: 20%;
    }
  }

</style>
