<template>
  <div id="story" class="star">
    <PageTitle title="聽聽他們怎麼說"></PageTitle>
    <div class="wrapper">
      <div id="story_option" class="option-center option">
        <div class="pending" :class="{'tab': tab_1}">
          <button @click="changea"><img src="../assets/people-story1-01.png" alt="respondent_1"></button>
        </div>
        <div class="pending" :class="{'tab': tab_2}">
          <button @click="changeb"><img src="../assets/people-story2-01.png" alt="respondent_2"></button>
        </div>
        <div class="pending" :class="{'tab': tab_3}">
          <button @click="changec"><img src="../assets/people-story3-01.png" alt="respondent_3"></button>
        </div>
      </div>
      <div id="carousel">
        <div class="arrow" @click="previous">
          <i class="fas fa-chevron-left fa-2x" style="color: #ffffff"></i>
        </div>
        <div class="story_content">
          <div class="carousel-img">
            <img src="../assets/story1_1.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_2.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_3.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_4.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_5.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_6.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_7.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_8.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_9.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_10.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_11.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_12.jpg" alt="carousel" class="carousel">
            <img src="../assets/story1_13.jpg" alt="carousel" class="carousel">
          </div>
        </div>
        <div class="arrow" @click="next">
          <i class="fas fa-chevron-right fa-2x" style="color: #ffffff"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageTitle from './PageTitle'

export default {
  name: 'Story',
  components:{
    PageTitle
  },
  data: function () {
    return {
      // window width
      window_width: 0,
      // option
      tab_1: true,
      tab_2: false,
      tab_3: false,
      //carousel
      width: 0,
      left: 0,
      length: 0,
      scrollStatus: false
    }
  },
  mounted() {
    window.addEventListener('load', () =>  {
      var width = document.getElementsByClassName('story_content')[0].offsetWidth;
      var height = width / 1876 * 980;
      var carousel = document.getElementsByClassName('carousel');
      document.getElementsByClassName('carousel-img')[0].style.width = width * carousel.length + 'px';
      for (let i = 0; i < carousel.length; i++) {
        carousel[i].style.width = width + 'px';
        carousel[i].style.height = height + 'px';
      }
      this.width = document.getElementsByClassName('story_content')[0].offsetWidth;
      this.length = document.getElementsByClassName('carousel').length;
      this.window_width = document.body.clientWidth;
    });
    
    window.addEventListener('resize', () => {
      this.window_width = document.body.clientWidth;
    });
    
    window.addEventListener('scroll', () => {
      // scroll
      var current = document.documentElement.scrollTop;
      var option = document.getElementById('story_option').offsetTop;
      var story = document.getElementById('story').offsetTop + document.getElementById('story').offsetHeight;
      
      if(current > option){
        this.scrollStatus = true;
      }
      if(current < option){
        this.scrollStatus = false;
      }
      if(current > story){
        this.scrollStatus = false;
      }
    }, {passive: true})
  },
  methods: {
    changea: function () {
      this.tab_1 = true;
      this.tab_2 = false;
      this.tab_3 = false;
    },
    changeb: function () {
      this.tab_1 = false;
      this.tab_2 = true;
      this.tab_3 = false;
    },
    changec: function () {
      this.tab_1 = false;
      this.tab_2 = false;
      this.tab_3 = true;
    },
    previous: function () {
      if (0 > this.left) {
        this.left = this.left + this.width;
        document.getElementsByClassName('carousel-img')[0].style.left = this.left + 'px';
      } else {
        this.left = this.width * (this.length - 1) * -1;
        document.getElementsByClassName('carousel-img')[0].style.left = this.width * (this.length - 1) * -1 + 'px';
      }
    },
    next: function () {
      if (this.left > this.width * (this.length - 1) * -1) {
        this.left = this.left - this.width;
        document.getElementsByClassName('carousel-img')[0].style.left = this.left + 'px';
      } else {
        this.left = 0;
        document.getElementsByClassName('carousel-img')[0].style.left = '0px';
      }
    }
  },
  watch: {
    window_width: function () {
      var page = this.left / this.width;
      this.width = document.getElementsByClassName('story_content')[0].offsetWidth;
      var carousel = document.getElementsByClassName('carousel');
      document.getElementsByClassName('carousel-img')[0].style.width = this.width * carousel.length + 'px';
      for (let i = 0; i < carousel.length; i++) {
        carousel[i].style.width = this.width + 'px';
      }
      this.left = this.width * page;
    },
    scrollStatus: function () {
      // carousel
      var slide = document.getElementById('carousel');
      var time_id = 0;
      var f = () => {
        this.next();
      };
      
      var loop = () => {
        if(this.scrollStatus){
          var time = setTimeout(function () {
            f();
            loop();
          }, 5000);
          time_id = time;
          slide.onmouseover = function () {
            clearTimeout(time_id);
          };
          slide.onmouseout = function () {
            (function loop() {
              var time = setTimeout(function () {
                f();
                loop();
              }, 5000);
              time_id = time;
            })();
          };
        }else {
          clearTimeout(time_id);
        }
      };
      
      if(this.scrollStatus){
        loop();
      }
    }
  }
}
</script>

<style>
  /* img */
  
  #story_option button{
    display: flex;
    align-content: center;
    padding: 1px 2px 2px 1px;
  }
  /* carousel */
  
  #carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-img {
    display: flex;
    justify-content: center;
    position: relative;
    -webkit-transition: all .4s ease 0s;
    transition: all .4s ease 0s;
    left: 0;
  }
  
  .carousel {
    width: 1000px;
  }
  
  .story_content {
    width: 80%;
    overflow: hidden;
  }
  
  .arrow {
    cursor: pointer;
    align-content: center;
    padding: 200px 50px 200px 50px;
  }
  
  .arrow:first-child {
    left: 5%;
  }
  
  .arrow:last-child {
    right: 5%;
  }
  
  @media only screen and (min-width: 736px) and (max-width: 1024px) {
    #story .wrapper{
      padding: 30px;
    }
    .arrow{
      padding: 120px 30px 120px 30px;
      cursor: pointer;
    }
    .arrow:first-child {
      left: 5%;
      padding-right: 20px;
    }
    .arrow:last-child {
      right: 5%;
      padding-left: 20px;
    }
    .story_content {
      width: 100%;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 735px) {
    .arrow{
      display: none;
    }
    .story_content {
      width: 100%;
    }
  }
</style>