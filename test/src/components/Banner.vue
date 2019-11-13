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

</style>
