<template lang="html" src="./activity.html"></template>

<script>

export default {
  components: {

  },
  props: ['activity'],
  data() {
    return {
      boolTabOpen: true,
      classTabOpen: 'tab-open'
    }
  },
  computed: {
    isTabOpen() {
      return this.boolTabOpen? this.classTabOpen : ''
    },
    isFitness() {
      return this.activity.title == "Fitness" ? true : false
    },
    isCombat() {
      return this.activity.title == "Combat" ? true : false
    },
    isSportCo() {
      return this.activity.title == "Sports collectifs" ? true : false
    },
    isRaquette() {
      return this.activity.title == "Sports Raquettes" ? true : false
    },
    isOutdoor() {
      return this.activity.title == "Sports plein air" ? true : false
    },
  },
  methods: {
    openTab(){
      if (this.boolTabOpen){
        this.boolTabOpen = false
      } else {
        this.boolTabOpen = true
      }
    }
  }
}
</script>

<style lang="scss" src="./activity.scss"></style>
