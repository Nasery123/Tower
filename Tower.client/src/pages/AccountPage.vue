<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>


  <section class="row">
    <div class="col-md-6 col-12 ms-2 imag" v-for="t in mytickets" :key="t.id">

      <AccountCard  :myticket="t"/>

    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      mytickets: computed(() => AppState.myTickets),


    }
  }
}
</script>

<style scoped>
imag {
  width: 20px;
  max-height: 10px;
  border-radius: 100px;

}
</style>
