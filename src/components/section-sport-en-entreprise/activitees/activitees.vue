<template src="./activitees.html"></template>

<script>
import Activity from './activity/activity'
export default {
  components: {
    Activity
  },
  data() {
    return {
      activitees : [
        {
          title:"Fitness",
          url:'fitness',
          sports: [
            {name: "Fitness", url:'fitness'},
            {name: "Pilate", url:'pilate'},
            {name: "Step", url:'step'},
            {name: "Cardio-training", url:'cardio-training'},
            {name: "Gym douce", url:'gym-douce'}
          ],
          realSlidesCount: 0,
          nbSlidesToShow: 3
        },{
          title:"Combat",
          url:"combat",
          sports: [
            {name: "Boxe Française", url:'boxe-francaise'},
            {name: "Judo", url:'judo'},
            {name: "Gouren", url:'gouren'},
            {name: "Lutte", url:'lutte'},
          ],
          realSlidesCount: 0,
          nbSlidesToShow: 3
        },{
          title:"Sports collectifs",
          url:"sports-co",
          sports: [
            {name: "Football", url:'football'},
            {name: "Handball", url:'handball'},
            {name: "Basketball", url:'basketball'},
            {name: "Volleyball", url:'volleyball'},
            {name: "Rugby", url:'rugby'},
            {name: "Ultimate", url:'ultimate'}
          ],
          realSlidesCount: 0,
          nbSlidesToShow: 3
        },{
          title:"Sports Raquettes",
          url:"sports-raquettes",
          sports: [
            {name: "Badminton", url:'badminton'},
            {name: "Tennis de Table", url:'tennis-de-table'},
            {name: "Tennis", url:'tennis'},
          ],
          realSlidesCount: 0,
          nbSlidesToShow: 3
        },{
          title:"Sports plein air",
          url:"sports-plein-air",
          sports: [
            {name: "course à pied", url:'course-a-pied'},
            {name: "Course d’orientation", url:'course-d-orientation'},
            {name: "Vélo", url:'velo'},
          ],
          realSlidesCount: 0,
          nbSlidesToShow: 3
        }
      ]
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" src="./activitees.scss"></style>
