<template>
  <div class="all_cart" v-for="data in this.dataCart" v-bind:key="data.id">
    <div class="item_gio_hang">
      <div class="img_gio_hang">
        <img :src="data.img" alt="" />
      </div>
      <div class="title_gio_hang">
        <div>{{ data.name }}</div>

        <p class="priunit">${{ data.price }}.00</p>
        <!-- <div class="shoe_size_cart">Shoe Size: {this.props.list_gio_hang.sizee}</div>

        <div class="shoe_size_cart">Color: {this.props.list_gio_hang.colorr}{" "}</div> -->
      </div>
      <div class="quantity_cart">
        <button class="button_chage_quantity">-</button>
        {{ data.quantity }}
        <button class="button_chage_quantity" v-on:click="handleTangSLCart(data)">+</button>
      </div>
      <div>
        <p class="priunit1">${{ data.price * data.quantity }}.00</p>
      </div>
    </div>
    <div class="option_cart">
      <p>DELETE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCart',
  props: {
    dataCart: Array
  },
  methods: {
    handleTangSLCart(data) {
      this.$emit('tangSoLuong', data)
    }
  },

  mounted() {}
}
</script>

<style>
.img_gio_hang img {
  width: 139px;
  height: 139px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.item_gio_hang {
  padding: 20px;
  display: grid;
  grid-template-columns: 20% 50% 20% 10%;
  padding-bottom: 20px;
}
</style>
