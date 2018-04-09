<template lang="html">
  <div class="box-container">
    <stock-box v-for="(s, index) in portfolio" :price="s.price" :show="true" :index="index">{{ s.product }}</stock-box>
  </div>
</template>

<script>
import StockBox from './StockBox.vue'

export default {
  components: {
    StockBox
  },
  computed: {
    portfolio(){
      return this.$store.state.portfolio
    }
  }
}
</script>

<style lang="css">
</style>
