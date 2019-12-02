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
      <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <div id="carousel">
          <div class="arrow" @click="previous">
            <i class="fas fa-chevron-left fa-2x" style="color: #ffffff"></i>
          </div>
          <div class="story_content">
            <div class="carousel-img" v-if="isActive_1">
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_1_v.jpg">
                <img src="../assets/story1_1_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_2_v.jpg">
                <img src="../assets/story1_2_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_3_v.jpg">
                <img src="../assets/story1_3_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_4_v.jpg">
                <img src="../assets/story1_4_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_5_v.jpg">
                <img src="../assets/story1_5_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_6_v.jpg">
                <img src="../assets/story1_6_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_7_v.jpg">
                <img src="../assets/story1_7_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_8_v.jpg">
                <img src="../assets/story1_8_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_9_v.jpg">
                <img src="../assets/story1_9_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_10_v.jpg">
                <img src="../assets/story1_10_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_11_v.jpg">
                <img src="../assets/story1_11_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_12_v.jpg">
                <img src="../assets/story1_12_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story1_13_v.jpg">
                <img src="../assets/story1_13_h.jpg" alt="carousel" class="carousel">
              </picture>
            </div>
            <div class="carousel-img" v-if="isActive_2">
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_1_v.jpg">
                <img src="../assets/story2_1_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_2_v.jpg">
                <img src="../assets/story2_2_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_3_v.jpg">
                <img src="../assets/story2_3_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_4_v.jpg">
                <img src="../assets/story2_4_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_5_v.jpg">
                <img src="../assets/story2_5_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_6_v.jpg">
                <img src="../assets/story2_6_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_7_v.jpg">
                <img src="../assets/story2_7_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_8_v.jpg">
                <img src="../assets/story2_8_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_9_v.jpg">
                <img src="../assets/story2_9_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_10_v.jpg">
                <img src="../assets/story2_10_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story2_11_v.jpg">
                <img src="../assets/story2_11_h.jpg" alt="carousel" class="carousel">
              </picture>
            </div>
            <div class="carousel-img" v-if="isActive_3">
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_1_v.jpg">
                <img src="../assets/story3_1_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_2_v.jpg">
                <img src="../assets/story3_2_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_3_v.jpg">
                <img src="../assets/story3_3_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_4_v.jpg">
                <img src="../assets/story3_4_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_5_v.jpg">
                <img src="../assets/story3_5_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_6_v.jpg">
                <img src="../assets/story3_6_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_7_v.jpg">
                <img src="../assets/story3_7_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_8_v.jpg">
                <img src="../assets/story3_8_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_9_v.jpg">
                <img src="../assets/story3_9_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_10_v.jpg">
                <img src="../assets/story3_10_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_11_v.jpg">
                <img src="../assets/story3_11_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_12_v.jpg">
                <img src="../assets/story3_12_h.jpg" alt="carousel" class="carousel">
              </picture>
              <picture>
                <source media="(max-width: 735px)" srcset="../assets/story3_13_v.jpg">
                <img src="../assets/story3_13_h.jpg" alt="carousel" class="carousel">
              </picture>
            </div>
          </div>
          <div class="arrow" @click="next">
            <i class="fas fa-chevron-right fa-2x" style="color: #ffffff"></i>
          </div>
      </div>
      </v-touch>
    </div>
  </div>
</template>
<script>
  import PageTitle from './PageTitle'

  export default {
    name: 'Story',
    components: {
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
        isActive_1: true,
        isActive_2: false,
        isActive_3: false,
        width: 0,
        left: 0,
        length: 0,
        scrollStatus: false
      }
    },
    mounted() {
      window.addEventListener('DOMContentLoaded', () => {
        this.fit();
      });

      window.addEventListener('resize', () => {
        this.window_width = document.body.clientWidth;
      });

      window.addEventListener('scroll', () => {
        // scroll
        var current = document.documentElement.scrollTop;
        var option = document.getElementById('story_option').offsetTop;

        if (current > option) {
          this.scrollStatus = true;
        }
      }, {passive: true})
    },
    methods: {
      changea: function () {
        this.tab_1 = true;
        this.tab_2 = false;
        this.tab_3 = false;
        this.isActive_1 = true;
        this.isActive_2 = false;
        this.isActive_3 = false;
        this.$nextTick(function () {
         this.fit();
          this.left = 0;
          document.getElementsByClassName('carousel-img')[0].style.left = 0;
        })
      },
      changeb: function () {
        this.tab_1 = false;
        this.tab_2 = true;
        this.tab_3 = false;
        this.isActive_1 = false;
        this.isActive_2 = true;
        this.isActive_3 = false;
        this.$nextTick(function () {
          this.fit();
          this.left = 0;
          document.getElementsByClassName('carousel-img')[0].style.left = 0;
        })
      },
      changec: function () {
        this.tab_1 = false;
        this.tab_2 = false;
        this.tab_3 = true;
        this.isActive_1 = false;
        this.isActive_2 = false;
        this.isActive_3 = true;
        this.$nextTick(function () {
          this.fit();
          this.left = 0;
          document.getElementsByClassName('carousel-img')[0].style.left = 0;
        })
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
      },
      fit: function () {
        this.window_width = document.body.clientWidth;
        var width = 1000;
        var height = 0;
        if(this.window_width > 735){
          width = document.getElementsByClassName('story_content')[0].offsetWidth;
          height = width / 1876 * 980;
        }else {
          width = document.getElementsByClassName('story_content')[0].offsetWidth;
          height = width / 400 * 600;
        }
        var carousel = document.getElementsByClassName('carousel');
        document.getElementsByClassName('carousel-img')[0].style.width = width * carousel.length + 'px';
        for (let i = 0; i < carousel.length; i++) {
          carousel[i].style.width = width + 'px';
          carousel[i].style.height = height + 'px';
        }
        this.width = document.getElementsByClassName('story_content')[0].offsetWidth;
        this.length = document.getElementsByClassName('carousel').length;
      },
      onSwipeLeft: function (){
        this.next()
      },
      onSwipeRight: function (){
        this.previous()
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
          if (this.scrollStatus) {
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
          } else {
            clearTimeout(time_id);
          }
        };

        if (this.scrollStatus) {
          loop();
        }
      }
    }
  }
</script>

<style>
  /* img */
  
  #story_option button {
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
    #story .wrapper {
      padding: 30px;
    }
    
    .arrow {
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
    .arrow {
      display: none;
    }
    
    .story_content {
      width: 100%;
    }
  }
</style>