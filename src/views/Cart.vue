<template>
  <div class="grid wide">
    <h5 class="shoppingCart_h5">Shopping Cart</h5>

    <div class="grid_gio_hang wide_gio_hang">
      <div class="left_cart">
        <div class="head_cart_left">
          <div class="all_gio_hang_gia">
            <div class="all_and_clear_all">
              <div>{{ this.cart.length }} Items in Cart</div>
              <div class="clear_all_cart">Clear all</div>
            </div>
          </div>
        </div>

        <ItemCart v-bind:dataCart="this.cart" v-on:tangSoLuong="handleTangSoLuong" />
      </div>
      <div class="right_cart">
        <div class="sumary">Summary</div>
        <div>
          <div>
            <div class="title_subtotal">Subtotal</div>

            <b class="subtotal">${{ this.tongtien }}.00</b>
          </div>
          <hr />
          <div>
            <div class="title_subtotal">Tax</div>

            <b class="subtotal">$0.00</b>
          </div>
          <hr />
          <div>
            <div class="title_subtotal">Order Total</div>

            <b class="subtotal">${{ this.tongtien }}.00</b>
          </div>
          <div class="price_cart">
            <div class="button_buy_cart">
              <div class="button_buy_cart">Checkout</div>
            </div>
          </div>
          <div class="price_cart">
            <div class="paypal_all">
              <img
                class="paypal"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCart from '../components/ItemCart.vue'
export default {
  name: 'Cart',
  data() {
    return {
      cart: [],
      tongtien: 0
    }
  },
  components: { ItemCart },
  mounted() {
    let listCart = localStorage.getItem('cart')
    if (listCart && listCart !== 'undefined' && listCart !== 'null') {
      this.cart = JSON.parse(listCart)
    }
    this.handleTinhTongTien(this.cart)
  },
  methods: {
    handleTangSoLuong(item) {
      let mang = this.cart
      for (var i = 0; i < mang.length; i++) {
        if (mang[i].id == item.id) {
          if (mang[i].quantity >= 1) {
            mang[i].quantity += 1
            mang[i].amount = mang[i].price * mang[i].quantity
          } else {
            //do nothing
          }
        }
      }
      this.cart = mang
      this.saveLocal(mang)
      this.handleTinhTongTien(this.cart)
    },
    saveLocal(arr) {
      let data_save = JSON.stringify(arr)
      localStorage.setItem('cart', data_save)
    },
    handleTinhTongTien(mang) {
      let tong = 0
      for (var i = 0; i < mang.length; i++) {
        tong += mang[i].price * mang[i].quantity
      }
      this.tongtien = tong
    }
  },
  emits: ['tangSoLuong']
}
</script>

<style>
.shoppingCart_h5 {
  position: relative;
  top: 100px;
  left: 120px;
}
.all_cart {
  margin-top: 30px;

  border: 0.06850000000000001rem solid #e8e8e8;
  border-radius: 5px;
}

.grid_gio_hang {
  width: 100%;
  display: block;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 70% 30%;
}
.wide_gio_hang {
  max-width: 1200px;
  margin: 0 auto;
}
.title_gio_hang {
  margin-left: 10px;
  color: black;
}
.title_gio_hang a {
  color: black;
  font-size: 15px;
  font-weight: 500;
}
.option_cart {
  font-weight: 700;
  font-size: 1.1rem;
  height: 50px;
  position: relative;
  left: 680px;
  width: 80px;
  transition: 0.1s ease-in-out;
}
.option_cart:hover {
  opacity: 0.5;
  font-weight: 700;
  font-size: 1.1rem;
  height: 50px;
  position: relative;
  left: 680px;
  width: 80px;
  transition: 0.1s ease-in-out;
}
.option_cart p {
  cursor: pointer;
  padding: 0px 13px;
  margin-top: 0px;
  color: #a8a69f;
  transition: color 0.1s ease-in-out;
}
.link_icon_cart {
  color: #000;
}
.link_icon_cart:hover {
  color: #000;
}

.quantity_cart button {
  margin: 0 10px;
  border-radius: 800px;
  width: 20px;
  height: 30px;
  outline: none;
  font-size: 20px;
}
.quantity_cart {
  display: inline;
  align-items: center;
  text-align: center;
  border: 2px solid #dfdedd;
  width: 105px;
  margin: 0 auto;
  height: 36px;
  box-sizing: border-box;
  border-radius: 80px;
  text-align: center;
  transition: border 0.4s ease-in-out;
}

