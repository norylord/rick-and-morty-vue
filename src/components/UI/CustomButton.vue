<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'customButton'
}
</script>

<style lang="sass" scoped>
button
  padding: 15px
  border-radius: 5px
  margin: 10px
  color: #fff
  background: linear-gradient(to right, #338942, #7fbf42)
  border: 0
  cursor: pointer


</style>