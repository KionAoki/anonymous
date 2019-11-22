<template>
  <div id="introduction" class="star">
    <div class="planet1">
      <div class="planet5">
        <div class="wrapper">
          <div class="center shallow">
            <div class="inner">
              <div>
                <Paragraph v-for="text in introduction" :key="text.key" :title="text.title" :content="text.content"
                           :img="text.img" :comment="text.comment" :chart="text.chart"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Paragraph from './Paragraph.vue'

  var introduction = [
    {
      key: '1',
      title: '',
      content: '據統計台灣 <b>高達 7 成未成年人</b> 有在網上目睹或是自身遭遇受害的經驗，但他們中 <b>只有不到 2 成的未成年人</b> 選擇告訴父母有關網路霸凌的遭遇。' +
        '並且與十年前相比，網路霸凌發生的頻率直接翻倍，在這樣的背景下我們訪問了三位網路霸凌受害者，想聽聽網路霸凌是如何改變他們的......',
      img: '',
      comment: '',
      chart: ''
    }
  ];

  export default {
    name: 'introduction',
    components: {
      Paragraph
    },
    data: function () {
      return {
        introduction: introduction
      }
    }
  }
</script>
<style>
  #introduction {
    padding-bottom: 110px;
  }

  #introduction p:first-letter {
    font-size: 2em;
    padding: 0.1em;
    vertical-align: middle;
  }
  
  .planet1{
    background-image: url('../assets/planet1.svg');
    background-position: -25% 0%;
    background-repeat: no-repeat;
    background-size: 30%;
  }
  
  .planet5{
    background-image: url(../assets/planet5.svg);
    background-position: 10% 100%;
    background-repeat: no-repeat;
    background-size: 20%;
    padding-bottom: 100px;
  }
  
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    #introduction {
      padding-bottom: 0px;
    }
    .planet5 {
      padding-bottom: 0px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 735px) {
    .planet5{
      background-position: 10% 103%;
    }
  }
</style>