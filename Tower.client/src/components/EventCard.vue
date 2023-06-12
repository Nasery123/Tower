<template>
    <div class="container-fluid">

<div clas="row">
      <div class="detail">
        <!-- why this shit router is not working? -->
        <router-link :to="{name:'EventDetails', params:{id:event.id}}">
  <img class="coverImg" :src="event.coverImg" alt="">
</router-link>
  <div class="text p-0 -0 card">
    <p><b>{{ event.name }}</b></p>
    <p>{{ event.location }}</p>
    <p><b>{{ event.capacity }}</b> Spots Left</p>
    <p v-if="event.isCanceled" class='cancel'> event Canceled</p>
  </div>
</div>




</div>


    </div>

</template>


<script>
export default {
  props:{
    event:{type:Event, required:true}
  },
    setup(){

        return {}
    }
}
</script>


<style>

.detail{
  position: relative;

}
.detail::before{
  position: absolute;
  /* z-index: 2; */
  /* filter: blur(10px); */
}
  .coverImg{
    /* position:relative; */
    /* background-size: cover; */
    height: 50dvb;
    width: 39dvb;
    border-radius: 10px;
    /* backdrop-filter: blur(5px); */
  }
  .text{
    position: absolute;
    bottom:0px;
    color:black;
    padding-left: 2px;
    /* z-index: 3; */
    /* opacity: 1; */
    padding: 0px;
    margin: 0px;
    width: 39dvb;
    height: 17dvb;
    overflow: auto;
    /* filter: blur(8px);
    -webkit-filter: blur(8px); */
  }
  .cancel{
    color:red


  }


</style>
