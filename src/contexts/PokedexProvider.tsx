"use client";

import { Pokemon, PokemonClient } from "pokenode-ts";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface PokedexProviderProps {
  children: React.ReactNode;
}

type PokedexContextType = {
  api: PokemonClient;
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>;
  pokemon: Pokemon | null;
};

export const PokedexContext = createContext({} as PokedexContextType);

export function PokedexProvider({ children }: PokedexProviderProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const api = new PokemonClient();

  return (
    <PokedexContext.Provider
      value={{
        api,
        pokemon,

        setPokemon,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
