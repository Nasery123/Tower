<template>
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createEvent">CREATE EVENT</button>


  <!-- <router-link :to="{name:'MyTickets', params:{id:account.id}}">
  <button class="btn btn-primary">MY TICKETS</button></router-link> -->
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
<section class="row">
  <div class="d-flex flex-direction-row bg-light">
    <button class="btn btn-primary mx-1" @click="filterBy = ''">All</button>
    <button class="btn btn-primary mx-1" @click="filterBy = 'expos'">Expos</button>
    <button class="btn btn-primary mx-1" @click="filterBy = 'convention'">Convention</button>
    <button class="btn btn-primary mx-1" @click="filterBy = 'thisIsNotGood'">Others</button>
    <button class="btn btn-primary mx-1" @click="filterBy = 'sport'">sports</button>
    <button class="btn btn-primary mx-1" @click="filterBy = 'digital'">Digital</button>
    <button class="btn btn-primary mx-1" @click="filterBy = 'concert'">Concert</button>
  </div>
</section>


<!-- Note here is the Eventes Template -->
<section class="row">
  <div class="col-2 ms-2 border-circle my-2" v-for="e in events" :key="e.id">
    <card class="card ">

      <EventCard :event="e" />
    </card>
  </div>
</section>
</template>

<script>
import { computed } from '@vue/reactivity';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { onMounted, ref } from 'vue';
import {eventsService} from '../services/EventsService.js'
import EventCard from '../components/EventCard.vue';


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
            events: computed(() => {
              if(filterBy.value == ''){
                return AppState.events
              } else {
                // if(filterBy.vlaue != 'sport' || filterBy.vlaue != 'concert' || filterBy.value != 'convention' || filterBy.value != 'digital' || filterBy.value != 'expos')
                return AppState.events.filter(e => e.type == filterBy.value)
              }
              })
        };
    },
    components: { EventCard }
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
