import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('the 4 options should be displayed correctly ', () => {
    const liTags = wrapper.findAll('li');
    expect(liTags.length).toBe(4);

    expect(liTags[0].text()).toBe('Bulbasaur');
    expect(liTags[1].text()).toBe('Ivysaur');
    expect(liTags[2].text()).toBe('Venusaur');
    expect(liTags[3].text()).toBe('Charmander');
  });

  test('should emit "selection" with params on click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li');
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    expect(wrapper.emitted('selectedPokemon').length).toBe(4);
    expect(wrapper.emitted('selectedPokemon')[0]).toEqual([1]);
    expect(wrapper.emitted('selectedPokemon')[1]).toEqual([2]);
    expect(wrapper.emitted('selectedPokemon')[2]).toEqual([3]);
    expect(wrapper.emitted('selectedPokemon')[3]).toEqual([4]);
  });
});
