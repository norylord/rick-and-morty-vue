<template>
  <div class="character">
    <img :src=character.image alt="">
    <div class="character__info">
      <h1>Имя: {{ character.name }}</h1>
      <h2>Статус: {{ character.status }} - {{ character.species }}</h2>
      <h3>Пол: {{ character.gender }}</h3>
      <h3>Создан: {{ character.created }}</h3>
      <label for="">Был(a) замечен(a) в эпизодах:</label>
      <div v-for="episode in character.episode" :key="episode">{{ episode }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      character: {},
    }
  },
  methods: {
    async getCharacter() {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`)
        this.character = response.data
        console.log(this.character)
      } catch {
        alert('Error')
      }
    }
  },
  mounted() {
    this.getCharacter()
  }
}
</script>

<style lang="sass" scoped>
.character
  display: flex
  justify-content: center
  flex-flow: row wrap
  padding: 20px
  background: rgba(40, 40, 40, 0.5)

  img
    width: 220px
    height: 220px


  &__info

    display: flex
    flex-flow: column nowrap
    padding: 20px

    h1, h2, h3
      margin-bottom: 40px
</style>