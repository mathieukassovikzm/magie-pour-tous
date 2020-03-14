<template src="./section-about.html"></template>

<script>
export default {
  data(){
    return {
      widthW: 0,
      p01: 'Je suis un grand passionné de sport. Handballeur depuis mes premiers pas je me suis vite lancé dans l\'animation.',
      p02: 'Etant fortement impliqué dans le sport associatif de la région, j\'ai toujours eu cette idée de transmettre cette passion que j\'ai toujours eue. De plus je suis persuadé qu\'afin d\'être le plus productif que possible au travail, mais aussi de simplement se sentir mieux dans la vie de tous les jours il est important sinon indispensable de pratiquer une activité sportive régulière.',
      p03: 'Aujourd\'hui, non seulement ma passion est toujours aussi grande, mais c\'est fort d\'un BPJPES activité pour tous (Brevet professionnel de la jeunesse, de l’éducation populaire et du sport) et d’un BTS Technico-commercial, qu\'en cette année 2019, je me suis décidé à me lancer dans une nouvelle aventure sportive: Go 2 Sport.',
      p04: 'Ce projet est un projet qui me ressemble et auquel je suis accroché et j\'espère enfin pouvoir partager avec vous mon amour pour le sport.'
    }
  },
  computed: {
    isSmall() {
      return this.widthW < '800' ? true : false
    },
    isMedium() {
      return ( '800' < this.widthW && this.widthW < '1000')? true : false
    },
    isLarge() {
      return '1000' < this.widthW ? true : false
    }
  },
  methods: {
    widthWindow() {
      this.widthW = document.documentElement.clientWidth
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.widthWindow);

      //Init
      this.widthWindow()
    })
  },
  destroy() {
    window.removeEventListener('resize', this.widthWindow);
  }

}

</script>

<style lang="scss" src="./section-about.scss"></style>
