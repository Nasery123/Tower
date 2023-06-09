<template>
    <div class="container-fluid">


      <div>
        <!-- why this shit router is not working? -->
        <router-link :to="{name:'EventDetails', params:{id:event.id}}">
  <img class="img-fluid coverImg" :src="event.coverImg" alt="">
</router-link>
  <div class="">
    <p><b>{{ event.type }}</b></p>
    <p>{{ event.location }}</p>
  </div>
<p><b>{{ event.capacity }}</b> Spots Left</p>
<p v-if="event.isCanceled" class=''> event Canceled</p>




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

  .coverImg{
    background-size: cover;
  }


</style>
