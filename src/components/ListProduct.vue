<template>
  <div class="main_right">
    <div v-for="data in ListProduct" v-bind:key="data.id">
      <div class="imgItem" v-bind:style="{ backgroundImage: 'url(' + data.img + ')' }">
        <div class="overlay_addtocart">
          <div class="overlay_addtocart_div_button" v-on:click="handleAddtocart(data)">
            <div class="overlay_addtocart_div_button_grid2">Add to cart</div>
          </div>
        </div>
      </div>
      <span class="name_product">{{ data.name }}</span>
      <div>{{ data.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListProduct',

  data() {
    return {
      ListProduct: [
        {
          id: 1,
          name: 'Chuck 70 High Top',
          price: 100,
          img: 'https://converse.ca/media/catalog/product/cache/1026c061effc1a20d56ae0b507d90a94/1/6/162050c_a_107x1_1.jpg',
          color: ['red', 'yellow', 'white', 'black'],
          size: [40, 41, 42, 43],
          quantity: 0
        },
        {
          id: 2,
          name: 'Chuck 70 High Top',
          price: 100,
          img: 'https://converse.ca/media/catalog/product/cache/1026c061effc1a20d56ae0b507d90a94/1/6/162050c_a_107x1_1.jpg',
          color: ['red', 'yellow', 'white', 'black'],
          size: [40, 41, 42, 43],
          quantity: 0
        },
        {
          id: 3,
          name: 'Chuck 70 High Top',
          price: 100,
          img: 'https://converse.ca/media/catalog/product/cache/1026c061effc1a20d56ae0b507d90a94/1/6/162050c_a_107x1_1.jpg',
          color: ['red', 'yellow', 'white', 'black'],
          size: [40, 41, 42, 43],
          quantity: 0
        },
        {
          id: 4,
          name: 'Chuck 70 High Top',
          price: 100,
          img: 'https://converse.ca/media/catalog/product/cache/1026c061effc1a20d56ae0b507d90a94/1/6/162050c_a_107x1_1.jpg',
          color: ['red', 'yellow', 'white', 'black'],
          size: [40, 41, 42, 43],
          quantity: 0
        },
        {
          id: 5,
          name: 'Chuck 70 High Top',
          price: 100,
          img: 'https://converse.ca/media/catalog/product/cache/1026c061effc1a20d56ae0b507d90a94/1/6/162050c_a_107x1_1.jpg',
          color: ['red', 'yellow', 'white', 'black'],
          size: [40, 41, 42, 43],
          quantity: 0
        }
      ],
      cart: []
    }
  },
  methods: {
    saveLocal(arr) {
      let data_save = JSON.stringify(arr)
      localStorage.setItem('cart', data_save)
    },
    handleAddtocart(shoe) {
      let arr = this.cart
      if (arr !== undefined && arr !== []) {
        let flag = 0
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === shoe.id) {
            arr[i].quantity += 1
            flag = 1
          }
        }
        if (flag == 0) {
          shoe.quantity = 1
          arr.push(shoe)
        }
      } else {
        shoe.quantity = 1
        arr.push(shoe)
      }
      this.cart = arr

      this.saveLocal(arr)
      alert('them thanh cong')
    }
  },
  mounted() {
    let listCart = localStorage.getItem('cart')
    if (listCart && listCart !== 'undefined' && listCart !== 'null') {
      this.cart = JSON.parse(listCart)
    }
  }
}
</script>

<style>
.main_right {
  display: grid;
  position: relative;
  transform: translateX(0px);
  transition: 0.5s all ease;
  grid-template-columns: 25% 25% 25% 25%;
  margin-top: 70px;
}
.overlay_addtocart {
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 100%;
  opacity: 1;
  transition: ease 0.3s;
}
.overlay_addtocart_div_button {
  position: relative;
  transition: ease 0.3s;
  background-color: white;
  color: #000;
  display: inline-block;
  width: 60%;
  text-decoration: none;
  font-size: 0.875rem;
  top: 85%;
  left: 10%;
  cursor: pointer;
}
.overlay_addtocart_div_button_grid {
  display: flex;
  text-decoration: none;
}
.overlay_addtocart_div_button_grid:hover {
  display: flex;
  text-decoration: none;
}

.overlay_addtocart_div_button:hover {
  background-color: black;
  text-decoration: none;
  color: white;
}
.overlay_addtocart_div_button_grid1 {
  color: #000;
  text-align: center;
  padding: 10px 5px;
  width: 200px;
  border-right: 1px #757575 solid;
  font-size: 15px;
  font-weight: 600;
}
.overlay_addtocart_div_button_grid1:hover {
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 10px 5px;
  width: 200px;
  border-right: 1px #757575 solid;
  font-size: 15px;
  font-weight: 600;
}

.overlay_addtocart_div_button_grid2 {
  padding: 10px 10px;

  font-weight: 600;
}
.imgItem {
  margin: 0 auto;
  height: 450px;
  width: 90%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bar_Product {
  border: 0.06850000000000001rem solid #e8e8e8;
  height: 50px;
  border-right: none;
  display: grid;
  grid-template-columns: 80% 20%;
}
.results {
  padding: 10px;
}
.textresult {
  text-align: center;
  display: inline;
  margin-left: 5px;
}
.filter_sort {
  border-left: 0.06850000000000001rem solid #e8e8e8;
  height: 100%;
  padding: 10px;
  display: inline-block;
  margin-left: 20px;
}
.model_popup_filter {
  display: none;
  position: relative;
  cursor: pointer;
}
.model_popup_filteractive {
  top: 200px;
  cursor: pointer;
  position: absolute;
  background-color: white;
  border-radius: 2px;
  font-size: 13px;
  width: 150px;
  z-index: 1;
}
.li_filter {
  cursor: pointer;
  padding: 5px 0px;
}
.li_filter:hover {
  cursor: pointer;

  background-color: #e2dfdc;
}
</style>
