"use client";

import { CLICK_AUDIO } from "@constants/audios";
import { usePokedex } from "@contexts/PokedexProvider";

export function Joysticks() {
  const { api, pokemon, setPokemon, setSpriteOptions, updateDescription } =
    usePokedex();

  async function changePokemon(dir: "previous" | "next") {
    new Audio(CLICK_AUDIO).play();

    const pokeId = pokemon?.id ?? 0;

    const newId = dir === "previous" ? Math.max(1, pokeId - 1) : pokeId + 1;

    if (newId === pokemon?.id) return;

    try {
      const newPokemon = await api.getPokemonById(newId);
      updateDescription(newPokemon);
      setPokemon(newPokemon);
    } catch (error) {
      console.error("Erro ao mudar de Pokémon:", error);
    }
  }

  function rotatePokemon() {
    new Audio(CLICK_AUDIO).play();

    setSpriteOptions((prev) => ({ ...prev, rotated: !prev.rotated }));
  }

  return (
    <div className="relative -right-[19.5vmin] top-[29vmin]">
      <button
        className="group absolute left-[-2.6vmin] top-[-0.3vmin] h-[3.4vmin] w-[2.7vmin] rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-l-[0.5px] border-l-black bg-pokedex-gray -rotate-90"
        aria-label="left joystick"
        onClick={() => rotatePokemon()}
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50 group-hover:bg-neutral-50 group-hover:opacity-75" />
      </button>

      <button
        className="group absolute left-[2.8vmin] top-[-0.3vmin] h-[3.4vmin] w-[2.7vmin] rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-r-[0.5px] border-t-[0.5px] border-solid border-r-black border-t-black bg-pokedex-gray rotate-90"
        aria-label="right joystick"
        onClick={() => rotatePokemon()}
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50 group-hover:bg-neutral-50 group-hover:opacity-75" />
      </button>

      <button
        className="group absolute left-[0.1vmin] top-[-2.8vmin] h-[3.4vmin] w-[2.7vmin] rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-r-[0.5px] border-r-black bg-pokedex-gray"
        aria-label="top joystick"
        onClick={() => changePokemon("previous")}
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50 group-hover:bg-neutral-50 group-hover:opacity-75" />
      </button>

      <button
        className="group absolute left-[0.12vmin] top-[2.2vmin] h-[3.4vmin] w-[2.7vmin] rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-l-[0.5px] border-t-[0.5px] border-l-black border-t-black bg-pokedex-gray rotate-180"
        aria-label="bottom joystick"
        onClick={() => changePokemon("next")}
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50 group-hover:bg-neutral-50 group-hover:opacity-75" />
      </button>

      <button
        className="group absolute flex h-[3vmin] w-[3vmin] items-center justify-center rounded-full bg-pokedex-gray"
        aria-label="center joystick"
      >
        <div className="h-[1.1vmin] w-[1.1vmin] rounded-full bg-slate-200 opacity-50 group-hover:bg-neutral-50 group-hover:opacity-75" />
      </button>
    </div>
  );
}
