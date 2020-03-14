<template src="./section-sport-pour-particuliers.html"></template>

<script>
export default {
  data(){
    return {
      elements:[{
        title: "Public +16 ans",
        description: "Ces cours sont adaptés à tout public.",
        class: { 'spp-elt-public': true }
      },{
        title: "Materiel fourni",
        description: "Vous n'avez pas a vous soucier du matériel.",
        class: { 'spp-elt-materiel': true }
      },{
        title: "12 personnes max",
        description: "Afin de bénéficier d'un accompagnement personalisé.",
        class: { 'spp-elt-people': true }
      },{
        title: "Sourire garantie",
        description: "Une ambiance saine afin de travailler en s'amusant.",
        class: { 'spp-elt-feel': true }
      }]
    }
  }

}

</script>

<style lang="scss" src="./section-sport-pour-particuliers.scss"></style>
