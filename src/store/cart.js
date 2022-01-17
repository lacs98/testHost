import { reactive, readonly } from 'vue'

const state = reactive({
  cart: [],
  productos: [
    {
      id: 1,
      name: 'Personal (1)',
      price: 72,
      cart: false,
      quantity: 1,
      plan: 'anual'
    },
    {
      id: 2,
      name: 'Tres licencias (3)',
      price: 129,
      cart: false,
      quantity: 1,
      plan: 'anual'
    },
    {
      id: 3,
      name: 'Seis licencias (6)',
      price: 194,
      cart: false,
      quantity: 1,
      plan: 'anual'
    },
    {
      id: 4,
      name: 'Personal (1)',
      price: 48,
      cart: false,
      quantity: 1,
      plan: 'semestral'
    },
    {
      id: 5,
      name: 'Tres licencias (3)',
      price: 90,
      cart: false,
      quantity: 1,
      plan: 'semestral'
    },
    {
      id: 6,
      name: 'Seis licencias (6)',
      price: 138,
      cart: false,
      quantity: 1,
      plan: 'semestral'
    }
  ]
})

const methods = {
  addProduct (product) {
    state.cart.push(product)
    state.productos.map((p) => {
      if (product.id === p.id) {
        p.cart = !p.cart
      }
    })
  },
  increaseQ (product) {
    state.productos.map((p) => {
      if (product.id === p.id) {
        p.quantity += 1
      }
    })
  },
  decreaseQ (product) {
    state.productos.map((p) => {
      if (product.id === p.id && p.quantity > 1) {
        p.quantity -= 1
      }
    })
  },
  removeProduct (product) {
    state.cart = state.cart.filter((p) => p.id !== product.id)
    state.productos.map((p) => {
      if (product.id === p.id) {
        p.cart = !p.cart
        p.quantity = 1
      }
    })
  },
  clearCart () {
    state.cart = []
    state.productos.map((p) => {
      if (p.cart === true) {
        p.cart = false
        p.quantity = 1
      }
    })
  },
  isCartempty () {
    const t = Object.entries(state.cart).length === 0
    return t
  }
}

export default {
  state: readonly(state),
  methods
}
