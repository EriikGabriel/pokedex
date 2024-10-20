"use client";

import { listPokemon } from "@/utils/list-pokemon";
import { AudioStorageType, usePokedex } from "@contexts/PokedexProvider";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PokemonListNav } from "./PokemonListNav";
import { PokemonListItemType } from "./Screen";
import { Spinner } from "./Spinner";

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
        const nextOffset = offset + 20;

        try {
          const audioList = JSON.parse(
            localStorage.getItem("@pokedex:audios") ?? "[]",
          ) as AudioStorageType[];

          const newPokemons = await listPokemon(nextOffset, audioList);

          setPokemonList((prevPokemons) => [...prevPokemons, ...newPokemons]);
          setOffset(nextOffset);
        } catch (error) {
          console.error("erro de requisição:", error);
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
        <Spinner />
      </div>
    </>
  );
}