.button_Buy_checkout {
  text-decoration: none;
  text-align: center;
  background-color: #000;
  color: white;
  position: relative;
  margin: 50px auto;
  cursor: pointer;
  height: 40px;
  left: 460px;
  font-size: 25px;
  font-weight: 500;
  width: 200px;
  box-sizing: border-box;
  transition: ease 0.5s;
  border-radius: 3px;
}
.button_Buy_checkout:hover {
  border: #000 solid 1px;
  background-color: white;
  box-sizing: border-box;
  color: black;
}
.button_thanks {
  text-decoration: none;
  text-align: center;
  display: block;
  background-color: #000;
  color: white;
  position: relative;
  margin: 10px auto;
  cursor: pointer;
  border: #000 solid 1px;
  font-size: 25px;
  padding: 10px;
  font-weight: 500;
  width: 400px;
  box-sizing: border-box;
  transition: ease 0.5s;
  border-radius: 3px;
}
.button_thanks:hover {
  border: #000 solid 1px;
  background-color: white;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}
.button_buy_cart {
  text-decoration: none;
  text-align: center;
  background-color: #000;
  color: white;

  position: relative;
  margin: 0 auto;
  height: 40px;
  font-size: 25px;
  font-weight: 500;
  width: 250px;
  transition: ease 0.5s;
  border-radius: 3px;
}

.paypal_all {
  background: #ffc439;
  margin: 0 auto;
  text-align: center;
  color: white;
  padding-top: 6px;
  position: relative;
  margin: 0 auto;
  height: 40px;
  font-weight: 500;
  width: 250px;
  transition: ease 0.3s;
  border-radius: 3px;
}
.title_order {
  margin-top: 100px;
  font-size: 35px;
  font-weight: 500;
}
.button_buy_cart:hover {
  text-decoration: none;
  border: #000 solid 1px;
  background-color: white;
  color: black;
  width: 250px;

  position: relative;
}
.price_cart {
  width: 100%;
  height: 40px;
  margin-top: 40px;
}
.Buy_checkout {
  width: 100%;
  height: 40px;
}
.modal_detail {
  margin: 50px auto;
  padding: 50px;
  overflow: scroll;
}
.table_detail {
  overflow: auto;

  height: 200px;
}

.error_Signup {
  color: red;
}
.price_cart_div {
  font-weight: 500;
  font-size: 30px;
}

.all_gio_hang_gia {
  display: grid;
  grid-template-columns: auto;
}
.left_cart {
  display: grid;
  margin-right: 50px;
}
.head_cart_left {
  background: #f4f4f4;

  padding: 15px;
}
.textresult {
  text-align: center;
  display: inline;
  margin-left: 5px;
}
.shoppingCart_h5 {
  position: relative;
  top: 100px;
  left: 120px;
}
.all_and_clear_all {
  display: grid;
  grid-template-columns: 91% 9%;
}
.clear_all_cart {
  cursor: pointer;
  color: #4a4948;
  border: #4a4948 solid 1px;
  text-align: center;
  width: 100px;
  right: 30px;
  position: relative;
  border-radius: 2px;
}
.button_quay_lai {
  padding: 5px;
}
.button_quay_lai:hover {
  opacity: 0.8;
}
.formSignUp {
  display: none;
}
.formSignIn {
  display: none;
}
.error {
  color: red;
  font-size: 30px;
  font-weight: 600;
}
.popup_are_you_sure_delete_all_cart {
  text-align: center;
  position: fixed;
  z-index: 200;
  top: 50px;
  left: 600px;
  background-color: white;
  border-radius: 2px;
  margin: 0 auto;

  width: 300px;
  border-radius: 5px;
  border: 3px solid black;
  padding: 10px;
}
.thanks_purchasing {
  margin-top: 100px;
  text-align: center;
}
.div_color_scale {
  height: 80px;
}
.popup_are_you_sure {
  margin: auto;
  align-items: center;
}

.button_chage_quantity {
  border: none;
  background-color: white;
  color: #000;
  font-weight: 600;
  margin: 2px 15px;
  cursor: pointer;
}
.icon_loading {
  margin: 0 auto;
}
.loading_checkout {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 0 auto;

  display: inline-block;
  z-index: 10;
}

.button_are_you_sure_delete_it {
  border-radius: 5px;
  width: 80px;
  height: 40px;
  margin: 0 20px;
  border: 2px solid black;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
}
.button_are_you_sure_delete_it:hover {
  transition: ease 0.3s;
  background-color: black;
  color: white;
}
.price_cart_checkout {
  margin-top: 5px;
}
.grid_title_price_cart_checkout {
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
