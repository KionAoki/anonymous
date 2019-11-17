<template>
  <div class="wrapper footer">
    <div id="share">
      <div>
        <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="link footer-center">
        <div v-for="value in items" :key="value.key">
          <a :href="value.link" target="_blank">
            <img :src="value.image" :alt="value.alt">
          </a>
        </div>
      </div>
    </div>
    <div id="credit">
      <div>
        <p>製作團隊</p>
      </div>
      <div v-for="value in team" :key="value.key" class="footer-center">
        <div><p>{{value.work}}</p></div>
        <div><p>|</p></div>
        <div><p>{{value.name}}</p></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'shareCredit',
    data: function () {
      return {
        items: [
          {
            key: 'ca',
            link: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwhoisback.github.io%2Fanonymous%2F&amp;src=sdkpreparse',
            image: './share_nav_fb.svg',
            alt: 'fb_share'
          },
          {
            key: 'cb',
            link: 'https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fwhoisback.github.io%2Fanonymous%2F',
            image: './share_nav_line.svg',
            alt: 'line_share'
          }
        ],
        team: [
          {key: 'cc', work: '數據、文字整理', name: 'Seo Joo Kim'},
          {key: 'cd', work: '設計', name: 'Chew Hui Jing'},
          {key: 'ce', work: '工程', name: 'Kion'},
          {ikeyd: 'cf', work: '遊戲設計', name: 'Sora ☆'}
        ]
      }
    }
  }
</script>
<style>
  footer {
    background-color: #FFF9EC;
  }
  /* footer */

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #share {
    display: flex;
    flex-direction: column;
    margin-right: 200px;
  }

  .link {
    display: flex;
    flex-direction: row;
    padding: 20px 0px 0px 10px;
  }

  footer p {
    color: black;
  }

  .footer-center {
    display: flex;
    align-items: center;
  }

  /* Add space between footer's content */

  .footer-center div:first-child {
    padding-right: 30px;
  }

  .footer-center div:last-child {
    padding-left: 30px;
  }

  #share a:last-child {
    padding-left: 30px;
  }
</style>