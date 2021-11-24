import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', () => {
  test('should return an array of numbers', () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[649]).toBe(650);
  });

  test('should return an array of 4 elements with pokemon names', async () => {
    const pokemons = await getPokemonsNames([1, 2, 3, 4]);

    expect(pokemons).toStrictEqual([
      { name: 'Bulbasaur', id: 1 },
      { name: 'Ivysaur', id: 2 },
      { name: 'Venusaur', id: 3 },
      { name: 'Charmander', id: 4 },
    ]);
  });

  test('getPokemonOptions should return a mixed array ', async () => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
