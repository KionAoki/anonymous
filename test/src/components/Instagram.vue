<template>
  <div id='instagram' class="gray">
    <div>
      <page-title title="IG 故事人物介紹"></page-title>
    </div>
    <div>
      <div id="character">
        <img :src="draw" alt="character"
             @click="draw_click">
        <img :src="clair" alt="character"
             @click="clair_click">
        <img :src="bunny" alt="character"
             @click="bunny_click">
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
        <img src="../assets/bg-04.jpg" alt="ending-image">
      </div>
    </div>
  </div>
</template>
<script>
  import PageTitle from './PageTitle'
  
  export default {
    name: 'Instagram',
    components: {
      PageTitle
    },
    data: function () {
      return {
        // character
        draw: './hong_l.svg',
        clair: './xu_s.svg',
        bunny: './xuan_s.svg'
      }
    },
    methods: {
      draw_click: function () {
        this.draw = './hong_l.svg';
        this.clair = './xu_s.svg';
        this.bunny = './xuan_s.svg';
      },
      clair_click: function () {
        this.draw = './hong_s.svg';
        this.clair = './xu_l.svg';
        this.bunny = './xuan_s.svg';
      },
      bunny_click: function () {
        this.draw = './hong_s.svg';
        this.clair = './xu_s.svg';
        this.bunny = './xuan_l.svg';
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

</style>