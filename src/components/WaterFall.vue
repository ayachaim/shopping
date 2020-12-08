<template>
  <div class="infinite-list" v-infinite-scroll="load" style="     height:30rem; width:100%; overflow-x: hidden; overflow-y: auto;" infinite-scroll-distance="20" >
    <div v-for="i in count" class="infinite-list-item">{{ i }}</div>
  </div>
</template>

<script>
export default {
  name: 'WaterFall',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>
<style lang="less" scoped>

</style>
