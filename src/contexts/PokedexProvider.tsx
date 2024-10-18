"use client";

import { SCANNING_POKEMON_AUDIO } from "@constants/audios";
import { pokedexTTS } from "@utils/pokedex-tts";
import { TtsAudioFile } from "fakeyou.ts";
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
  updateDescription: (pokemon: Pokemon) => void;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

const PokedexContext = createContext({} as PokedexContextType);

export function PokedexProvider({ children }: PokedexProviderProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [spriteOptions, setSpriteOptions] = useState<SpriteOptionsType>({
    gender: "male",
    rotated: false,
    shiny: false,
  });
  const [isSearching, setIsSearching] = useState(true);

  const api = new PokemonClient();

  async function updateDescription(pokemon?: Pokemon) {
    if (!pokemon) return;

    const screenNumber = document.querySelector(
      "#text-screen",
    ) as HTMLParagraphElement;

    const pokemonSpecies = await api.getPokemonSpeciesById(pokemon.id);
    const flavorText =
      pokemonSpecies.flavor_text_entries.find(
        (entry) => entry.language.name === "en",
      )?.flavor_text ?? "No description found.";

    const flavorTextCleaned = flavorText
      .replaceAll(/\n/g, " ")
      .replaceAll(/\f/g, " ")
      .replaceAll("POKéMON", "Pokémon");

    setIsSearching(true);

    console.warn(">> @Playing sound");
    screenNumber.innerHTML = "Searching...";

    const audio = await pokedexTTS(`${pokemon.name}. ${flavorTextCleaned}`);
    const descriptionAudio = JSON.parse(audio as string) as TtsAudioFile;

    setIsSearching(false);

    if (descriptionAudio) {
      console.log(descriptionAudio);

      new Audio(SCANNING_POKEMON_AUDIO).play();

      const POKEMON_DESC_AUDIO = new Audio(descriptionAudio.resourceUrl);
      POKEMON_DESC_AUDIO.play();
    }

    screenNumber.innerHTML = flavorTextCleaned;
  }

  return (
    <PokedexContext.Provider
      value={{
        api,
        pokemon,
        setPokemon,
        spriteOptions,
        setSpriteOptions,
        updateDescription,
        isSearching,
        setIsSearching,
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
