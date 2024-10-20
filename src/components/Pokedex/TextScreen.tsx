"use client";

import { usePokedex } from "@/contexts/PokedexProvider";
import { KeyboardEvent } from "react";

export function TextScreen() {
  const { api, setPokemon, updateDescription } = usePokedex();

  async function handleSearchPokemon(e: KeyboardEvent) {
    if (e.key !== "Enter") return;

    const searchTerm = (e.currentTarget as HTMLInputElement).value;
    const isId = /^\d+$/.test(searchTerm);

    try {
      const pokemon = isId
        ? await api.getPokemonById(Number(searchTerm))
        : await api.getPokemonByName(searchTerm.toLowerCase());

      setPokemon(pokemon);
      updateDescription(pokemon);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="absolute left-[2vmin] top-[2.8vmin] z-[2] flex h-[8vmin] w-[23vmin] overflow-y-auto rounded-[3px] border-[0.3px] border-black bg-pokedex-gray p-2 text-xs">
      <p
        className="flex h-fit font-vt323 leading-3 tracking-tighter"
        id="text-screen"
      ></p>
      <input
        onKeyDown={handleSearchPokemon}
        id="val-screen"
        className="h-fit w-full flex-1 truncate bg-inherit p-0 px-1 leading-3 tracking-tight outline-none disabled:hidden"
        autoComplete="off"
        spellCheck="false"
        disabled
      />
    </div>
  );
}
