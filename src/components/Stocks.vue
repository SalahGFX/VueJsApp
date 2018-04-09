<template lang="html">
  <div class="box-container">
    <stock-box v-for="(stock, index) in stocks" :price="stock.price" :show="false" :index="index">{{ stock.product }}</stock-box>
  </div>
</template>

<script>
import StockBox from './StockBox.vue'
export default {
  computed:{
    stocks(){
      return this.$store.state.stocks
    }
  },
  components: {
    StockBox
  }
}
</script>

<style lang="css">
</style>
