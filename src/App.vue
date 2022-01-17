<template>
<div class="absolute w-screen h-screen overflow-x-hidden">
<!-- Nav -->
<Navbar/>
<!-- Body -->
  <div>
    <router-view />
  </div>
</div>
</template>
<script>
import { provide } from 'vue'
import Navbar from './components/Navbar.vue'
import cart from './store/cart'
import user from './store/user'

export default ({
  name: 'App',
  components: { Navbar },
  setup () {
    provide('cart', cart)
    provide('user', user)
    return {
    }
  }
})
</script>
