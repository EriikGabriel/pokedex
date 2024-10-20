"use client";

import { AudioStorageType, usePokedex } from "@contexts/PokedexProvider";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PokemonListNav } from "./PokemonListNav";
import { PokemonListItemType } from "./Screen";

interface PokemonListMoreProps {
  showMore: boolean;
}

export function PokemonListMore({ showMore }: PokemonListMoreProps) {
  const [pokemonList, setPokemonList] = useState<PokemonListItemType[]>([]);
  const [offset, setOffset] = useState(0);

  const { api } = usePokedex();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!showMore) return;

    if (inView) {
      const loadMorePokemons = async () => {
        // Once the page 8 is reached repeat the process all over again.
        const nextOffset = offset + 20;

        try {
          const newListPokemons = await api.listPokemons(nextOffset);
          const pokemonListRequests = newListPokemons.results.map((res) =>
            api.getPokemonByName(res.name),
          );

          const newPokemonsResolves = await Promise.all(pokemonListRequests);

          const newPokemons = newPokemonsResolves.map((pokemon) => {
            const audioList = JSON.parse(
              localStorage.getItem("@pokedex:audios") ?? "[]",
            ) as AudioStorageType[];

            const audioStorage = audioList.find(
              (audio) => audio.pokemon === pokemon.name,
            );

            return {
              id: pokemon.id,
              icon: pokemon.sprites.front_default ?? "",
              hasDiscovered: !!audioStorage,
            };
          });

          setPokemonList((prevPokemons) => [...prevPokemons, ...newPokemons]);
          setOffset(nextOffset);
        } catch (error) {
          console.log("erro de requisição", error);
          return;
        }
      };

      loadMorePokemons();
    }
  }, [api, inView, offset, showMore]);

  return (
    <>
      <PokemonListNav pokemonList={pokemonList} />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <></>
      </div>
    </>
  );
}
