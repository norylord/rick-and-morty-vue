<template>
  <div class="card">
    <img :src=character.image alt="">
    <div class="card__info">
      <div class="card__info__section">
        <h1 class="card__info__name" @click="$router.push(`/characters/${character.id}`)">{{ character.name }}</h1>
        <div class="card__info__status">
          <div :class="[this.character.status === 'Alive' ? 'alive' : 'dead','status__icon']"></div>
          {{ character.status }} - {{ character.species }}
        </div>
      </div>
      <div class="card__info__section">
        <label>Последняя локация:</label>
        <div class="card__info__data">{{ character.location.name }}</div>
      </div>
      <div class="card__info__section">
        <label>Первое появление:</label>
        <div class="card__info__data">{{ locationName }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      locationName: ''
    }
  },
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getCharacterFirstEpisode() {
      try {
        const response = await axios.get(`${this.character.episode[0]}`)
        this.locationName = response.data.name
      } catch {
        alert('Error')
      }
    }
  },
  mounted() {
    this.getCharacterFirstEpisode()
  }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-flow: column nowrap
  background: rgba(41, 42, 46, 0.95)
  border-radius: 20px
  text-align: start
  word-break: break-word
  margin: 20px 10px

  .status__icon
    height: 15px
    width: 15px
    margin-right: 5px
    border-radius: 50%

  .alive
    background: rgb(85, 204, 68)

  .dead
    background: rgb(214, 61, 46)

  &__info
    padding: 15px 20px
    width: 300px
    display: flex
    flex-flow: column nowrap
    justify-content: space-around

    label
      color: rgba(115, 118, 128, 0.95)

    &__name
      cursor: pointer
      font-size: 25px
      margin-bottom: 10px

      &:hover
        color: #42b983

    &__status
      display: flex
      align-items: center

    &__data
      font-size: 20px

  img
    width: 300px
    height: 300px
    border-radius: 20px 20px 0 0

@media (min-width: 630px)
  .card
    flex-flow: row nowrap
    flex: 0 0 45%

    img
      border-radius: 20px 0 0 20px

@media (min-width: 768px)
  .card
    flex-flow: row nowrap
    flex: 0 0 45%

    img
      border-radius: 20px 0 0 20px

@media (min-width: 1200px)
  .card
    flex-flow: row nowrap
    flex: 0 0 45%

    img
      border-radius: 20px 0 0 20px
</style>