<template>
  <div id="role">
    <!-- suggestion bar -->
    <nav id="suggestion-bar" v-show="show">
      <ul>
        <li @click="bystander" class="pending" :class="{'tab': tab_4}">
          <a href="#option">
            <img src="../assets/bystander_small.png" alt="bystander-suggestion">
          </a>
        </li>
        <li @click="victim" class="pending" :class="{'tab': tab_5}">
          <a href="#option">
            <img src="../assets/victim_small.png" alt="victim-suggestion">
          </a>
        </li>
        <li @click="bully" class="pending" :class="{'tab': tab_6}">
          <a href="#option">
            <img src="../assets/bully_small.png" alt="bully-suggestion">
          </a>
        </li>
      </ul>
    </nav>
    <PageTitle title="霸凌事件中的不同角色該怎麼做？" class="star" id="role_title"></PageTitle>
    <div class="planet4">
      <div class="planet2">
        <div class="star">
          <div class="center shallow">
            <div class="inner">
              <div id="start">
                <Paragraph v-for="text in posts_3" :key="text.key" :title="text.title" :content="text.content"
                           :img="text.img" :comment="text.comment" :chart="text.chart"></Paragraph>
              </div>
              <div id="suggestion">
                <div id="option" class="option-center option">
                  <div class="button-center">
                    <div class="pending" :class="{'tab': tab_4}">
                      <button @click="bystander"><img src="../assets/bystander.png" alt="role_1"></button>
                    </div>
                    <p>旁觀者</p>
                  </div>
                  <div class="button-center">
                    <div class="pending" :class="{'tab': tab_5}">
                      <button @click="victim"><img src="../assets/victim.png" alt="role_2"></button>
                    </div>
                    <p>被霸凌者</p>
                  </div>
                  <div class="button-center">
                    <div class="pending" :class="{'tab': tab_6}">
                      <button @click="bully"><img src="../assets/bully.png" alt="role_3"></button>
                    </div>
                    <p>霸凌者</p>
                  </div>
                </div>
                <div class="role">
                  <div class="role-inner-line">
                    <Paragraph v-show="ok1" v-for="text in role1" :key="text.key" :title="text.title"
                               :content="text.content"
                               :img="text.img" :comment="text.comment" :chart="text.chart"></Paragraph>
                    <Paragraph v-show="ok2" v-for="text in role2" :key="text.key" :title="text.title"
                               :content="text.content"
                               :img="text.img" :comment="text.comment" :chart="text.chart"></Paragraph>
                    <Paragraph v-show="ok3" v-for="text in role3" :key="text.key" :title="text.title"
                               :content="text.content"
                               :img="text.img" :comment="text.comment" :chart="text.chart"></Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/bg-08.jpg" alt="scroll_4">
    <div class="empty" id="scroll_4"></div>
  </div>
