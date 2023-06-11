<template>
    <div class="container-fluid">


      <div class="detail">
        <!-- why this shit router is not working? -->
        <router-link :to="{name:'EventDetails', params:{id:event.id}}">
  <img class="coverImg" :src="event.coverImg" alt="">
</router-link>
  <div class="text">
    <p><b>{{ event.name }}</b></p>
    <p>{{ event.location }}</p>
  </div>
<p><b>{{ event.capacity }}</b> Spots Left</p>
<p v-if="event.isCanceled" class='cancel'> event Canceled</p>




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
  z-index: -1;
  filter: blur(10px);
}
  .coverImg{
    /* position:relative; */
    /* background-size: cover; */
    height: 30dvb;
    width: 100%;
    border-radius: 10px;
    backdrop-filter: blur(5px);
  }
  .cancel{
    color:red


  }
  .text{
    position: absolute;
    bottom:10px;
    color:white;
    padding-left: 2px;
    z-index: 1;
    /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  }


</style>
