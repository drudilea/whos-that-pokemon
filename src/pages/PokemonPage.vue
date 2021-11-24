<template>
  <div v-if="!pokemon">
    <h1>Espere por favor...</h1>
  </div>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonsArr"
      @selectedPokemon="checkAnswer($event)"
    />

    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions';
import PokemonPicture from '@/components/PokemonPicture';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonsArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonsArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectedId === this.pokemon.id) {
        this.message = `Correcto! Es ${this.pokemon.name}`;
      } else {
        this.message = `Oops! Era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.initVariables();
      this.mixPokemonsArray();
    },
    initVariables() {
      this.pokemonsArr = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = '';
    },
  },
  mounted() {
    this.mixPokemonsArray();
  },
};
</script>
