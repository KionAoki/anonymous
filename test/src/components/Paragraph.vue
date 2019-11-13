<template>
  <div class="wrapper-content">
    <div class="block-content">
      <h3>{{title}}</h3>
    </div>
    <div class="block-content">
      <p v-html="content"></p>
    </div>
    <div class="block-content image-content">
      <div v-html="img"></div>
      <div>
        <p>{{comment}}</p>
      </div>
    </div>
    <div class="block-content" v-html="chart"></div>
  </div>
</template>
<script>
  export default {
    name: 'Paragraph',
    props: ['key', 'content', 'title', 'img', 'comment', 'chart']
  }
</script>
<style>
  .image-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .block-content h3 {
    display: flex;
    justify-content: center;
  }

  /* underline */

  b{
    border-bottom:2px #F1C320 solid;
  }
</style>