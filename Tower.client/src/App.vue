<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

  <!-- <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer> -->
  <ModalComponent id="createEvent" />
    <!-- <CreateEventForm /> -->
  <!-- </Modal> -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
// import { Modal } from 'bootstrap'
import CreateEventForm from './components/CreateEventForm.vue'
import ModalComponent from './components/ModelComponent.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, ModalComponent, CreateEventForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
