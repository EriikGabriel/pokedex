"use client";

import { CLICK_AUDIO } from "@constants/audios";
import { usePokedex } from "@contexts/PokedexProvider";

import { cn } from "@utils/cn";

import { MouseEvent, useState } from "react";

export function BlueButtons() {
  const { setPokemon, api, updateDescription } = usePokedex();
  const [temporaryId, setTemporaryId] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  function getKeyboardInput(e: MouseEvent) {
    const textScreen = document.querySelector(
      "#text-screen",
    ) as HTMLParagraphElement;
    const valInput = document.querySelector("#val-screen") as HTMLInputElement;

    const numberId = e.currentTarget.textContent ?? "";

    const newId = temporaryId + numberId;
    setTemporaryId(newId);
    textScreen.innerHTML = `Search for pokemon: `;
    valInput.value = newId;
    valInput.disabled = false;

    new Audio(CLICK_AUDIO).play();

    if (searchTimeout) clearTimeout(searchTimeout);

    const timeout = setTimeout(async () => {
      valInput.value = "";
      valInput.disabled = true;
      textScreen.innerHTML = `Searching...`;

      try {
        const pokemon = await api.getPokemonById(Number(newId));
        updateDescription(pokemon);
        setPokemon(pokemon);
      } catch (error) {
        console.error(error);
      } finally {
        setTemporaryId("");
      }
    }, 1000 * 1.5);

    setSearchTimeout(timeout);
  }

  return (
    <>
      <div className="font-vt323! absolute left-[2vmin] top-[12.5vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] text-xl text-pokedex-gray">
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
