<template>
<!-- Upcoming events  -->


  <!-- <div class="container-fluid">
    <p>Upcoming events</p>
    <div class="row">
      <card class="card">
      <div class="col-2">
        <img class="img-fluid" src="https://www.gruberphotographers.com/wp-content/gallery/events/Events_Splash_001.jpg" alt="">
      </div>
      <div class="col-4">

      </div>

    </card>


  </div> -->
















  <!-- </div> -->










<!-- Home page -->

  <!-- here is that three sentence  -->
<!-- <div class="row bg-warning mb-1 border ps-3">
  <div class="col-"></div>
    <p> Lorem ipsum dolor.<br> At vel veritatis,<br> iure accusamus nam eius alias  </p>
</div> -->
<!-- Note Buttons are here -->
<!-- <div class="row">
  <div class="d-flex flex-direction-row bg-light">
    <button class="btn btn-primary mx-1" vlau="">All</button>
    <button class="btn btn-primary mx-1" vlau="">Expos</button>
    <button class="btn btn-primary mx-1" vlau="">Convention</button>
    <button class="btn btn-primary mx-1" vlau="">Exhibits</button>
    <button class="btn btn-primary mx-1" vlau="">sports</button>
    <button class="btn btn-primary mx-1" vlau="">Digital</button>
    <button class="btn btn-primary mx-1" vlau="">Concert</button>
  </div>
</div> -->
<!-- Note here is the Eventes Template -->
<!-- <div class="row">
  <div class="col-3 ms-2 border-circle my-2">
    <card class="card ">
      <img class=" rounded-top" src="https://www.shutterstock.com/image-vector/photographer-woman-260nw-532686691.jpg" alt="">
      <h5>Concerts</h5>
      <p>Main Street Nampa 123</p>
      <p><span>100</span>Spots left</p>
    </card>
  </div>
</div> -->
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
