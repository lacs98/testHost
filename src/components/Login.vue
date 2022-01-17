<template>
  <div class="absolute z-50 top-0 right-0 w-screen h-screen justify-around bg-gray-100 text-gray-500 py-16 items-center" :class='loginModal'>
    <button class="absolute top-0 right-0 p-5 text-primary" @click="closeLogin"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
    <div class="relative bg-white p-14 shadow-md flex flex-col items-center">
      <div class="text-white text-lg italic w-full text-center bg-primary p-4"> <span v-if="loginView">Iniciar sesión</span> <span v-else>Crear cuenta</span> </div>
      <div class="flex items-center justify-center space-x-20 p-10 text-xl ">
        <button class="hover:text-primary" @click="loginButton">Iniciar sesion</button>
        <button class="hover:text-primary" @click="signupButton">Crear cuenta</button>
      </div>
      <form v-if="loginView" @submit.prevent='login'>
        <div class="pt-20 flex space-x-10 w-full justify-center">
        <label class="w-20 text-right" for="username">E-mail :</label>
        <input v-model="formEmail" class="px-2 border-0 border-b border-gray-400  focus:outline-none focus:border-primary" type="email" required>
        </div>
        <div class="pt-20 pb-5 flex w-full space-x-10 justify-center">
        <label class="text-right" for="username">Contraseña :</label>
        <input v-model="formPassword" class="px-2 border-0 border-b border-gray-400  focus:outline-none focus:border-primary" type="password" autocomplete="on" required>
        </div>
        <div class="py-6 flex items-center justify-center w-full"><input type="checkbox" class="mr-4 text-black focus:ng-black" />Recuerdame</div>
        <div class="flex flex-col justify-center items-center w-full">
          <button type="submit" class="p-3 w-6/12 bg-primary text-white font-semibold rounded-md">Entrar</button>
          <button class="pt-10 hover:text-primary">¿Olvidaste tú contraseña?</button>
          {{error}}
        </div>
      </form>
      <form v-if="signupView" @submit.prevent='signup'>
        <div class="pt-20 flex space-x-10 w-full justify-center">
        <label class="w-20 text-right" for="username">E-mail :</label>
        <input v-model="formEmail" class="px-2 border-0 border-b border-gray-400  focus:outline-none focus:border-primary" type="email" required>
        </div>
        <div class="pt-20 pb-5 flex w-full space-x-10 justify-center">
        <label class="text-right" for="username">Contraseña :</label>
        <input v-model="formPassword" class="px-2 border-0 border-b border-gray-400  focus:outline-none focus:border-primary" type="password" autocomplete="on" required>
        </div>
        <div class="py-6 flex items-center justify-center w-full"><input type="checkbox" class="mr-4 text-black focus:ng-black" required />Acepto los terminos y condiciones</div>
        <div class="flex flex-col justify-center items-center w-full">
          <button type="submit" class="p-3 w-6/12 bg-primary text-white font-semibold rounded-md">Crear</button>
          {{error}}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { inject, ref, toRef, watch } from 'vue'
export default {
  name: 'Login',
  props: {
    state: Boolean
  },
  setup (props, { emit }) {
    const userStore = inject('user')
    const loginModal = ref('hidden')
    const user = toRef(userStore.state, 'usuario')
    const error = ref(null)
    const loginView = ref(true)
    const signupView = ref(false)

    const formEmail = ref(null)
    const formPassword = ref(null)

    watch(props, (value) => {
      if (value.state === true) { loginModal.value = 'flex' }
      if (value.state === false) { loginModal.value = 'hidden' }
    })

    const closeLogin = () => {
      emit('customchange')
    }
    const signup = async () => {
      try {
        await userStore.methods.signup({ email: formEmail.value, password: formPassword.value })
        closeLogin()
      } catch (err) {
        error.value = err.message
      }
    }
    const login = async () => {
      try {
        await userStore.methods.login({ email: formEmail.value, password: formPassword.value })
        closeLogin()
      } catch (err) {
        error.value = err.message
      }
    }

    const loginButton = () => {
      loginView.value = true
      signupView.value = false
    }
    const signupButton = () => {
      loginView.value = false
      signupView.value = true
    }

    return {
      userStore,
      user,
      signup,
      error,
      login,
      loginModal,
      closeLogin,
      formEmail,
      formPassword,
      loginView,
      signupView,
      loginButton,
      signupButton
    }
  }
}
</script>
