<template>
    <div class="container-fluid">
        <!-- event description part -->
<div class="row">
      <div class="d-flex">
      <div class="col-4 pt-2">
        <img class="img-fluid" src="https://t4.ftcdn.net/jpg/01/64/53/19/360_F_164531989_mOkhquX2NcIBFeVXZq1Jxd550KztLu3x.jpg" alt="">
      </div>
      <div class="col- px-2 py-2">
        <div class="d-flex justify-content-between">
        <h3>Event Title</h3>
        <p>when</p>
      </div>
        <div class="d-flex justify-content-between">
          <p>Type of Event</p>
          <p>Starting Time</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati placeat perspiciatis tenetur odio nulla commodi non rem, veritatis cumque nobis ex ratione.

        </p>
        <div class="d-flex justify-content-between">
          <p><span id="spot">100</span>Spot Left</p>
          <button class="btn btn-primary rounded ">Attend 🙋‍♂️</button>
        </div>
      </div>
    </div>
    </div>


<!-- who is attending section -->
    <div class="row mx-2 mt-2">
      <p>See who is Attending</p>
      <div class="bg-white">

        <p>this people are attending</p>

      </div>
<!-- comment section -->
      <div class="row">
        <div class="mt-4">
          <textarea name="comment" id="" cols="30" rows="4" placeholder="share your idea"></textarea>
        </div>
      </div>

    </div>
</div>

</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>
