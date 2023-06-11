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
body{
  background-image: url('https://wallpapers.com/images/featured/nucb4z97b3q78mjk.jpg');
  background-repeat: no-repeat;
  background-size:cover;
}
.lorem{
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcVf8x1hxIIL2x2LkVM2RF3_EsKKIh0an1Q&usqp=CAU');
    color: black;
    background-repeat: no-repeat;
    background-size: cover;
  }


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