</template>
<script>
  
  import PageTitle from './PageTitle'
  import Paragraph from './Paragraph'
  

  var role_post = [
    {
      key: 'a',
      title: '除懷抱勇氣之外，我們該如何去改變？',
      content: '對於旁觀者、被霸凌者、霸凌者三方角色之間，在遭遇網路霸凌時會採取完全不同的行動；雖然現實殘酷無力，' +
        '但有時或許小小的努力或改變便可通往完全不同的結局：',
      img: '',
      comment: '',
      chart: ''
    }
  ];

  var story_1 = [
    {
      key: 'b',
      title: '',
      content: '',
      img: '<img src="./contentImg/bully2-01.svg" alt="cyberbully">',
      comment: '',
      chart: ''
    },
    {
      key: 'c',
      title: '先有意識，後有行動',
      content: '我們每一個人都是他人生活的旁觀者，那麼作為網路霸凌的旁觀者，其實首要任務並不是去制止霸凌行為去為被霸凌者伸張正義；' +
        '而是 <b>了解、再分辨出哪些是生活中有關網路霸凌的行為</b>。<br/>' +
        '<br/>' +
        '根據 2016 - 2019 年網絡欺凌的事實和統計數據 (Sam Cook,2019) 報告指出，全球範圍內的受訪者對網路霸凌認知差距懸殊：',
      img: '',
      comment: '',
      chart: '<div id="cognition"></div>'
    },
    {
      key: 'd',
      title: '',
      content: '另，下表為家長通報自家孩子為網路霸凌受害者之相關統計：\n',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'e',
      title: '',
      content: '',
      img: '',
      comment: '',
      chart: '<div id="lineChart"></div>'
    },
    {
      key: 'f',
      title: '',
      content: '<b>其中南韓在 2018 年有 13 起通報，日本僅有 5 起。</b>',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'g',
      title: '各國當前對於網路霸凌的因應之道',
      content: '<b>美國幾乎各州（除 Alaska 及 Wisconsin 外）都制定了針對網路霸凌的專法和學校營運政策</b> ；' +
        '並且 <b>也有許多官方組織</b> ，例如： Cyberbullying Research Center、PACER等，這些組織提供了大量有關網路霸凌的研究及相關統計。<br/>' +
        '其中本篇文章就使用了<a href="https://cyberbullying.org/bullying-laws"> Cyberbullying Research Center </a>關於美國各州霸凌法包含網路霸凌之內容統計數據：\n',
      img: '',
      comment: '',
      chart: '<div id="usa"><div id="tooltip"></div>' +
        '<svg id="statesvg" width="960" height="600"\n' +
        '     viewBox="0 0 960 600"  preserveAspectRatio="xMidYMid"></svg></div>'
    },
    {
      key: 'h',
      title: '',
      content: '再來看看英國，雖然 <b>英國法律中並沒有「網路霸凌」一詞相關概念，也並無網路霸凌專法(Cybersmile)</b> 。<br/>' +
        '但 <b>許多民間團體、基金會</b>經過多年不斷努力，除幫助了許多遭受網絡霸凌困擾的人外，也提供了許多寶貴的網路霸凌數據。<br/>' +
        '<a href="https://www.bullying.co.uk/cyberbullying/">Bullying </a> UK是一間英國的NGO，' +
        '該組織可以 <b>為父母或孩子提供心理諮商上的免費幫助</b>，並且也會定期舉辦相關教育課程講座或出版期刊。\n<br/>' +
        '<a href="http://ditchthelabel.org">Ditch the Label </a> 作為一家數位慈善機構，' +
        '<b>通過網頁及社群不斷幫助12-25歲孩童或年輕人克服霸凌遭遇</b> ，其發布的網路霸凌年度報告更是詳細統計了英國網路霸凌現況及趨勢。\n',
      img: '<img src="./contentImg/ditchthelabel.jpg" alt="Ditch the Label">',
      comment: 'Ditch the Label官網截圖 來源 https://www.ditchthelabel.org/',
      chart: ''
    },
    {
      key: 'i',
      title: '',
      content: '<b>反霸凌法(Anti-Bullying Law)是阻止霸凌行為的重要武器之一</b> ，但可惜的是 <b>並不是每個國家都有制定相關法律</b> ，' +
        '像 <b>台灣目前並沒有針對網路霸凌的專法</b>，如果當事人想要走法律途徑，只能以公然侮辱罪、誹謗罪這樣的擦邊球名義加以控告。\n',
      img: '<img src="./contentImg/chat2-01.svg" alt="law">',
      comment: '資料來源：自行整理',
      chart: ''
    },
    {
      key: 'j',
      title: '',
      content: '那到底如何去做出改變呢？<br>' +
        '一個人的力量既渺小又微不足道，但是此刻使用電腦的我們不是鍵盤俠，而是打算用鍵盤做一些更厲害的事情，萬一就積沙成塔把那高牆給推翻了呢：',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'k',
      title: '',
      content: '這是<a href="https://join.gov.tw/index">台灣公共政策網路參與平台</a>，進入註冊會員即可提出點子參與政策計畫，' +
        '在這裡可以提出關於設立網路霸凌專法的訴求，去幫助那些正在飽受網路霸凌之苦的受害人，讓他們可以使用法律來保護自己不遭受欺凌。',
      img: '',
      comment: '',
      chart: ''
    }
  ];

  var story_2 = [
    {
      key: 'l',
      title: '',
      content: '',
      img: '<img src="./contentImg/bully3-01.svg" alt="cyberbully">',
      comment: '',
      chart: ''
    },
    {
      key: 'm',
      title: '',
      content: '這裡想起一句話：「你永遠不知道，明天和意外哪一個先來？」<br/>' +
        '也許網路霸凌就這麼橫空當在了生活之中，無關對錯只是將日子變得進退兩難。但不管處境何如艱難，希望依舊可以保持清醒理智，去嘗試解決眼前困難，' +
        '本文蒐集整理出了一些建議來供參考：',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'n',
      title: '感受、理解、接受自己的一切情緒，存在即合理本就沒有錯對',
      content: '如果當你遭遇了霸凌，那麼其實不管是直面解決，還是選擇躲避都是沒有關係的， <b>世界上沒有一個研究或是 SOP 可以完美解決霸凌遭遇</b>。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'o',
      title: '',
      content: '在之前對被網路霸凌者的訪談中我們得知，每個人對於突如其來的變故都有不一樣的解決方式：<br/>' +
        '<ul class="list-no-decoration"><li>有人直面霸凌者選擇了回嗆</li>' +
        '<li>有人選擇了關閉一切通訊軟體</li>' +
        '<li>也有人選擇了尋求別人幫助來保護自己</li></ul>',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'p',
      title: '',
      content:
        '他們都有各自的理由，但當問到 「如果現在可以對正在遭受網路霸凌的人說點什麼，你想傳達的是？」<br/>' +
        '他們大多都表達了：<b>「比起別人的看法意見，自己的心情想法才是真正重要的。」</b><br/>' +
        '<br/>' +
        '也就是說，不管是霸凌者的傷害或是身邊人的建議， <b>首先應該傾聽自己的內心，直面或逃避都沒關係，只要自己可以獲得快樂和平靜，就是最好的解決方法</b> 。<br/>' +
        '並且要明白 <b>「霸凌不會促進成長，拯救自己的過程才是成長的一部分。」</b>',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'q',
      title: '你沒有錯，要愛自己',
      content: '當被人貶低遭受傷害時，許多人第一想法可能檢討自己「也許是我做錯了什麼？才會被圍攻吧。」<br/>' +
        '首先要摒棄這個想法，因為 <b>在檢討自己前需要認識到自己是受害者，是被傷害的那個人，傷害別人的行為才是錯誤的</b> 。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'r',
      title: '',
      content: '退一步來說，縱使許多被公審肉搜的人有錯在先（被網民認定的錯誤），那也需要 <b>通過正當司法程序進行調查、得出結論、做出判決，' +
        '而不是打著一個漂亮名號去動用私刑</b>。<br/>' +
        '這樣不叫替天行道，這只是一場沾血的網路狂歡；其中歡呼的人們不是什麼江湖好漢，只是想要有個正當理由去肆意渲洩的烏合之眾。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 's',
      title: '',
      content: '畢竟當關注點脫離了事實本身，而集中在判決、責罰上時，萬物都會開始失控；這時若責難自己，不僅無法看到事件全貌，而且只能讓自己愈發憂鬱。' +
        '所以還是多多愛惜自己吧，與自己和解才能去面對這個不合理的世界。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 't',
      title: '去拯救自己吧',
      content: '如果說世界上最愛你最了解你的人是誰，那一定是你自己。<br/>' +
        '他人無法百分百理解你此時內心的悲傷和無助，或許依靠他人的力量是一種選擇，但這也是基於自我求救的基礎上的行動。<br/>' +
        '在這裡為蒐集了一些資源可供參考：' +
        '<ul class="source">' +
        '   <li>在法律諮商方面<br/>' +
        '法務局、各區公所及戶政事務所有免費的義務律師提供法律諮詢，只需要去網頁或電話提前預約時間。<br/>' +
        '   <a href="https://wsdo.gov.taipei/cp.aspx?n=8C91A036C09515F6">文山區公所免費法律諮詢</a><br/>' +
        '   <a href="https://www.law.ntpc.gov.tw/home.jsp?id=5eed5cacfa562ac6">新北市政府法制局免費法律諮詢服務</a><br/>' +
        '   或是像臺大也有<a href="https://ntulegalservice.weebly.com/">法律服務社</a>提供民眾法律諮詢，' +
        '支持線上報名及現場候位</li>' +
        '<li>心理諮商方面<br/>' +
        '除了學校的諮商中心外，各區「健康中心」都有諮商駐點，其收費方式為：<br/>' +
        '健保（50 元） + 諮商費（200元）共計 250 元<br/>' +
        '，詳細介紹請參考官方網頁。<br/>' +
        '<a href="https://www.wshc.gov.taipei/News_Content.aspx?n=E175F07FB6C8C366&s=6D58DF7D601ECF2A">臺北市文山區社區心理諮商服務</a></li>' +
        '<li>心靈療傷方面<br/>' +
        '加入相關反網路霸凌的社團，去和相同遭遇的人傾訴。<br/>' +
        'FB社團 - <a href="https://www.facebook.com/080club/">網路霸凌防制組織</a>' +
        'FB社團 - <a href="https://www.facebook.com/StopBullying.Gov/">StopBullying.Gov</a></li>',
      img: '',
      comment: '',
      chart: ''
    }
  ];

  var story_3 = [
    {
      key: 'u',
      title: '',
      content: '',
      img: '<img src="./contentImg/bully1-01.svg" alt="cyberbully">',
      comment: '',
      chart: ''
    },
    {
      key: 'v',
      title: '',
      content: '人的一生不可能不犯錯誤，雖然有時的無心之失給旁人造成了極大的傷害。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'w',
      title: '',
      content: '但畢竟「知錯能改，善莫大焉」',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'x',
      title: '',
      content: '也或許在剛剛了解完網路霸凌的定義後就想起了某個人、某個玩笑或是某句曾經說過的傷人話；這些事情就在某個時間忽然出現在腦海中，' +
        '雖不是切膚之痛但總歸如同睫毛掉進眼睛裏那般令人不適。甚至不住在想如果可以重來的話，或許會選擇更加溫和成熟的方式去處理，但當日傷害造成了便是無法挽回：',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'y',
      title: '',
      content: '有 <b>64% 的被網路霸凌者表示霸凌事件影響了他們的學習能力和在學校的安全感；並且患有頭痛或胃病的可能性是其他學生的兩倍</b> 。' +
        '被網路霸凌者除了要應付霸凌事件本身，還要面對這一系列負面的身體變化，這樣也導致了他們比其他人更沒有安全感及感到焦慮。<br/>' +
        '另外根據 <a href="https://www.ditchthelabel.org/wp-content/uploads/2017/07/The-Annual-Bullying-Survey-2017-1.pdf">Ditch the Label 2017</a> ' +
        '的調查報告中顯示，網路霸凌所造成的影響前三名分別是：<br/>' +
        '社交焦慮的增加（41%）、失望感的增加（37%）、有過自殺念頭（26%）以及刪除社群帳號（26%）。',
      img: '',
      comment: '',
      chart: '<div id="radialBar"></div>'
    },
    {
      key: 'z',
      title: '',
      content: '霸凌與自殺行為有很強的關聯性，但這種關係往往是由於其他因素所導致的，例如：憂鬱、暴力行為及濫用毒品 (Reed,Nugent,Cooper,2015) 。<br/>' +
        '並且美國疾控中心也指出曾遭受或參與過霸凌的學生，比其他未經歷霸凌的學生有更高的自殺相關行為。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'aa',
      title: '',
      content: '這些事件對於霸凌者來說也許就是多年後偶然想起的人生插曲，但 <b>對於被霸凌者來說，那些恐懼悲傷與不甘早已刻印在心中，此生都會背負其前行</b>。<br/>' +
        '所以不管是無心之過還是有意為之，你是可以去選擇減輕他們的內心負擔；畢竟，這份負擔本該屬於自己。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'ab',
      title: '',
      content: '不管擁有什麼理由，去傷害別人，把一個人漸漸推向黑暗都是一件悲傷的事情；對於正在遭受網路霸凌的人，所做之事應是即刻停止傷害，' +
        '而不是等悲劇發生後在自己限時動態上 po 文。',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'ac',
      title: '',
      content: '「當雪崩來臨時，沒有一片雪花是無辜的。」',
      img: '',
      comment: '',
      chart: ''
    },
    {
      key: 'ad',
      title: '',
      content: '畢竟，你很無辜、我也很無辜，大家都是無辜的<br/>' +
        '但我們的狂歡卻沾滿了鮮血。',
      img: '',
      comment: '',
      chart: ''
    }
  ];

  export default {
    name: 'Role',
    components: {
      PageTitle,
      Paragraph
    },
    data: function () {
      return {
        // role paragraph
        posts_3: role_post,
        // suggested bar
        show: false,
        // suggested section
        role1: story_1,
        role2: story_2,
        role3: story_3,
        ok1: true,
        ok2: false,
        ok3: false,
        tab_4: true,
        tab_5: false,
        tab_6: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        var current = document.documentElement.scrollTop;
        var suggestion = document.getElementById('role').offsetTop +
          document.getElementById('start').offsetHeight +
          document.getElementById('option').offsetHeight;
        var scroll4 = document.getElementById('scroll_4').offsetTop;

        if (current > suggestion) {
          this.show = true;
        } else {
          this.show = false;
        }
        if (current > scroll4) {
          this.show = false;
        }
      }, {passive: true})
    },
    methods: {
      loadScript: function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
      },
      bystander: function () {
        this.ok1 = true;
        this.ok2 = false;
        this.ok3 = false;
        this.tab_4 = true;
        this.tab_5 = false;
        this.tab_6 = false;
      },
      victim: function () {
        this.ok1 = false;
        this.ok2 = true;
        this.ok3 = false;
        this.tab_4 = false;
        this.tab_5 = true;
        this.tab_6 = false;
      },
      bully: function () {
        this.ok1 = false;
        this.ok2 = false;
        this.ok3 = true;
        this.tab_4 = false;
        this.tab_5 = false;
        this.tab_6 = true;
        var times = document.getElementById("radialBar").getElementsByTagName("div").length;
        if (times === 0) {
          this.loadScript('./chartJS/radiobar.js');
        }
      }
    }
  }

