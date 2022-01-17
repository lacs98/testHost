<template>
   <div>
       <div class="h-96 bg-gradient-to-br from-frombanner to-tobanner flex items-center justify-center">
        <h1 class="text-white text-6xl italic font-medium">Tienda</h1>
       </div>
       <div class="pt-4 max-w-7xl mx-auto grid grid-cols-3 gap-16">
           <div class="shop flex items-center justify-around" v-for="producto in cart.state.productos" :key="producto.id">
               <div class="card">
                   <div class="relative bg-frombanner rounded-sm pb-4 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover h-80 w-72 " src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg">
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-white font-bold mb-2">{{producto.name}}</p>
                            <p class="text-base text-gray-200 font-normal">{{producto.plan}}</p>
                            <p class="text-base text-gray-200 font-normal">$ {{producto.price}}</p>
                        </div>
                        <div class="botones absolute top-0 right-0 p-2 flex items-center justify-center space-x-4">
                            <button class="h-10 w-10 rounded-full bg-white text-frombanner flex items-center justify-center disabled:opacity-50" :disabled='producto.cart' @click="cart.methods.addProduct(producto)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
           </div>
       </div>
   </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'Shop',
  components: {
  },
  setup () {
    const cart = inject('cart')
    const x = () => {
      console.log('a')
    }
    return {
      cart,
      x
    }
  }
}
</script>
