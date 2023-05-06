<template>
  <div>
    <div class="row Topbanner_row">
      <div class="col-xl Topbanner_left">
        <div>
          <img
            class="Topbanner_img"
            src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw5f3c291d/firstspirit/media/09_global_elements/do_not_delete/technical_media_assets/us.svg"
            alt=""
          />
        </div>
        <div>
          <span class="Topbanner_us">US</span>
          <span class="Topbanner_us">|</span>
          <span class="Topbanner_us">EN</span>
        </div>
      </div>
      <div class="col-xl-8 Topbanner_middle">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner Topbanner_main_content">
            <div class="carousel-item active Topbanner_detail">
              <span class="Topbanner_span"> 30-DAY FREE RETURNS!</span>
              <a
                class="seeDetail"
                href="https://conversehelp.force.com/s/topic/0TO1N0000019UpZWAU/returns-exchanges"
              >
                See Details.
              </a>
            </div>
            <div class="carousel-item">
              <span class="Topbanner_paywith">
                Shop now. Pay with <span class="Topbanner_span">Klarna. </span>
              </span>
              <a
                class="seeDetail"
                href="https://conversehelp.force.com/s/topic/0TO1N0000019UpZWAU/returns-exchanges"
              >
                Learn more.
              </a>
            </div>
            <div class="carousel-item">
              <span class="Topbanner_paywith">FREE SHIPPING FOR MEMBERS! </span>
              <a
                class="seeDetail"
                href="https://www.converse.com/login?PromoBannerTesting_MemberMessaging_Control"
              >
                Sign In or Sign Up to Save.
              </a>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon Topbanner_button" aria-hidden="true"></span>
            <span class="sr-only">pre</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon Topbanner_button" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div id="Topbanner_right" class="col-xl Topbanner_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompHeader'
}
</script>

<style>
.Topbanner_row {
  display: flex;
  background: #f4f4f4;
}
.Topbanner_left {
  padding: 15px 10px 15px 50px;
  margin-left: 4em;
  display: flex;
  font-weight: 600;
  font-size: 12px;
  width: 20%;
}

.Topbanner_right {
  padding: 15px 10px 15px 50px;
  margin-right: 4em;
  font-size: 20px;
  width: 20%;
}
.Topbanner_img {
  height: 15px;
  padding-right: 5px;
}
.Topbanner_us {
  padding: 2px;
}

.Topbanner_middle {
  width: 2em;
  padding: 0 10em 0 10em;
}

.Topbanner_main_content {
  display: flex;
  height: 60px;
  width: 100%;

  text-align: center;
  padding-top: 15px;
}
.Topbanner_button {
  background-color: black;
}
.seeDetail {
  color: black;
  text-decoration: underline;
  padding-left: 8px;
  font-weight: 400;
}
.Topbanner_span {
  font-weight: 700;
}
.Topbanner_detail {
  height: 90%;
}
.Topbanner_paywith {
  font-weight: 500;
}
</style>
