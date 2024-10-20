"use client";

import { SCANNING_POKEMON_AUDIO } from "@constants/audios";
import { getTextScreen, getValueInput } from "@utils/pokedex-elements";
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
  variety?: string;
};

type AudioStorageType = {
  pokemon: string;
  audioURL: string;
};

type PokedexContextType = {
  api: PokemonClient;
  pokemon: Pokemon | null;
  spriteOptions: SpriteOptionsType;
  isSearching: boolean;
  audioVoice: HTMLAudioElement | null;
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>;
  setSpriteOptions: Dispatch<SetStateAction<SpriteOptionsType>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  setAudioVoice: Dispatch<SetStateAction<HTMLAudioElement | null>>;
  updateDescription: (pokemon: Pokemon) => void;
  getPokemonDescription: (pokemon: Pokemon) => Promise<string>;
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

  async function updateDescription(pokemon: Pokemon) {
    const description = await getPokemonDescription(pokemon);
    await playPokemonDescription(pokemon, description);
  }

  async function getPokemonDescription(pokemon: Pokemon) {
    const pokemonSpecies = await api.getPokemonSpeciesById(pokemon.id);
    const flavorText =
      pokemonSpecies.flavor_text_entries.find(
        (entry) => entry.language.name === "en",
      )?.flavor_text ?? "No description found.";

    const flavorTextCleaned = flavorText
      .replaceAll(/\n/g, " ")
      .replaceAll(/\f/g, " ")
      .replaceAll("POKéMON", "Pokémon");

    return flavorTextCleaned;
  }

  async function playPokemonDescription(pokemon: Pokemon, description: string) {
    const textScreen = getTextScreen();
    const valueInput = getValueInput();

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

      console.log("📦 Playing audio from storage...");
      POKEMON_DESC_AUDIO = new Audio(audioStorage.audioURL);
    } else {
      console.log("🎙️ Transforming text to speech...");
      valueInput.value = "";
      valueInput.disabled = true;
      textScreen.innerHTML = "Searching...";

      try {
        const audio = await pokedexTTS(`${pokemon.name}. ${description}`);
        const descriptionAudio = JSON.parse(audio as string) as TtsAudioFile;

        setIsSearching(false);

        POKEMON_DESC_AUDIO = new Audio(descriptionAudio.resourceUrl);

        if (descriptionAudio) {
          audioList.push({
            pokemon: pokemon.name,
            audioURL: descriptionAudio.resourceUrl,
          });

          localStorage.setItem("@pokedex:audios", JSON.stringify(audioList));
          textScreen.innerHTML = description;
        }
      } catch (error) {
        console.error(error);

        new Audio(SCANNING_POKEMON_AUDIO).play();

        textScreen.innerHTML = description;
        setIsSearching(false);
      }
    }

    if (POKEMON_DESC_AUDIO) {
      console.log("🔊 Playing audio...");

      textScreen.innerHTML = description;
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
        spriteOptions,
        isSearching,
        audioVoice,
        setPokemon,
        setSpriteOptions,
        setIsSearching,
        setAudioVoice,
        updateDescription,
        getPokemonDescription,
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
