<template>
   <div>
       <div class="h-60 bg-gradient-to-br from-frombanner to-tobanner flex items-center justify-center">
        <h1 class="text-white text-6xl italic font-medium">Carrito</h1>
       </div>
       <div class="flex flex-col space-y-20 items-center justify-center py-20" v-if="empty === true">
          <div class="bg-primary bg-opacity-5 text-gray-700 p-6 w-7/12 flex items-center justify-center rounded-sm">Tú carrito se encuentra vacío</div>
          <router-link class="flex items-center justify-center bg-frombanner text-white rounded-lg p-4 px-10 font-medium" to="/shop" >Volver a la tienda</router-link>
       </div>
       <div v-else class="flex items-center justify-between space-x-8 mx-20 py-20 bg-white">
         <div class="bg-primary bg-opacity-5 text-gray-700 p-6  flex flex-col space-y-5 items-center justify-center rounded-sm w-4/6">
           <div class="w-full flex items-center justify-center bg-frombanner p-2 font-semibold italic text-xl text-gray-50">Carrito</div>
            <table class="table-fixed text-center w-full">
              <thead class="border-b border-collapse border-gray-200">
                <tr>
                  <th class="w-3/5 py-2">Producto</th>
                  <th class="w-1/5 py-2">Precio</th>
                  <th class="w-2/5 py-2">Cantidad</th>
                  <th class="w-1/5 py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody class="border-b border-collapse border-gray-200" v-for="producto in cart.state.cart" :key="producto.id">
                <tr>
                  <td class="py-6">
                    <div class="flex items-center justify-center space-x-10">
                      <button class="text-frombanner" @click="cart.methods.removeProduct(producto)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg></button>
                      <div><img class="object-center object-cover h-16 w-32" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg" alt=""></div>
                      <div class="w-5/12">{{producto.name}}</div>
                    </div>
                    </td>
                  <td class="py-6">{{producto.price}}</td>
                  <td class="py-6">
                    <div class="flex items-center justify-center space-x-5">
                      <button class="text-frombanner" @click="cart.methods.decreaseQ(producto)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg></button>
                      <div>{{producto.quantity}}</div>
                      <button class="text-frombanner" @click="cart.methods.increaseQ(producto)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" /></svg></button>
                    </div>
                    </td>
                  <td class="py-6">{{producto.price * producto.quantity}}</td>
                </tr>
              </tbody>
            </table>
           </div>
         <div class="bg-primary bg-opacity-5 p-6 space-y-8 w-2/6 flex flex-col items-center justify-center rounded-sm">
         <div class="w-full flex items-center justify-center bg-frombanner p-2 font-semibold italic text-xl text-gray-50">Tú orden</div>
         <div class="w-full grid grid-cols-2 justify-items-center">
           <div class="font-semibold w-full pl-20 text-left">Descripción:</div>
           <div class="ml-5 truncate w-full text-center text-sm italic">{{total.d}}</div>
         </div>
         <div class="w-full grid grid-cols-2 justify-items-center">
           <div class="font-semibold w-full pl-20 text-left">Total:</div>
           <div class="text-center text-sm w-full">{{total.t}} USD</div>
         </div>
         <router-link class="w-6/12 flex items-center justify-center bg-frombanner text-white rounded-md p-2 px-10 font-medium" to="/checkout">Comprar</router-link>
         </div>
       </div>
   </div>
</template>
<script>
import { inject, ref, toRef, watch, computed } from 'vue'
export default {
  name: 'Cart',
  components: {
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
    return {
      cart,
      cartempty,
      cartstate,
      empty,
      total
    }
  }
}
</script>
