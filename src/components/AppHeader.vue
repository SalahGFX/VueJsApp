<template lang="html">
  <div class="app-header">
    <div class="flex-start">
      <router-link class="brand" to="/" exact>Stock Trader</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/stocks">Stocks</router-link>
    </div>
    <div class="flex-end">
      <div class="end-day" @click="updatePrices()">End Day</div>
      <div class="save-load">Save & Load
        <div class="content">
          <div @click="saveStock()">Save Stock</div>
          <div @click="loadStock()">Load Stock</div>
        </div>
      </div>
      <div class="Funds">Funds: ${{ funds }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    updatePrices(){
      const store = this.$store.state.stocks
      for(let i = 0; i < store.length; i++){
        if(store[i].product === "BMW"){
          store[i].price = this.randomNumber(70, 140)
        }
        else if(store[i].product === "Google"){
          store[i].price = this.randomNumber(180, 350)
        }
        else if(store[i].product === "Apple"){
          store[i].price = this.randomNumber(200, 400)
        }
        else{
          store[i].price = this.randomNumber(8, 60)
        }
      }
    },
    randomNumber(min, max){
      let randomNumber = Math.floor(Math.random()*max)+1
      if(randomNumber < min) return min;
      return randomNumber
    },
    saveStock(){
      this.$http.put('https://vuejs-http-7b70e.firebaseio.com/data.json', {
        funds: this.$store.state.funds,
        portfolio: this.$store.state.portfolio
      })
    },
    loadStock(){
      this.$http.get('https://vuejs-http-7b70e.firebaseio.com/data.json')
          .then(response => {
            this.$store.state.funds = response.body.funds;
            this.$store.state.portfolio = response.body.portfolio
          })
    }
  },
  computed: mapGetters(['funds'])
}
</script>

<style lang="css">
.app-header{
  background: #eee;
  border: 1px solid #ccc;
  box-shadow: 0 0 2px 1px #dedede;
  height: 60px;
  border-radius: 5px;
  margin-top: 30px;
  position: relative;
}
.flex-start{
  height: 100%;
  display: inline-flex;
  width: 300px;
  justify-content: space-around;
}
.brand{
  font-weight: bold;
}
.flex-start a{
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #a5a5a5;
}
.flex-start a:hover{
  color: #888;
}
.flex-start .router-link-active,
.flex-start .router-link-active:hover{
  color: #4a4a4a;
}
.flex-end{
  height: 100%;
  display: inline-flex;
  width: 350px;
  justify-content: space-around;
  position: absolute;
  right: 0;
  color: #a5a5a5;
}
.flex-end>*{
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #777;
}
.flex-end>*:not(:last-child){
  cursor: pointer;
}
.flex-end>*:last-child{
  font-weight: bold;
}
.flex-end>*:not(:last-child):hover{
  color: #999;
}
.app-header .content{
  position: absolute;
  top: 50px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px #ddd;
  visibility: hidden;
  opacity: 0;
  transition: .5s ease;
}
.app-header .content div{
  padding: 10px 30px;
}
.app-header .content div:hover{
  background: #eee;
}
.save-load:hover .content{
  top: 40px;
  visibility: visible;
  opacity: 1;
  transition: .5s ease;
}
.end-day{
  user-select: none;
}
@media screen and (max-width: 720px) {
  .flex-end{
    height: 60%;
    display: inline-flex;
    width: 90%;
    justify-content: space-around;
    position: absolute;
    left: calc(50% - 45%);
    top: 60px;
    background: white;
    color: #a5a5a5;
    z-index: -1;
    box-shadow: 0 0 2px 1px #eee;
    border-radius: 0 0 5px 5px;
  }
}
</style>
