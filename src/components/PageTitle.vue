<template>
  <div class="title-wrapper">
    <div class="line"></div>
    <div class="page-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
  export default {
    name: 'PageTitle',
    props: ['title']
  }
</script>
<style>
  .title-wrapper {
    display: flex;
    padding: 40px 0px 40px 0px;
    align-items: center;
  }
  
  .page-title {
    display: flex;
    justify-content: center;
    width: 40%;
  }
  
  .line {
    display: flex;
    border-top: #FFFFFF solid 2px;
    width: 30%;
  }
</style>