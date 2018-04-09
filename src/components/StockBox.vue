<template lang="html">
  <div class="stock-box">
    <div class="box-head" :class="{blue: show}">
      <span class="name"><slot></slot></span>&nbsp;<span class="price">(Price: {{price}}<span v-if="show"> | Quantity: {{$store.state.portfolio[index].quantity}}</span>)</span class="price">
    </div>
    <div class="box-body">
      <input type="number" placeholder="Quantity">
      <button :class="{red: show}" @click="buy(index)" v-if="!show">Buy</button>
      <button :class="{red: show}" @click="sell(index)" v-else>Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buy(index){
      const product = this.$store.state.stocks[index].product;
      const store = this.$store.state;
      const funds = store.funds;
      const quantity = Number(document.querySelectorAll(".stock-box input")[index].value);
      const price = store.stocks[index].price;
      const totalPrice = price * quantity;
      let found = false;
      if(funds >= totalPrice) {
        store.funds -= totalPrice;
        document.querySelectorAll(".stock-box input")[index].value = '';
        for(let i = 0; i < store.portfolio.length; i++){
          if(product === store.portfolio[i].product){
            store.portfolio[i].quantity += quantity;
            found = true;
            break;
          }
        }
        if(!found) {
          store.stocks[index].quantity = quantity;
          store.portfolio.push(store.stocks[index]);
        }
      }
      else {
        alert("Not enough funds to buy")
      }
    },
    sell(index){
      const product = this.$store.state.portfolio[index].product;
      const store = this.$store.state;
      const funds = store.funds;
      const quantity = Number(document.querySelectorAll(".stock-box input")[index].value);
      let productQuantity = store.portfolio[index].quantity;
      const price = store.portfolio[index].price;
      const totalPrice = price * quantity;
      document.querySelectorAll(".stock-box input")[index].value = '';
      if(productQuantity >= quantity) {
        store.funds += totalPrice;
        store.portfolio[index].quantity -= quantity;
        productQuantity -= quantity;
        if(store.portfolio[index].quantity === 0) {
          store.portfolio.splice(index, 1)
        }
      }
      else{
        alert("You don't have that much of quantity");
      }
    }
  },
  props: ['price', 'show', 'index']
}
</script>

<style lang="css">
  .stock-box{
    border-radius: 5px;
    box-shadow: 0 0 4px 1px #ccc;
    overflow: hidden;
    width: 41.2vw;
    margin-bottom: 20px;
  }
  .stock-box .box-head{
    background: #a5d6a7;
    color: #388e3c;
    padding: 8px 15px;
  }
  .stock-box .name{
    font-weight: bold;
  }
  .stock-box .price{
    font-size: .7rem;
  }
  .stock-box .box-body{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;

  }
  .stock-box input{
    box-shadow: 0 0 2px 1px #eee;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #bbb;
    width: 60%;
  }
  .stock-box button{
    border: 0;
    padding: 8px 13px;
    background: #66bb6a;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .stock-box button:hover{
    background: #81c784;
  }
  .stock-box .box-head.blue{
    background: #90CAF9;
    color: #1E88E5;
  }
  .stock-box button.red{
    background: #f59290;
  }
</style>
