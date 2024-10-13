"use client";

import { Pokemon, PokemonClient } from "pokenode-ts";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface PokedexProviderProps {
  children: React.ReactNode;
}

type SpriteOptionsType = {
  gender: "male" | "female";
  rotated: boolean;
  shiny: boolean;
};

type PokedexContextType = {
  api: PokemonClient;
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>;
  pokemon: Pokemon | null;
  setSpriteOptions: Dispatch<SetStateAction<SpriteOptionsType>>;
  spriteOptions: SpriteOptionsType;
};

const PokedexContext = createContext({} as PokedexContextType);

export function PokedexProvider({ children }: PokedexProviderProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [spriteOptions, setSpriteOptions] = useState<SpriteOptionsType>({
    gender: "male",
    rotated: false,
    shiny: false,
  });

  const api = new PokemonClient();

  return (
    <PokedexContext.Provider
      value={{
        api,
        pokemon,
        setPokemon,
        spriteOptions,
        setSpriteOptions,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export const usePokedex = (): PokedexContextType => {
  const pokedexContext = useContext(PokedexContext);
  return pokedexContext;
};
