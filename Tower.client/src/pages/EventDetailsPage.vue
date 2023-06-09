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
        <h3>{{ event.name}}</h3>
        <!-- <button class="btn btn-primary" v-if="isCanceled"> </button> -->
        <button  class="btn btn-primary" @click="cancelEvent()">Cancel Event</button>
      </div>
        <div class="d-flex justify-content-between">
          <p>{{ event.type }}</p>
          <p>{{ event.startDate }}</p>
        </div>
        <p>{{ event.description }}

        </p>
        <div class="d-flex justify-content-between">
          <!-- <p><span id="spot">100</span>Spot Left</p> -->
          <p>{{ event.capacity }} Event Capacity </p>
          <p> {{event.remainingSpots }} Spots Left</p>
          <button v-if="!haveTicket && !event.isCanceled" @click="createTicket()" class="btn btn-primary rounded ">Attend 🙋‍♂️</button>
          <p v-if="event.isCanceled" class=''> event Canceled</p>
          <p v-if="event.capacity == 0"> no spots left</p>
          <!-- <button class="btn btn-primary rounded" @click="deleteTicket()">unAttend</button> -->
        </div>
      </div>
    </div>
    </div>


<!-- who is attending section -->
    <div class="row mx-2 mt-2">
      <p>See who is Attending</p>
      <div class="bg-white col-md-12 col-12">
        <img v-for="t in tickets" :key="t.id" class=" rounded-circle" :src="t.profile.picture" :alt="t.profile.name">

        <!-- <p>{{ ticket.profitle.picture }}</p> -->

      </div>
<!-- comment section -->
      <div class="row">
          <form @submit="createComment">
        <div class="mt-4 align-items-center col-md-12 col-12">
          <textarea name="body" cols="50" rows="4" placeholder="share your idea" id="body" v-model="editable.body">{{ editable.body }}</textarea>
          </div>
          <button class="btn btn-primary" type="submit">Post Comment</button>
        </form>
    </div>
      </div>
<div class="col-8">
    <div class="" v-for="c in comments" :key="c.id">

        <CommentCard :comment="c"/>

    </div>
</div>
    <!-- </div>
 </div> -->
<!-- </div> -->
        </div>

</template>


<script>
import { onMounted, ref } from 'vue';
import { eventsService } from '../services/EventsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import {commentsService} from'../services/CommentsService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import {ticketsService} from '../services/TicketsService.js';

export default {
    setup(){
        const editable = ref({})
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
        async function getTicketByEventId(){
            try {
                const eventId = route.params.id
                await ticketsService.getTicketByEventId(eventId)
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() =>{
            getEventsById()
            getCommentsByEventId()
            getTicketByEventId()
        })
        return {
            editable,
            // we did this logic inorder to draw after making the ticket and moved the remainingSpots in template.
            // remainingSpots :computed(()=>{ return AppState.activeEvent.capacity - AppState.activeEvent.ticketCount}),
            event:computed(() => AppState.activeEvent),
            comments: computed(() => AppState.comments),
            tickets: computed(() => AppState.tickets),
            haveTicket: computed(() => AppState.tickets.find(t => t.accountId == AppState.user.id)),
            isCanceled:computed(()=>AppState.events.isCanceled == true),
async createComment(){
    try {
        window.event.preventDefault()
        const formData = editable.value
        // const eventId =
        formData.eventId =route.params.id
        await commentsService.createComment(formData)
    } catch (error) {
        Pop.error(error)
    }
},
        async createTicket(){
            try {
                const eventId = route.params.id
                AppState.activeEvent.remainingSpots--
                await ticketsService.createTicket(eventId)

            } catch (error) {
                Pop.error(error)
            }

        },

        async cancelEvent(){
            try {

                if(await Pop.confirm){

                    await eventsService.removeEvent(route.params.id)
                }
            } catch (error) {
                Pop.error(error)
                logger.log(error)

            }
        }



        }
    }
}
</script>


<style lang="scss" scoped>

</style>
