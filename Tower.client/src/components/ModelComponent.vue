<template>
    <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">

    <CreateEventForm />
    </div>
    </div>
</template>


<script>
import CreateEventForm from './CreateEventForm.vue';

export default {
    setup() {
        return {};
    },
    components: { CreateEventForm }
}
</script>


<style lang="scss" scoped>

</style>
