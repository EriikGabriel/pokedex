"use server";

import { AudioStorageType } from "@/contexts/PokedexProvider";
import { PokemonClient } from "pokenode-ts";

export async function listPokemon(
  offset: number,
  listDiscoveredPokemons: AudioStorageType[],
) {
  const api = new PokemonClient();

  const newListPokemons = await api.listPokemons(offset);
  const pokemonListRequests = newListPokemons.results.map((res) =>
    api.getPokemonByName(res.name),
  );

  const newPokemonsResolves = await Promise.all(pokemonListRequests);

  const newPokemons = newPokemonsResolves.map((pokemon) => {
    const audioStorage = listDiscoveredPokemons.find(
      (audio) => audio.pokemon === pokemon.name,
    );

    return {
      id: pokemon.id,
      icon: pokemon.sprites.front_default ?? "",
      hasDiscovered: !!audioStorage,
    };
  });

  return newPokemons;
}
