<template>
   <div>
       <div class="h-60 bg-gradient-to-br from-frombanner to-tobanner flex items-center justify-center">
        <h1 class="text-white text-6xl italic font-medium">Finalizar compra</h1>
       </div>
       <div class="flex flex-col space-y-20 items-center justify-center py-20" v-if="empty === true">
          <div class="bg-primary bg-opacity-5 text-gray-700 p-6 w-7/12 flex items-center justify-center rounded-sm">Tú carrito se encuentra vacío</div>
          <router-link class="flex items-center justify-center bg-frombanner text-white rounded-lg p-4 px-10 font-medium" to="/shop" >Volver a la tienda</router-link>
       </div>
       <div v-else class="flex flex-col space-y-10 items-center justify-center py-20">
          <div class="border p-6 border-primary border-opacity-10 text-gray-400">¿Tienes un cupón? <button class="text-primary font-semibold uppercase text-sm" @click="cupon = !cupon">haz click aquí para introducir tú código</button></div>
          <div class="flex w-1/4 justify-between transform transition duration-300 ease-in-out" :class="showcupon">
            <input class="mx-5 border-0 border-b w-full border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" type="text" placeholder="Código del cupón">
            <button class="border-b w-5/12 border-gray-400 text-gray-400 text-lg font-medium hover:border-frombanner hover:text-frombanner" :disabled='!cupon'>Aplicar cupón</button>
          </div>
          <div class="italic font-semibold text-2xl text-left w-7/12">Detalles de facturación</div>
          <form class="border border-primary border-opacity-10 text-gray-700 p-16 w-7/12 space-y-10">
            <div class="flex space-x-20">
                <label class="w-96 text-right" for="username">Nombre completo <span class="text-red-500">*</span></label>
                <input class="px-2 w-full border-0 border-b border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" id="username" type="text" placeholder="Nombre completo">
            </div>
            <div class="flex space-x-20">
                <label class="w-96 text-right" for="country">País <span class="text-red-500">*</span></label>
                <input class="px-2 w-full border-0 border-b border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" id="country" type="text" placeholder="País">
            </div>
             <div class="flex space-x-20">
                <label class="w-96 text-right" for="city">Localidad / Ciudad <span class="text-red-500">*</span></label>
                <input class="px-2 w-full border-0 border-b border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" id="city" type="text" placeholder="Ciudad">
            </div>
             <div class="flex space-x-20">
                <label class="w-96 text-right" for="country">Región / Provincia <span class="text-red-500">*</span></label>
                <input class="px-2 w-full border-0 border-b border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" id="country" type="text" placeholder="Provincia">
            </div>
            <div class="flex space-x-20">
                <label class="w-96 text-right" for="phone">Teléfono <span class="text-red-500">*</span></label>
                <input class="px-2 w-full border-0 border-b border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" id="phone" type="text" placeholder="Teléfono">
            </div>
            <div class="flex space-x-20">
                <label class="w-96 text-right" for="email">Email <span class="text-red-500">*</span></label>
                <input class="px-2 w-full border-0 border-b border-gray-400 focus:ring-transparent focus:outline-none focus:border-frombanner" id="email" type="text" placeholder="Dirección de correo electrónico">
            </div>
          </form>
        <div class="italic font-semibold text-2xl text-left w-7/12">Tú orden</div>
         <div class="border border-opacity-10 border-primary text-gray-700 p-16 w-7/12 space-y-10">
         <div class="space-y-6">
             <div class="" v-for="productos in cart.state.cart" :key="productos.id">
                 <div class="grid grid-cols-2 justify-items-center pb-4 border-b">
                    <div class="flex items-center justify-between w-full font-semibold"> {{productos.name}}<div class="text-sm text-gray-400 font-normal">x {{productos.quantity}}</div></div>
                    <div class="text-left font-semibold w-12">$ {{productos.quantity * productos.price}}</div>
                     </div>
             </div>
             <div class="font-semibold grid grid-cols-2 justify-items-center pb-6 border-b">
                 <div class="">Total</div>
                 <div class="pr-2">$ {{total.t}}</div>
             </div>
             <div class="py-6 border-b"><input type="radio" v-model="picked" value="1" class="mr-4 text-black focus:ring-transparent" /> Transferencia bancaria (solo para bolivia)</div>
             <div class="py-6 border-b"><input v-model="picked" value="2" class="mr-4 text-black focus:ring-transparent" type="radio"> Paypal</div>
            <div class="flex items-center justify-center w-full">
             <button class="bg-frombanner text-white text-lg py-4 font-medium w-full flex items-center justify-center rounded-md" v-if="picked === '1'">Transferencia</button>
             <div class="w-full mx-20 px-2 pt-4 rounded-lg" v-else-if="picked === '2'">
               <paypal class="p-5" :cart ="total" />
               </div>
             <button v-else class="bg-frombanner text-white text-lg py-4 font-medium w-full flex items-center justify-center rounded-md">Comprar</button>
            </div>
         </div>
         </div>
       </div>
   </div>
</template>
<script>
import { inject, ref, toRef, watch, computed } from 'vue'
import Paypal from '../components/Paypal.vue'
export default {
  name: 'Checkout',
  components: {
    Paypal
  },
  setup () {
    const cart = inject('cart')
    const empty = ref(cart.methods.isCartempty())
    const cartstate = toRef(cart.state, 'cart')
    const cartempty = ref('false')
    watch(cartstate.value, () => { empty.value = cart.methods.isCartempty() })
    const total = computed(() => {
      const x = { d: '', t: 0 }
      cart.state.cart.forEach((e) => {
        x.d += e.name + ' x' + e.quantity + ', '
        x.t += e.quantity * e.price
      })
      return x
    })
    const paypalshow = ref('hidden')

    const cupon = ref(false)
    const showcupon = ref('-translate-y-full opacity-0')
    watch(cupon, (value) => { if (value === true) { showcupon.value = '' } else { showcupon.value = '-translate-y-full opacity-0' } })

    const picked = ref(false)

    return {
      cart,
      cartempty,
      cartstate,
      empty,
      total,
      paypalshow,
      picked,
      cupon,
      showcupon
    }
  }
}
</script>
