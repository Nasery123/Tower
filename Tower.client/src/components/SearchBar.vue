<template>
    <form @submit.prevent="searchEvent()">
    <div class="search me-3">

    <input type="text" v-model="search" placeholder="Search for event">
    <button type="submit"> Search</button>
    </div>

</form>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';

export default {
    setup(){
        const search = ref('')
        return {
            async searchEvent(){
                try {
                    const searchTerm = search.value
                    await eventsService.searchEvent(searchTerm)
                } catch (error) {
                    logger.log(error)
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
