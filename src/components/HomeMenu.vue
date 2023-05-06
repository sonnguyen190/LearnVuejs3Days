<template>
  <div class="grid wide">
    <div class="navbar_tong" v-bind:style="{ top: isMouseDown + 'px' }">
      <nav class="navbar-expand-lg Navbar_all">
        <div class="Navbar_logo">
          <router-link to="/"> CONVERSE</router-link>
        </div>
        <div class="navbar-collapse collapsenav">
          <ul class="navbar-nav mr-auto">
            <li>
              <button class="Navbar_Button">Women</button>
            </li>
            <li>
              <button class="Navbar_Button">Men</button>
            </li>
            <li>
              <button class="Navbar_Button">Kids</button>
            </li>
            <li>
              <button class="Navbar_Button">Custom</button>
            </li>
            <li>
              <button class="Navbar_Button">Limeted Edition</button>
            </li>
            <li>
              <button class="Navbar_Button">Sale</button>
            </li>
            <li>
              <button class="Navbar_Button">Explore</button>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 navbar_form">
            <div class="Navbar_Sign_in">
              <div class="icon_tim"></div>
              <router-link to="/cart" class="icon_gio_hang">
                Cart
                <font-awesome-icon icon="fa-solid fa-user-secret" />
              </router-link>
            </div>
            <div class="Navbar_search">
              <button class="Navbar_button_search">
                <span class="Navbar_span_Search">Search</span>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export default {
  name: 'HomeMenu',
  data() {
    return {
      isMouseDown: 60,
      isScroll: false
    }
  },
  methods: {
    handleScroll() {
      const scrollWindowHeight = window.pageYOffset
      if (scrollWindowHeight > 1) {
        this.isMouseDown = 0
      } else {
        this.isMouseDown = 60
      }
    }
  },
  components: {
    AddShoppingCartIcon
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.Navbar_all {
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.navbar_tong {
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
  max-width: 1440px;
  transition: ease 0.1s;
  z-index: 2;
}

.Navbar_ul_left {
  display: flex;
  width: 100%;
  padding-left: 100px;
  height: 100%;
}
.Navbar_ul_right {
  display: flex;

  width: 100%;
  margin: 0 auto;
  padding-top: 15px;
  height: 100%;
}

.Navbar_Button {
  border: none;
  background-color: white;
  padding: 15px 10px 10px 10px;
  height: 100%;
  font-weight: 500;
  font-size: 14px;
}
.Navbar_logo {
  font-weight: 700;
  font-size: 20px;
  padding-top: 15px;
  height: 100%;
  cursor: pointer;
}
.Navbar_logo a {
  text-decoration: none;
  color: #000;
}
.Navbar_button_search {
  background-color: black;
  color: azure;
  padding: 10px;
}
.Navbar_span_Search {
  padding-right: 250px;
  font-weight: 500;
}
.icon_gio_hang {
  border: solid black 1px;
  height: 40px;
  width: 60px;
  margin: 0px 10px;
  padding: 0px;
  cursor: pointer;
}
</style>
