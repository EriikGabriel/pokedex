"use client";

import { PokedexContext } from "@/contexts/PokedexProvider";
import { MouseEvent, useContext } from "react";

export function BlueButtons() {
  const { setPokemon, api } = useContext(PokedexContext);

  let timer: NodeJS.Timeout;
  let temporaryId = "";

  function getKeyboardInput(e: MouseEvent) {
    const flipScreen = document.querySelector(
      "#flip-screen span",
    ) as HTMLSpanElement;

    const numberId = e.currentTarget.textContent ?? "";

    temporaryId += numberId;
    flipScreen.textContent = `${temporaryId}`;

    clearTimeout(timer);

    timer = setTimeout(async () => {
      try {
        const pokemon = await api.getPokemonById(Number(temporaryId));
        setPokemon(pokemon);
      } catch (error) {
        console.error(error);
      }

      temporaryId = "";
      flipScreen.textContent = "";
    }, 1000 * 1); // 2 segundos de timeout
  }

  return (
    <div className="relative mt-4 min-h-[8vmin]">
      <div className="absolute grid w-full grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,4vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] font-vt323 text-xl text-pokedex-gray">
        <button
          className="flex items-center justify-center border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          0
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          1
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          2
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          3
        </button>
        <button
          className="flex items-center justify-center border-black"
          onClick={getKeyboardInput}
        >
          4
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          5
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          6
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          7
        </button>
        <button
          className="flex items-center justify-center border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          8
        </button>
        <button
          className="flex items-center justify-center border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          9
        </button>
      </div>

      <div className="absolute top-[2px] -z-[1] grid w-full grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,4vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] brightness-75">
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
      </div>
    </div>
  );
}
