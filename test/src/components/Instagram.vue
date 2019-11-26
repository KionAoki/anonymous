<template>
  <div id='instagram' class="gray">
    <div>
      <page-title title="IG 故事人物介紹"></page-title>
    </div>
      <div class="center">
        <Paragraph v-for="text in wedge" :key="text.key" :title="text.title" :content="text.content"
                   :img="text.img" :comment="text.comment" :chart="text.chart"/>
      </div>
    <div>
      <div id="character">
        <div v-show="desktop">
          <img :src="draw" alt="character"
               @click="draw_click">
          <img :src="clair" alt="character"
               @click="clair_click">
          <img :src="bunny" alt="character"
               @click="bunny_click">
        </div>
        <div id="mobileCharacter" v-show="mobile">
          <a href="https://www.instagram.com/draw_r.b/">
            <img src="../assets/hong_l.svg" alt="mobileCharacter">
          </a>
          <a href="https://www.instagram.com/clair0324/">
            <img src="../assets/xu_l.svg" alt="mobileCharacter">
          </a>
          <a href="https://www.instagram.com/bunny_love_herself/">
            <img src="../assets/xuan_l.svg" alt="mobileCharacter">
          </a>
        </div>
      </div>
      <div class="center">
        <div class="wrapper">
          <div class="qrcode-title">
            <h2>「你...可以拯救要自殺的 ta 嗎？」</h2>
          </div>
          <div class="start">
            <a href="https://www.instagram.com/student_hate.u/">
              <p>開始遊戲</p>
            </a>
            <a href="https://www.instagram.com/student_hate.u/">
              <img src='../assets/QRcord.png' alt='QRcode'/>
            </a>
          </div>
        </div>
      </div>
      <div>
        <picture>
          <source media="(max-width: 735px)" srcset="../assets/bgp-07.jpg">
          <img src="../assets/bg-04.jpg" alt="ending-image">
        </picture>
      </div>
    </div>
  </div>
</template>
<script>
  import PageTitle from './PageTitle'
  import Paragraph from './Paragraph'

  var wedge = [
    {
      key: 'ba',
      title: '',
      content: '世新資傳的系聚辦在2019年9月14號。<br/>' +
        '那晚杯觥交錯、喧鬧聲四起，人人都迷醉在最後一年的青春裡。<br/>' +
        '<br/>' +
        '如果說青春是放聲歡笑的一群人，愛是驟然走近的兩個人。<br/>' +
        '那麼生命，便是飽受悲傷絕望的一個人。<br/>' +
        '<br/>' +
        '看過多少冷暖、歷經幾番波折。<br/>' +
        '<br/>' +
        '我們是活下來了，<br/>' +
        '但，不是活著。',
      img: '',
      comment: '',
      chart: ''
    }
  ];
  
  export default {
    name: 'Instagram',
    components: {
      PageTitle,
      Paragraph
    },
    data: function () {
      return {
        wedge : wedge,
        // character
        draw: './contentImg/hong_l.svg',
        clair: './contentImg/xu_s.svg',
        bunny: './contentImg/xuan_s.svg',
        desktop: false,
        mobile:true
      }
    },
    beforeCreate() {
      window.addEventListener('load',() => {
        if(document.documentElement.clientWidth > 735){
          this.desktop = true;
          this.mobile = false;
        }
      })
      window.addEventListener('resize',() => {
        if(document.documentElement.clientWidth > 735){
          this.desktop = true;
          this.mobile = false;
        }
        if(document.documentElement.clientWidth < 735){
          this.desktop = false;
          this.mobile = true;
        }
      })
    },
    methods: {
      draw_click: function () {
        this.draw = './contentImg/hong_l.svg';
        this.clair = './contentImg/xu_s.svg';
        this.bunny = './contentImg/xuan_s.svg';
      },
      clair_click: function () {
        this.draw = './contentImg/hong_s.svg';
        this.clair = './contentImg/xu_l.svg';
        this.bunny = './contentImg/xuan_s.svg';
      },
      bunny_click: function () {
        this.draw = './contentImg/hong_s.svg';
        this.clair = './contentImg/xu_s.svg';
        this.bunny = './contentImg/xuan_l.svg';
      }
    }
  }

</script>
<style>
  
  .gray {
    background-image: url('../assets/star.svg'), linear-gradient(#050511 0%, #BDCCD4 15%, #FFF9EC 60%);
  }
  
  /* text */

/*
  #instagram h3{
    color: #11283A;
  }
*/

  #instagram p {
    color: #4D4D4D;
  }

  .qrcode-title > h2 {
    color: #050511;
  }

  /* character */

  #character{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }

  [alt="character"]{
    cursor: pointer;
    height: 80vh;
  }

  /* background image */

  [alt="ending-image"]{
    width: 100%;
  }

  /* QRcord */

  .qrcode-title {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  .start {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .start img {
    padding-left: 34px;
    border-left: #003955 solid 1px;
  }

  .start p {
    display: flex;
    align-items: center;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    padding: 55px 10px 10px 10px;
    letter-spacing: 2em;
    font-size: 24px;
    color: #003955;
  }

  .start a {
    text-decoration: none;
  }

  .start p:hover {
    color: #6D6F75 !important;
  }

  @media only screen and (min-width: 736px) and (max-width: 1024px) {
    #character{
      margin-top: 0px;
    }
    [alt="character"] {
      height: 35vh;
    }
    #instagram .center .wrapper {
      padding: 0px 0px 60px 0px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 735px) {
    #character{
      margin-top: 0px;
    }
    #mobileCharacter{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    [alt="mobileCharacter"]{
      width: 90vw;
      margin-bottom: 20px;
    }
    #instagram .center .wrapper {
      padding: 0px 0px 60px 0px;
    }
    .qrcode-title > h2{
      font-size: 17px;
      text-align: center;
    }
    .start img{
      width: 100%;
      padding-left: 20px;
    }
    .start p{
      letter-spacing: 1.5em;
      font-size: 20px;
      margin-left: 0px;
      padding: 55px 10px 10px 0px;
    }
  }

</style>