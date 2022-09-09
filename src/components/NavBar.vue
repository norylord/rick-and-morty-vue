<template>
  <div class="navbar">
    <h1 class="navbar__title">Rick and Morty</h1>
    <input id="navbar__toggle" type="checkbox"/>
    <label class='navbar__button__container' for="navbar__toggle">
      <div class='navbar__button'></div>
    </label>
    <div class="navbar__section">
      <div :class="[{active: active === 1}, 'navbar__item']" @click="setActiveAndSelectPage('/', 1)">Главная</div>
      <div :class="[{active: active === 2}, 'navbar__item']" @click="setActiveAndSelectPage('/characters', 2)">
        Персонажи
      </div>
      <div :class="[{active: active === 3}, 'navbar__item']" @click="setActiveAndSelectPage('/episodes', 3)">Эпизоды
      </div>
      <div :class="[{active: active === 4}, 'navbar__item']" @click="setActiveAndSelectPage('/about', 4)">О проекте
      </div>
      <div><a :class="['navbar__item']" href="https://github.com/nrylord" target="_blank">GitHub</a></div>
      <div><a :class="['navbar__item']" href="https://t.me/Norylord" target="_blank">Telegram</a></div>
    </div>

  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: 'NavBar',
  data() {
    return {
      active: 1,
      toggle: true
    }
  },
  methods: {
    setActiveAndSelectPage(path, id) {
      this.active = id
      router.push(path)
    },
    toggleDropDown() {
      this.toggle = !this.toggle
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  flex-direction: row
  justify-content: space-between
  background: linear-gradient(to right, #325788, #5f842c)
  height: 70px
  padding: 0 30px

  h1

    align-self: center

  .active
    border-bottom: 3px solid #00ff00

  &__button__container
    display: none
    height: 100%
    width: 30px
    cursor: pointer
    flex-direction: column
    justify-content: center
    align-items: center

  &__section
    display: flex
    flex: 0 0 70%
    justify-content: stretch
    align-items: stretch

    div
      cursor: pointer
      overflow: hidden
      display: flex
      flex: 1 0 auto
      justify-content: center
      align-items: center

      &:hover
        background: rgba(0, 142, 50, 0.5)

#navbar__toggle
  display: none

.navbar__button,
.navbar__button::before,
.navbar__button::after
  display: block
  background-color: #bafc9c
  position: absolute
  height: 4px
  width: 30px
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1)
  border-radius: 2px

.navbar__button::before
  content: ''
  margin-top: -8px


.navbar__button::after
  content: ''
  margin-top: 8px


#navbar__toggle:checked + .navbar__button__container .navbar__button::before
  margin-top: 0
  transform: rotate(405deg)


#navbar__toggle:checked + .navbar__button__container .navbar__button
  background: rgba(255, 255, 255, 0)


#navbar__toggle:checked + .navbar__button__container .navbar__button::after
  margin-top: 0
  transform: rotate(-405deg)


@media (max-width: 890px)
  .navbar__button__container
    display: flex

  .navbar__section
    position: absolute
    top: 0
    margin-top: 70px
    left: 0
    flex-direction: column
    width: 100%
    justify-content: center
    align-items: center

  #navbar__toggle ~ .navbar__section div
    height: 0
    margin: 0
    padding: 0
    border: 0
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1)

  #navbar__toggle:checked ~ .navbar__section div
    border: 1px solid #333
    height: 2.5em
    padding: 0.5em
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1)

  .navbar__section
    div
      display: flex
      justify-content: center
      margin: 0
      padding: 0.5em 0
      width: 100%
      background-color: #222

  .navbar__section
    div
      &:not(:last-child)
        border-bottom: 1px solid #444


</style>