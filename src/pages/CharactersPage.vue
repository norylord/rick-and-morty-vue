<template>
  <div>
    <h1 style="text-align: center">Персонажи</h1>
    <custom-input v-model="searchQuery" placeholder="Поиск..."/>
    <div class="page__switchers">
      <custom-button @click="switchPage('begin')"><p>&lt;&lt;</p></custom-button>
      <custom-button @click="switchPage('previous')"><p>&lt;</p></custom-button>
      <h1>{{ params.page }}</h1>
      <custom-button @click="switchPage('next')"><p>&gt;</p></custom-button>
      <custom-button @click="switchPage('end')"><p>&gt;&gt;</p></custom-button>
    </div>
    <div class="character__list">
      <character-card v-for="character in characters.results" :key="character.id" :character="character"/>
    </div>
    <div class="page__switchers">
      <custom-button @click="switchPage('begin')"><p>&lt;&lt;</p></custom-button>
      <custom-button @click="switchPage('previous')"><p>&lt;</p></custom-button>
      <h1>{{ params.page }}</h1>
      <custom-button @click="switchPage('next')"><p>&gt;</p></custom-button>
      <custom-button @click="switchPage('end')"><p>&gt;&gt;</p></custom-button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import CharacterCard from "@/components/CharacterCard";
import CustomInput from "@/components/UI/CustomInput";
import RequestService from "@/services/RequestService";
import CustomButton from "@/components/UI/CustomButton";

export default {
  components: {CustomButton, CustomInput, CharacterCard},
  data() {
    return {
      characters: [],
      searchQuery: '',
      page: 1,
      params: {
        name: '',
        page: 1
      }
    }
  },
  methods: {
    async getAllCharacters() {
      try {
        // const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        const response = await RequestService.allCharacters(this.params)
        this.characters = response.data
      } catch {
        alert('Error')
      }
    },
    switchPage(type) {
      switch (type) {
        case 'next':
          this.page = this.page < this.characters.info.pages ? this.page + 1 : this.page
          break
        case 'previous':
          this.page = this.page > 1 ? this.page - 1 : this.page
          break
        case 'end':
          this.page = this.characters.info.pages
          break
        case 'begin':
          this.page = 1
          break
        default:
          break
      }
    }
  },
  mounted() {
    this.getAllCharacters()
  },
  // computed: {
  //   searchedPosts() {
  //     return this.characters.filter(character => character.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
  //   }
  // },
  watch: {
    searchQuery(newValue) {
      this.params.name = newValue
      this.getAllCharacters(this.params)
    },
    page(newValue) {
      this.params.page = newValue
      this.getAllCharacters(this.params)
    }
  }
}

</script>

<style lang="sass" scoped>
.character__list
  display: flex
  justify-content: space-around
  flex-flow: row wrap

.page__switchers
  display: flex
  align-items: center
  justify-content: center
  flex-flow: row wrap

  h1
    font-size: 45px
    margin: 0 20px
</style>