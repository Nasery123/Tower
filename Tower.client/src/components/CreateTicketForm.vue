<template></template>


<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup(){
        const editable = ref({})
        const route = useRoute()

        return {
            editable,
            async createTicket(){
                const formData = editable.value
                formData.eventId = route.params.id
                await tickets
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
