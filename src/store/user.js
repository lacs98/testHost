import { reactive, readonly } from 'vue'
// firebase import
import { db, auth } from '../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const state = reactive({
  usuario: null,
  isAuthReady: false
})

const methods = {

  async get () {
    const usersCol = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCol)
    const usersList = usersSnapshot.docs.map(doc => doc.data())
    return usersList
  },
  test (email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user
        return user
      // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        return console.log({ errorCode, errorMessage })
      // ..
      })
  },
  setUser (p) {
    state.usuario = p
    console.log('el usuario cambió:', state.usuario)
  },
  async signup (p) {
    console.log('signup')
    // async code
    const res = await createUserWithEmailAndPassword(auth, p.email, p.password)
    if (res) { this.setUser(res.user) } else { throw new Error('no se pudo registrar') }
  },
  async login (p) {
    // async code
    const res = await signInWithEmailAndPassword(auth, p.email, p.password)
    if (res) { this.setUser(res.user) } else { throw new Error('no se pudo iniciar sesión') }
  },
  async logout () {
    console.log('logout')
    await signOut(auth)
    this.setUser(null)
  },
  setIsAuthReady (p) {
    state.isAuthReady = p
  }

}

const unsub = onAuthStateChanged(auth, (user) => {
  methods.setIsAuthReady(true)
  methods.setUser(user)
  unsub()
})

export default {
  state: readonly(state),
  methods
}
