import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test('should match the snapshot when pokemons are already loaded', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call mixPokemonsArray when mounted', () => {
    const mixPokemonsArray = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonsArray'
    );
    shallowMount(PokemonPage);

    expect(mixPokemonsArray).toHaveBeenCalled();
  });

  test('should render both components, PokemonPicture and PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    const pokemonPicture = wrapper.find('pokemon-picture-stub');
    const pokemonOptions = wrapper.find('pokemon-options-stub');

    expect(pokemonPicture.exists()).toBeTruthy();
    expect(pokemonOptions.exists()).toBeTruthy();

    expect(pokemonPicture.attributes('pokemonid')).toBe(
      pokemons[0].id.toString()
    );
    expect(pokemonOptions.attributes('pokemons')).toBeTruthy();
  });

  test('checkAnswer tests', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    await wrapper.vm.checkAnswer(pokemons[0].id);

    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.find('h2').text()).toBe(`Correcto! Es ${pokemons[0].name}`);
    expect(wrapper.vm.showPokemon).toBe(true);

    await wrapper.vm.checkAnswer(pokemons[2].id);
    expect(wrapper.vm.message).toBe(`Oops! Era ${pokemons[0].name}`);
  });
});