</script>
<style>
  /* planet */
  .planet4 {
    background-image: url(../assets/planet4.svg);
    background-position: top 35% right 0%;
    background-repeat: no-repeat;
    background-size: 30%;
  }
  
  .planet2 {
    background-image: url(../assets/planet2.svg);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 45%;
  }
  
  /* text */

  #role a {
    color: #9DDFF8;
  }
  
  /* suggestion bar */
  
  #suggestion-bar {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    z-index: 4;
    background-color: rgb(58, 65, 81, 0.7);
    width: 100%;
    top: 0;
  }
  
  #suggestion-bar ul {
    display: flex;
    list-style: none;
    margin: 15px 10px 15px 0px;
  }
  
  #suggestion-bar li {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  
  #suggestion-bar .pending {
    margin: 0px 10px 0px 10px;
  }
  
  #suggestion .option {
    margin-bottom: 0px;
  }
  
  #suggestion-bar a{
    display: flex;
    align-content: center;
    padding: 2px 0px 0px 2px;
  }
  
  /* title */
  #role_title .page-title {
    width: 60%;
  }
  
  #role_title .line {
    width: 20%;
  }
  
  /* option */

  #option button{
    display: flex;
    align-content: center;
    padding: 3.5px 1.5px 1px 3px;
  }
  
  /* list */
  
  .list-no-decoration, .source, ol {
    margin-top: 50px;
  }
  
  .list-no-decoration li, .source li, ol li {
    margin-top: 20px;
  }
  
  .list-no-decoration {
    list-style: none;
  }
  
  /* paragraph image */

  [alt="cyberbully"], [alt="law"] {
    height: 400px;
  }
  
  [alt="Ditch the Label"] {
    width: 100%;
  }
  
  /* chart */
  
  .g2-guide-html {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
    justify-content: center;
    text-align: center;
    line-height: 0.1
  }
  
  .g2-guide-html .title {
    font-size: 14px;
    color: #F2F2F2;
    font-weight: 300;
  }
  
  .g2-guide-html .value {
    font-size: 24px;
    color: #F2F2F2;
    font-weight: bold;
  }
  
  #cognition_2 {
    padding-bottom: 30px;
  }
  
  #lineChart .g2-legend {
    width: 250px;
    height: 100%;
    font-size: 14px;
    color: #F2F2F2;
  }
  
  #lineChart .g2-legend-title {
    color: #F2F2F2;
    font-size: 14px;
  }
  
  #lineChart .g2-legend-list {
    margin-top: 10px;
  }
  
  #lineChart .g2-legend-list-item {
    width: 100%;
    height: 30px;
    margin-bottom: 10px
  }
  
  #lineChart .legend-item-name {
    min-width: 60px;
    height: 100%;
    float: left;
    margin-left: 8px;
    font-size: 10px;
    color: #F2F2F2;
    text-align: left;
  }
  
  #lineChart .legend-item-name:after {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: '';
  }
  
  /* USA */
  #usa{
    display: flex;
    max-width: 100vw;
    position: relative;
  }
  
  #statesvg{
    display: flex;
    height: 600px;
    width: 960px;
    cursor: pointer;
  }

  .state{
    fill: none;
    stroke: #a9a9a9;
    stroke-width: 1;
  }
  .state:hover{
    fill-opacity:0.5;
  }
  #tooltip {
    position: absolute;
    text-align: center;
    padding: 20px;
    margin: 10px;
    font: 12px sans-serif;
    background: lightsteelblue;
    border: 1px;
    border-radius: 2px;
    pointer-events: none;
  }
  #tooltip h4{
    margin:0;
    font-size:14px;
  }
  #tooltip{
    background:rgba(256,256,256,0.9);
    border:1px solid lightsteelblue;
    border-radius:5px;
    font-size:12px;
    width:auto;
    padding:4px;
    color: #000000;
    opacity:0;
  }
  #tooltip table{
    table-layout:fixed;
  }
  #tooltip tr td{
    padding:0;
    margin:0;
  }
  #tooltip tr td:nth-child(1){
    width:150px;
    height: 50px;
  }
  #tooltip tr td:nth-child(2){
    text-align:center;
  }
  
  @media only screen and (min-width: 736px) and (max-width: 1024px) {
    [alt="cyberbully"], [alt="law"] {
      height: 300px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 735px) {}
  
</style>