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

type AudioStorageType = {
  pokemon: string;
  audioURL: string;
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
  audioVoice: HTMLAudioElement | null;
  setAudioVoice: Dispatch<SetStateAction<HTMLAudioElement | null>>;
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
  const [audioVoice, setAudioVoice] = useState<HTMLAudioElement | null>(null);

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

    const audioList = JSON.parse(
      localStorage.getItem("@pokedex:audios") ?? "[]",
    ) as AudioStorageType[];

    // Empty the audio list if it reaches 250 items
    if (audioList.length >= 250) audioList.length = 0;

    const audioStorage = audioList.find(
      (audio) => audio.pokemon === pokemon.name,
    );

    let POKEMON_DESC_AUDIO;

    if (audioStorage) {
      audioVoice?.pause();

      console.warn("📦 Playing audio from storage...");
      POKEMON_DESC_AUDIO = new Audio(audioStorage.audioURL);
    } else {
      console.warn("🎙️ Transforming text to speech...");
      screenNumber.innerHTML = "Searching...";

      try {
        const audio = await pokedexTTS(`${pokemon.name}. ${flavorTextCleaned}`);
        const descriptionAudio = JSON.parse(audio as string) as TtsAudioFile;

        setIsSearching(false);

        POKEMON_DESC_AUDIO = new Audio(descriptionAudio.resourceUrl);

        if (descriptionAudio) {
          audioList.push({
            pokemon: pokemon.name,
            audioURL: descriptionAudio.resourceUrl,
          });

          localStorage.setItem("@pokedex:audios", JSON.stringify(audioList));
          screenNumber.innerHTML = flavorTextCleaned;
        }
      } catch (error) {
        console.error(error);

        new Audio(SCANNING_POKEMON_AUDIO).play();

        screenNumber.innerHTML = flavorTextCleaned;
        setIsSearching(false);
      }
    }

    if (POKEMON_DESC_AUDIO) {
      console.warn("🔊 Playing audio...");

      screenNumber.innerHTML = flavorTextCleaned;
      setIsSearching(false);

      new Audio(SCANNING_POKEMON_AUDIO).play();

      POKEMON_DESC_AUDIO.play();
      POKEMON_DESC_AUDIO.onplay = () => setAudioVoice(POKEMON_DESC_AUDIO);
      POKEMON_DESC_AUDIO.onended = () => setAudioVoice(null);
    }
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
        audioVoice,
        setAudioVoice,
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
