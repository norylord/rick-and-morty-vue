<template>
  <input :value="modelValue" class="input" type="text" @input='updateInput'>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style lang="sass" scoped>
.input
  padding: 10px 15px
  font-size: 30px
  margin: 20px 0
  width: 100%
  outline: none
  border: 0
  border-bottom: 2px solid gray
  border-radius: 5px
  background: rgba(66, 185, 131, 0.1)


  &:focus
    border-bottom: 2px solid #42b983
    transition: border-bottom-color 0.3s ease-in-out

</style>