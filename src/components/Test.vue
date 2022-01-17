<template>
    <h1>asd</h1>
</template>
<script>

export default ({
  Name: 'Test',
  props: {
    test: String,
    age: Number
  },
  setup (props) {
    console.log(props.age)
    return {

    }
  }
})
</script>
