<template lang="html" src="./section-g2s.html">

</template>

<script>
export default {
  data(){
    return {
      isHoveredSolidarity: false,
      isHoveredShare: false,
      isHoveredTolerance: false,
      isHoveredConviviality: false,
      classHovered: 'hovered'
    }
  },
  computed: {
    hoverSolidarity() {
      return this.isHoveredSolidarity == true ? this.classHovered : ''
    },
    hoverShare() {
      return this.isHoveredShare == true ? this.classHovered : ''
    },
    hoverTolerance() {
      return this.isHoveredTolerance == true ? this.classHovered : ''
    },
    hoverConviviality() {
      return this.isHoveredConviviality == true ? this.classHovered : ''
    }
  }
}
</script>

<style lang="scss" src="./section-g2s.scss">
</style>
