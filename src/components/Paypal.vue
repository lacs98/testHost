<template>
  <div ref="paypal"></div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {
  name: 'Paypal',
  props: ['cart'],
  data: function () {
    return {
      loaded: false,
      success: false
    }
  },
  mounted: function () {
    const script = document.createElement('script')
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AcxVCc0alzyV7YS2hjponiLsP_QYKycgRW5ecqeX-1dE_jC02pdcXzoupcEhmtUARSMGWjibCFEsK39n'
    script.addEventListener('load', this.setLoaded, { capture: true })
    document.body.appendChild(script)
  },
  methods: {
    setLoaded: function () {
      this.loaded = true
      window.paypal
        .Buttons({
          style: {
            color: 'blue'
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.cart.d,
                  amount: {
                    currency_code: 'USD',
                    value: this.cart.t
                  }
                }
              ]
            })
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture()
            this.$emit('success', this.success = true)
            console.log(order)
          },
          onError: err => {
            console.log(err)
          }
        })
        .render(this.$refs.paypal)
    }
  }
}
</script>
