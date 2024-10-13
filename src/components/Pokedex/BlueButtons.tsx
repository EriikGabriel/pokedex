"use client";

import { usePokedex } from "@contexts/PokedexProvider";
import { cn } from "@utils/cn";
import { sleep } from "@utils/sleep";

import { MouseEvent } from "react";

export function BlueButtons() {
  const { setPokemon, api, updateDescription } = usePokedex();

  let temporaryId = "";

  function getKeyboardInput(e: MouseEvent) {
    const textScreen = document.querySelector(
      "#text-screen",
    ) as HTMLParagraphElement;

    const numberId = e.currentTarget.textContent ?? "";

    temporaryId += numberId;
    textScreen.innerHTML = `Search for pokemon: ${temporaryId}`;

    sleep(1000 * 1.5).then(async () => {
      textScreen.innerHTML = `Searching...`;

      try {
        const pokemon = await api.getPokemonById(Number(temporaryId));
        setPokemon(pokemon);
        updateDescription(pokemon);
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <>
      <div className="absolute left-[2vmin] top-[12.5vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] font-vt323 text-xl text-pokedex-gray">
        {[...Array(10).keys()].map((num) => (
          <button
            key={num}
            className={cn(
              "flex items-center justify-center border-r-[0.3px] border-r-black",
              num >= 5 && "border-t-[0.3px] border-black",
            )}
            onClick={getKeyboardInput}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="absolute left-[2.25vmin] top-[12.9vmin] -z-[1] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] brightness-75">
        {[...Array(10).keys()].map((num) => (
          <div
            key={num}
            className={cn(
              num < 5
                ? "border-r-[0.3px] border-r-black"
                : "border-t-[0.3px] border-black",
            )}
          />
        ))}
      </div>
    </>
  );
}
