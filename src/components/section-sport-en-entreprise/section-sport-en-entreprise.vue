<template src="./section-sport-en-entreprise.html"></template>

<script>
import Activitees from './activitees/activitees'
import Bienfaits from './bienfaits/bienfaits'
import Formules from './formules/formules'
export default {
  components: {
    Activitees,
    Bienfaits,
    Formules
  },
  data(){
    return {
      displayMobile: false,
      classDisplayMobile: 'displayMobile'
    }
  },
  computed: {
    isDisplayMobile() {
      return this.displayMobile? this.classDisplayMobile : ''
    }
  },
  methods: {
    resize(){
      let windowWidth = document.documentElement.clientWidth
      if (windowWidth < 650 ){
        this.displayMobile = true
      } else {
        this.displayMobile = false
      }
    }
  },
  mounted(){
    this.$nextTick(function() {
      window.addEventListener('resize', this.resize);

      //Init
      this.resize()
    })
  },
  destroy() {
    window.removeEventListener('resize', this.resize);
  }
}

</script>

<style lang="scss" src="./section-sport-en-entreprise.scss"></style>
