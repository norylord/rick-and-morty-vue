<template>
  <div class="home">
    <h1 class="home__title">Добро пожаловать!</h1>
    <p>Это мой первый проект, созданный с помощью Vue 3</p>
    <p>@Norylord</p>
    <div class="card__container">
      <character-card v-if="character.hasOwnProperty('name')" :character="character"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CharacterCard from "@/components/CharacterCard";

export default {
  components: {CharacterCard},
  data(){
    return {
      character: {}
    }
  },
  methods: {
    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    async getRandomCharacter() {
      try {
        const characterId = this.randomInteger(1, 826)
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        this.character = response.data
        console.log(this.character)
      } catch {
        alert('Error')
      }
    },
  },
  mounted() {
    this.getRandomCharacter()
  }


}
</script>

<style lang="sass" scoped>
.home
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  min-height: 70vh
  align-items: center
  margin: 50px
  text-align: center

  &__title
    font-size: 50px
    margin: 50px

.card__container
  margin: 50px
</style>