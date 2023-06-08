<template>

        <!-- event description part -->
        <div class="container-fluid">
<div class="row" v-if="event">
      <div class="d-flex">
      <div class="col-4 pt-2">
        <img class="img-fluid" :src="event.coverImg" alt="">
      </div>
      <div class="col- px-2 py-2">
        <div class="d-flex justify-content-between">
        <h3>Event Title</h3>
        <p>when</p>
      </div>
        <div class="d-flex justify-content-between">
          <p>{{ event.type }}</p>
          <p>{{ event.startDate }}</p>
        </div>
        <p>{{ event.description }}

        </p>
        <div class="d-flex justify-content-between">
          <p><span id="spot">100</span>Spot Left</p>
          <button class="btn btn-primary rounded ">Attend 🙋‍♂️</button>
        </div>
      </div>
    </div>
    </div>


<!-- who is attending section -->
    <!-- <div class="row mx-2 mt-2">
      <p>See who is Attending</p>
      <div class="bg-white">

        <p>this people are attending</p>

      </div> -->
<!-- comment section -->
      <!-- <div class="row">
        <div class="mt-4">
          <textarea name="comment" id="" cols="30" rows="4" placeholder="share your idea"></textarea>
        </div>
      </div>

    </div>
</div> -->
</div>

</template>


<script>
import { onMounted } from 'vue';
import { eventsService } from '../services/EventsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import {commentsService} from'../services/CommentsService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
    setup(){
        const route = useRoute()


        async function getCommentsByEventId(){
            try {
                const eventId = route.params.id
                await commentsService.getCommentsByEventId(eventId)

            } catch (error) {
Pop.error(error)
            }
        }
        async function getEventsById(){
            try {
                const eventId = route.params.id
                await eventsService.getEventsById(eventId)
            } catch (error) {
                Pop.toast(error.message,'error')
                logger.log(error)

            }
        }
        onMounted(() =>{
            getEventsById()
            getCommentsByEventId()
        })
        return {
            comments: computed(() => AppState.comments)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
