<template>
<div>
    <div class="row">

        <div class="d-flex">
        <div class="col-4 m-2">
            <img class="img-fluid" :src="myticket.event.coverImg" alt="">
        </div>
        <div class="col-">
            <p>
               {{ myticket.event.name }}
               {{ myticket.event.startDate }}
               {{  }}
            </p>
            <div>
                {{ }}
            </div>
        </div>
        <p><i @click="deleteTicket(myticket.id)" class="mdi mdi-delete"></i></p>
        </div>


    </div>
</div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { ticketsService } from '../services/TicketsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'

export default {
    props:{
        myticket:{type:Object, required:true}
    },
    setup(){
        return {
            myTicket:computed(() => AppState.myTickets),
            async deleteTicket(ticketId){
            try {
                if(await Pop.confirm){
                    // const ticket = AppState.myTickets.find(t => t.eventId == AppState.events.id)
                    logger.log('this is the ticket', ticketId)
                    await ticketsService.removeTicket(ticketId)
                }

            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }
        },
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
