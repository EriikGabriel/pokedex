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
      const pokemon = await api.getPokemonById(Number(temporaryId));

      setPokemon(pokemon);

      temporaryId = "";
      flipScreen.textContent = "";
    }, 1000 * 1); // 2 segundos de timeout
  }

  return (
    <>
      <div className="absolute left-[2.25vmin] top-[12.9vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff]">
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
      <div className="absolute left-[2vmin] top-[12.5vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] font-press-start-2p text-pokedex-gray">
        <button
          className="border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          0
        </button>
        <button
          className="border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          1
        </button>
        <button
          className="border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          2
        </button>
        <button
          className="border-r-[0.3px] border-r-black"
          onClick={getKeyboardInput}
        >
          3
        </button>
        <button className="border-black" onClick={getKeyboardInput}>
          4
        </button>
        <button
          className="border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          5
        </button>
        <button
          className="border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          6
        </button>
        <button
          className="border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          7
        </button>
        <button
          className="border-r-[0.3px] border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          8
        </button>
        <button
          className="border-t-[0.3px] border-black"
          onClick={getKeyboardInput}
        >
          9
        </button>
      </div>
    </>
  );
}
