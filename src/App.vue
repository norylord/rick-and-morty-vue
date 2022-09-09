<template>
  <NavBar/>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar}


}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: "Open Sans", sans-serif
  color: #bafc9c
  text-decoration: none

.app
  display: flex
  justify-content: center
  align-items: center

body
  background: linear-gradient(to bottom, #25284d, #4e6b24)
  min-height: 100vh

.wrapper
  margin: 20px auto
  padding: 16px
  display: flex
  justify-content: center
  max-width: 1440px
</style>