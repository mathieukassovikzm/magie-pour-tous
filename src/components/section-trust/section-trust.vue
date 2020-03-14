<template lang="html" src="./section-trust.html">

</template>

<script>
import Carousel from './carousel/carousel.vue'
import CarouselSlide from './carousel/carousel-slide/carousel-slide.vue'
export default {
  components: {
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      companies: [
        {
          name: 'France Boisson',
          logo: 'companies_france-boissons.png'
        } , {
          name: 'Sevel Services',
          logo: 'companies_sevel-services.png'
        } , {
          name: 'Domitis Concarneau',
          logo: 'companies_domitys.png'
        } , {
          name: 'Clikéco Finistère',
          logo: 'companies_clik-eco.png'
        } , {
          name: 'Outdoor Indoor',
          logo: 'companies_outdoor-indoor.png'
        } , {
          name: 'Gras Savoye',
          logo: 'companies_gras-savoye.png'
        }
      ],
      realSlidesCount: 0,
      nbSlidesToShow: 3,
    }
  },
  methods: {
    setNbSlidesToShow() {
      let windowWidth = document.documentElement.clientWidth
      if (windowWidth < 900 ){
        this.nbSlidesToShow= 1
      } else if ( 900 < windowWidth && windowWidth < 1300 ){
        this.nbSlidesToShow= 2
      } else {
        this.nbSlidesToShow = 3
      }
    }
  },
  mounted(){
    this.realSlidesCount = this.companies.length
    if ( this.companies.length < this.nbSlidesToShow * 3 ){
      this.companies.forEach((companie) => {
        this.companies.push(companie)
      })
    }

    this.$nextTick(function() {
      window.addEventListener('resize', this.setNbSlidesToShow);

      //Init
      this.setNbSlidesToShow()
    })
  },
  destroy() {
    window.removeEventListener('resize', this.setNbSlidesToShow);
  }
}
</script>

<style lang="scss" src="./section-trust.scss">
</style>
