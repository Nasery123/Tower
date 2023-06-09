<template>
      <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Create an Event</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

         <form id="createEvent" @submit.prevent="createEvent()">
            <div class="modal-body">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Album Title"
                        v-model="editable.name">
                    <label for="floatingInput">Event Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Cover Image"
                        v-model="editable.coverImg">
                    <label for="floatingPassword">Cover Image</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Cover Image"
                        v-model="editable.description">
                    <label for="floatingPassword">Description</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="location"
                        v-model="editable.location">
                    <label for="floatingPassword">Location</label>
                </div>
                <div class="form-floating">
                    <input type="Number" class="form-control" id="floatingPassword" placeholder="Capacity"
                        v-model="editable.capacity">
                    <label for="floatingPassword">Capacity</label>
                </div>
                <div class="form-floating">
                    <input type="Date" class="form-control" id="floatingPassword" placeholder="Start Date"
                        v-model="editable.startDate">
                    <label for="floatingPassword">Start Date</label>
                </div>
                <div>
                    <label for="type">select the type</label>
                    <select name="type" id="type" v-model="editable.type">
                        <option value="">All</option>
                        <option value="expos">Expos</option>
                        <option value="convention">Convetion</option>
                        <option value="others">others</option>
                        <option value="sport">sports</option>
                        <option value="digital">Digital</option>
                        <option value="concert">Concert</option>

                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Event</button>
            </div>
        </form>

    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { useRouter } from 'vue-router';

export default {
    setup(){
        const editable = ref({})
        const router = useRouter()
        return {
            editable,
            async createEvent(){
                try {
                    const formData = editable.value
                    const newEvent = await eventsService.createEvent(formData)
                    // editable.value = {}
                    router.push({name:'EventDetails', params:{id: newEvent.id}})
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
