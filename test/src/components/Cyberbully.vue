<template>
  <div id="cyberbully">
    <PageTitle title="什麼是網絡霸凌？" class="star"></PageTitle>
    <img src="../assets/bg-01.jpg" alt="scroll_1" :class="{'bye': bye1}">
    <div class="empty"></div>
    <div class="star" id="scroll_1">
      <div class="planet3">
        <div class="center shallow">
          <div class="inner">
            <div>
              <Paragraph v-for="text in posts" :key="text.key" :title="text.title" :content="text.content"
                         :img="text.img" :comment="text.comment" :chart="text.chart"></Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/bg-02.jpg" alt="scroll_2" :class="{'bye': bye2}">
    <div class="empty"></div>
    <div class="star" id="scroll_2">
      <div class="planet6">
        <div class="planet7">
          <div class="center shallow">
            <div class="inner">
              <div>
                <Paragraph v-for="text in posts_2" :key="text.key" :title="text.title" :content="text.content"
                           :img="text.img" :comment="text.comment" :chart="text.chart"></Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/bg-03.jpg" alt="scroll_3" :class="{'bye': bye3}">
    <div class="empty"></div>
  </div>
</template>
<script>
  import PageTitle from './PageTitle'
  import Paragraph from './Paragraph'

  var cyberbully_posts = [
    {
      key: '1',
      title: '網路霸凌的定義及概念',
      content: '談論網路霸凌前，需要了解什麼樣的行為才能算「網路霸凌」，這種隨著網路一同誕生的霸凌行為究竟與傳統霸凌有什麼區別呢？<br/>' +
        '只有釐清這些概念後，才能更好的理解網路霸凌相關行為及造成的影響傷害。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: '2',
      title: '',
      content: '網路霸凌定義：<br/>' +
        '<br/>' +
        '<b>網絡霸凌 (Cyberbullying) 是霸凌行為的一種。</b> 網路霸凌的場合是手機，電腦和平板等電子產品；其發生可以通過SMS，簡訊和應用程序進行，' +
        '也可以在社交媒體，論壇或遊戲中進行，人們可以在上述介質中查看，參與或共享內容。<br/>' +
        '<b>網絡霸凌行為包括發送，發布或共享有關他人的負面，有害，虛假等負面內容；也可以是共享有關他人之隱私信息，從而導致當事人感到尷尬或屈辱。</b>',
      img: '<img src="./contentImg/bully_procedure.svg" alt="bully procedure">',
      comment: '圖一：網路霸凌示意圖',
      chart: ''
    },
    {
      key: '3',
      title: '',
      content: '網路霸凌與傳統霸凌相比，有什麼不同：' +
        '<ol><li><b>因為網路匿名性而不知道誰是霸凌者，或為什麼將自己作為目標</b><br/>' +
        '根據一份對全台地區網路使用者的調查顯示：六成網路霸凌受害者不知道加害對象的身份（廖國良，2012）。' +
        '此外，四成的網路霸凌受害者甚至不明白為何對方要霸凌自己（謝意苹，2013）。</li>' +
        '<li><b>網絡霸凌不會受制時間與空間</b><br/>' +
        '傳統校園霸凌的時間與空閒往往是有特定性，例如被霸凌者回到家就不會繼續受到傷害；可網路霸凌是可以隨時隨地進行，' +
        '哪怕被霸凌者回到家、關閉手機電腦，也不能停止相關資訊在網路上流傳。還有就是在網路上，霸凌者由於無法看到霸凌者，' +
        '更有可能採取惡毒語言或是殘酷手段。</li>' +
        '<li><b>凡走過必留痕跡，很難完全清除被霸凌遭遇</b><br/>' +
        '網路大大提高了傳播速度，很多內容被快速複製保存；傳統霸凌內容大多停留在當事人記憶，無關人員不太容易獲取內容。' +
        '網路霸凌只需要一個關鍵字就可以找出當時的霸凌現場，相關截圖錄屏讓事件更容易被轉發。</li>' +
        '<li><b>父母和監護人很難管理網絡霸凌</b><br/>' +
        '網路匿名性無法隨意去調閱 IP  位址，當父母與監護人發現自家小孩遭遇網絡霸凌時很難有效去制止霸凌行為。</li></ol>',
      img: '',
      comment: '',
      chart: ''
    }
  ];

  var cyberbully_posts_2 = [
    {
      key: '4',
      title: '被低估的網路霸凌數據',
      content: '相信你早就知道，網路霸凌早已不是什麼新興議題，時不時新聞中的高中生墜樓事件或某某明星自殺都把一切源頭指向了網路霸凌。' +
        '網路霸凌似乎變成了一把鋒利的刀刃，甚至乎輕易就去貫穿了他人的生命；並且似乎也沒有一個可行有效的方案來解決，' +
        '難道只能任由其肆虐在我們的生活之中嗎？',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: '5',
      title: '',
      content: '其實從某個角度上來說，是的。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: '6',
      title: '',
      content: '來看看當下台灣的網路霸凌的情形：<br/>' +
        '<br/>' +
        '19.6% 的人有被網路霸凌的經驗，10% 的人有網路霸凌別人的經驗，而有 <b>54.7% 的網路霸凌旁觀者</b> 知道有人被網路霸凌。' +
        '(廖國良、黃正魁、張仁俊、劉籹君，2012)。<br/>',
      img: '',
      comment: '',
      chart: '<div id="mountNode"></div>'
    },
    {
      key: '7',
      title: '',
      content: '然而，據調查，只有 <b>18% 的未成年人會選擇告訴身邊成年人</b> 自己遭遇了網路霸凌',
      img: '',
      comment: '',
      chart: '<div id="pieChart"></div>'
    },
    {
      key: '8',
      title: '',
      content: '因為面對網路霸凌時選擇沈默的大多數人，並不是生性懦弱或不善溝通，而是' +
        ' <b>有時候發聲可能會遭受更加嚴重的霸凌，甚至「告密者」也會一同被霸凌。</b> ' +
        '當霸凌事件發生後如果校方處理不當，那麼隨即而來的報復行為比霸凌本身還要慘烈許多，與其這樣不如一開始就選擇沈默，興許忍一忍就過去了。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: '9',
      title: '',
      content: '所以對於「 19.6% 的人有被網路霸凌的經驗」的數據不經打了一個問號，因為還有多少人選擇沈默而未通報的網路霸凌事件沒有被我們看到？' +
        '在被低估的背後實際數據也許更令人觸目驚心。',
      img: '',
      comment: '',
      chart: ''
    }
  ];


  export default {
    name: 'Cyberbully',
    components: {
      PageTitle,
      Paragraph
    },
    data: function () {
      return {
        posts: cyberbully_posts,
        posts_2: cyberbully_posts_2,
        // parallax scrolling z-index
        bye1: false,
        bye2: false,
        bye3: false,
      }
    },
    mounted() {
      window.addEventListener('scroll',() => {
        var current = document.documentElement.scrollTop;
        var scroll1 = document.getElementById('scroll_1').offsetTop;
        var scroll2 = document.getElementById('scroll_2').offsetTop;
        var role = document.getElementById('role').offsetTop;
        var story = document.getElementById('story').offsetTop + document.getElementById('story').offsetHeight;

        // parallax scrolling

        if (story > current) {
          this.bye1 = true;
        } else {
          this.bye1 = false;
        }
        if (current > scroll1) {
          this.bye1 = true;
        } else {
          this.bye1 = false;
        }
        if (current > scroll2) {
          this.bye2 = true;
        } else {
          this.bye2 = false;
        }
        if (current > role) {
          this.bye3 = true;
        } else {
          this.bye3 = false;
        }
      }, {passive: true});
    }
  }
</script>
<style>
  /* planet */
  
  .planet3 {
    background-image: url(../assets/planet3.svg);
    background-position: top 10% right 0%;
    background-repeat: no-repeat;
    background-size: 20%;
  }
  
  .planet6 {
    background-image: url(../assets/planet6.svg);
    background-position: top 3% right 0%;
    background-repeat: no-repeat;
    background-size: 40%;
  }
  
  .planet7 {
    background-image: url(../assets/planet7.svg);
    background-position: 0% 20%;
    background-repeat: no-repeat;
    background-size: 20%;
  }
  
  /* paragraph image */
  
  [alt="bully procedure"] {
    height: 300px;
  }

  @media only screen and (min-width: 736px) and (max-width: 1024px) {
    [alt="bully procedure"] {
      height: 200px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 735px) {}
</style>