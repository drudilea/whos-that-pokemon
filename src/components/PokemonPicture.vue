<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      class="hidden-pokemon"
      alt="pokemon"
      :src="imgSrc"
    />
    <img v-else class="fade-in" :src="imgSrc" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
      default: 1,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 200px;
}

img {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  height: 200px;
  position: absolute;
  user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>
