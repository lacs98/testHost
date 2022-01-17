<template>
    <nav class="bg-white shadow-sm text-black font-medium">
    <Login :state ='loginState' @customchange ='loginState = !loginState' />
    <div class="max-w-full p-4 md:mx-auto lg:mx-28">
      <div class="flex justify-between items-center">
        <!-- primary -->
        <div class="hidden md:flex space-x-6">
          <router-link class="hover:text-primary border-b-2 border-transparent hover:border-primary" to="/about">¿Quiénes somos?</router-link>
          <router-link class="hover:text-primary border-b-2 border-transparent hover:border-primary" to="/">Software</router-link>
          <router-link class="hover:text-primary border-b-2 border-transparent hover:border-primary" to="/">Seminario</router-link>
        </div>
        <!-- logo -->
        <router-link class="text-3xl italic font-semibold hover:text-primary" to="/"><span class="text-primary">W</span>hatsEZ</router-link>
        <!-- secondary -->
        <div class="hidden md:flex space-x-6">
          <router-link class="hover:text-primary border-b-2 border-transparent hover:border-primary" to="/shop">Tienda</router-link>
          <router-link class="hover:text-primary border-b-2 border-transparent hover:border-primary" to="/">Contáctanos</router-link>
          <router-link class="relative flex ml-8 items-center" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
            <button class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full disabled:opacity-0" :disabled='empty'></button>
          </router-link>
          <button v-if="userStore.state.usuario" @click="logOut" >{{userStore.state.usuario.email}}</button>
          <button v-else class="hover:text-primary" @click="loginState = !loginState"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" /></svg></button>
        </div>
        <!-- mobile -->
        <button class="md:hidden flex items-center text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
        </button>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="absolute w-64 space-y-6 py-7 px-2 bg-primary shadow-md text-gray-50 inset-y-0 left-0 text-sm md:hidden transform transition duration-200 ease-in-out" :class="show">
          <router-link class="text-3xl flex justify-center italic font-semibold" to="/" @click="modal = !modal">WhatsEZ</router-link>
          <router-link class="block py-2 px-4" to="/about" @click="modal = !modal">¿Quiénes somos?</router-link>
          <router-link class="block py-2 px-4" to="/" @click="modal = !modal">Software</router-link>
          <router-link class="block py-2 px-4" to="/" @click="modal = !modal">Seminario</router-link>
          <router-link class="block py-2 px-4" to="/shop" @click="modal = !modal">Tienda</router-link>
          <router-link class="block py-2 px-4" to="/" @click="modal = !modal">Contáctanos</router-link>
          <button class="text-black bg-white rounded-lg py-2 px-4 flex justify-between" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
           <div class="px-4">Iniciar sesión</div>
            </button>
    </div>
    <!-- sticky cart -->
    <button class="fixed bottom-6 right-10 flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full z-40 transform transition duration-200 ease-in-out disabled:opacity-0" @click="cartbutton = !cartbutton" :disabled='empty'>
      <span class="absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white bg-red-600 text-white"></span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
    </button>
    <!-- cart -->
    <div class="fixed shadow-md overflow-auto overflow-none no-scrollbar h-full w-full md:w-80 space-y-6 py-7 px-2 bg-frombanner text-gray-50 inset-y-0 right-0 text-sm transform transition duration-200 ease-in-out z-50" :class="showcart">
          <div class="text-3xl flex justify-around items-center italic font-semibold">
            <router-link to="/cart" @click="cartbutton = !cartbutton"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></router-link>
            <div>Carrito</div>
            <button @click="cartbutton = !cartbutton"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
            </div>
          <div class="space-y-7 flex flex-col">
           <div class="shop flex items-center justify-around" v-for="producto in cart.state.cart" :key="producto.id">
               <div class="card">
                   <div class="relative bg-gray-100 rounded w-72 p-4 flex justify-around items-center">
                        <img class="object-center object-cover rounded-full h-20 w-20" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg">
                        <div class="text-center px-4">
                            <p class="text-black font-bold mb-2">{{producto.name}}</p>
                            <p class="absolute bottom-0 right-0 text-black italic font-normal px-2 text-sm">{{producto.plan}}</p>
                            <div class="flex justify-between text-sm">
                              <p class="text-gray-500 font-normal">{{producto.quantity}}x</p>
                              <p class="text-gray-500 font-normal">$ {{producto.price * producto.quantity}}</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
          </div>
            <button class="absolute bottom-3 right-3" @click="cartbutton = !cartbutton"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
    </div>
  </nav>
</template>
<script>
import { inject, ref, watch } from 'vue'
import Login from './Login.vue'
export default {
  components: {
    Login
  },
  setup () {
    const cart = inject('cart')
    const userStore = inject('user')
    const modal = ref(false)
    const cartbutton = ref(false)
    const empty = ref(true)
    const loginState = ref(false)

    const show = ref('-translate-x-full')
    const showcart = ref('translate-x-full')

    const logOut = () => {
      userStore.methods.logout()
    }

    watch(modal, (value) => { if (value === true) { show.value = '' } else { show.value = '-translate-x-full' } })
    watch(cartbutton, (value) => { if (value === true) { showcart.value = '' } else { showcart.value = 'translate-x-full' } })
    watch(cart.state.cart, () => { empty.value = cart.methods.isCartempty() })

    return {
      cart,
      modal,
      cartbutton,
      empty,
      show,
      showcart,
      loginState,
      userStore,
      logOut
    }
  }
}
</script>
