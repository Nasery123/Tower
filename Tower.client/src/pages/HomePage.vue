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
<div class="row">
  <div class="col-3 ms-2 border-circle my-2" v-for="e in events" :key="e.id">
    <card class="card ">

      <EventCard :event="e" />
    </card>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { onMounted } from 'vue';
import {eventsService} from '../services/EventsService.js'
import EventCard from '../components/EventCard.vue';

export default {
    setup() {
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
            events: computed(() => AppState.events)
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
