<template lang="html">
  <div class="stock-trader">
    <h1>Trade or View your Portfolio</h1>
    <h5>You may Save & Load your Data</h5>
    <h5>Click on 'End Day' to bigin a new Day!</h5>
    <hr>
    <h3>Your Funds: ${{ funds }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['funds'])
}
</script>

<style lang="css">
.stock-trader {
  padding: 20px;
  color: #444;
  box-shadow: 0 0 4px 1px #ccc;
  border-radius: 5px;
  margin-top: 30px;
  line-height: 24px;
}
.stock-trader hr{
  margin: 20px 0;
  border: 0;
  background: #ccc;
  height: 1px;
}
.stock-trader h1{
  margin: 30px 0 10px 0;
}
</style>
