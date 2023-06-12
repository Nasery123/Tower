<template>
  <div class="row">
  <div class="col-md-4 col-8 d-flex justify-content-between">
  <button v-if="account.id" class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#createEvent">CREATE EVENT</button>

</div>
<div clas="row">
  <div class="col-md-4 col-8">
    <SearchBar />
  </div>

</div>
</div>


  <!-- <router-link :to="{name:'MyTickets', params:{id:account.id}}">
  <button class="btn btn-primary">MY TICKETS</button></router-link> -->







<!-- Upcoming events
   <div class="container-fluid">
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
<div class="row text-dark mb-1 lorem border ps-3">
  <div class="col- "></div>
    <p> Lorem ipsum dolor.<br> At vel veritatis,<br> iure accusamus nam eius alias  </p>
</div>


<!-- Note Buttons are here -->
<section class="row">
  <div class="col-md-6  col-12 d-md-flex d-block flex-direction-row bg-light">



    <button class="btn btn-primary col-3 " @click="filterBy = ''">All</button>
    <button class="btn btn-primary  col-3 mx-1" @click="filterBy = 'expos'">Expos</button>
    <button class="btn btn-primary col-3" @click="filterBy = 'convention'">Convention</button>
    <button class="btn btn-primary col-3 " @click="filterBy = 'ThisIsNotGood'">Others</button>
    <button class="btn btn-primary  col-2" @click="filterBy = 'sport'">sports</button>
    <button class="btn btn-primary  col-2" @click="filterBy = 'digital'">Digital</button>
    <button class="btn btn-primary col-2 " @click="filterBy = 'concert'">Concert</button>
  </div>

 <!-- < class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter Events</button>
<d class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="btn btn-primary dropdown-item col-2 mx-1 " @click="filterBy = ''">All</button>
    <button class="btn btn-primary  dropdown-item col-2 mx-1" @click="filterBy = 'expos'">Expos</button>
    <button class="btn btn-primary dropdown-item col-2  mx-1" @click="filterBy = 'convention'">Convention</button>
    <button class="btn btn-primary dropdown-item col-2  mx-1" @click="filterBy = 'ThisIsNotGood'">Others</button>
    <button class="btn btn-primary  dropdown-item col-2 mx-1" @click="filterBy = 'sport'">sports</button>
    <button class="btn btn-primary  dropdown-item col-2 mx-1" @click="filterBy = 'digital'">Digital</button>
    <button class="btn btn-primary dropdown-item col-2  mx-1" @click="filterBy = 'concert'">Concert</button>
  </d
</div>

< -->
</section>


<!-- Note here is the Eventes Template -->
<div class="d-flex">
<section class="row xy">
  <div class="col-md-3 col-12 ms-2  border-circle photo my-2" v-for="e in events" :key="e.id">
    <!-- <card class="card "> -->

      <EventCard :event="e" />
    <!-- </card> -->
  </div>
</section>
</div>

</template>


<script>
import { computed } from '@vue/reactivity';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { onMounted, ref } from 'vue';
import {eventsService} from '../services/EventsService.js'
import EventCard from '../components/EventCard.vue';
import SearchBar from '../components/SearchBar.vue';


export default {
    setup() {
      const filterBy = ref('')
        async function getEvents() {
            try {
                await eventsService.getEvents();
            }
            catch (error) {
                Pop.error(error);
                logger.log(error);
            }
        }
        onMounted(() => {
            getEvents();
        });
        return {
            filterBy,
            account:computed(() => AppState.account),
            events: computed(() => {
              if(filterBy.value == ''){
                return AppState.events
              } else {
                return AppState.events.filter(e => e.type == filterBy.value)
              }
              })
        };
    },
    components: { EventCard, SearchBar }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  position: relative;


  .home-card {
    width: 50vw;


    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
    .bik-container{
    position: relative;
    width: 100%;
    height: 30px;
    overflow: hidden;
  }
  @keyframes drive {
    from {transform: translateX(0);}
    to{transform: translateX(800px);}


  }
  .dri{

    position: absolute;
    right: 0px;
    bottom: 10px;
    animation-name: drive;
    animation-duration: 4s;
    display: block;


    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  }
  .xy{
    align-items: center;
  }
  .dropdown{
    position:relative;
  }
  .dropdown-menu{
    position: absolute;
    box-shadow: 0 2px 5px 0 black;
  }

}
</style>
