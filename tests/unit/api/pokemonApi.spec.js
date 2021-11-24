import pokemonApi from '@/api/pokemonApi';

describe('Pokemon API', () => {
  test('Axios should be set with pokemon API', () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      'https://pokeapi.co/api/v2/pokemon'
    );
  });
});
