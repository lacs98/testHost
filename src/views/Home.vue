<template>
<div class="mx-40">
  <Hero/>
</div>

</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import { inject } from 'vue'

export default {
  name: 'Home',
  components: {
    Hero
  },
  setup () {
    const cart = inject('cart')
    const hidden = 'invisible'

    const x = () => { cart.methods.addProduct(1) }

    return {
      cart,
      x,
      hidden
    }
  }
}
</script>
