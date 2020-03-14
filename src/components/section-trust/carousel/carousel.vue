<template lang="html" src="./carousel.html"></template>

<script>
export default {
  props: {
    nbSlidesToShow: {
      default: 1,
      type: Number
    },
    realSlidesCount: {
      default: 1,
      type: Number
    },
  },
  data() {
    return {
      currentIndex: 0,
      slides: [],
      slideCount: 0,
      slideWidth: 400, //size slide + 2* padding
      transition: false,
      dragOffsetX: 0,
      translateTime: 1,
      delay: 3000,
      interval1: 0,
    }
  },
  computed: {
    carouselStyle() {
      return {
        width: (this.slideWidth * this.nbSlidesToShow) + 'px'
      }
    },
    trackOffset() {
      return this.currentIndex * -this.slideWidth - this.dragOffsetX;
    },
    trackStyles() {
      return {
        width: (this.slides.length * this.slideWidth) + 'px',
        transform: `translateX(${this.trackOffset}px)`,
        transition: this.transition ? `transform ${this.translateTime}s ease` : "unset"
      }
    }
  },
  methods: {
    handleTransitionEnd() {
      if (this.currentIndex === this.realSlidesCount) {
        this.transition = false;
        this.currentIndex = 0;
      }
    },
    nextIndex() {
      this.transition = true;
      this.currentIndex++;
      if (this.currentIndex > this.realSlidesCount) {
        this.currentIndex = 0;
      }
    },

    autoChange(){
      this.interval1 = setInterval(() => {
        this.nextIndex()
      }, this.delay)
    }
  },
  mounted() {
     this.slides = this.$children
     this.slideCount = this.slides.length
     this.autoChange()
  },
  destroyed() {
    clearInterval(this.interval1)
  }
}
</script>

<style lang="scss" src="./carousel.scss"></style>
