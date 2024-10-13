"use client";

import { usePokedex } from "@contexts/PokedexProvider";
import { useEffect } from "react";

export function TextScreen() {
  const { pokemon, api, updateDescription } = usePokedex();

  useEffect(() => {
    updateDescription(pokemon! ?? null);
  }, [updateDescription, pokemon]);

  return (
    <div className="absolute left-[2vmin] top-[2.8vmin] z-[2] h-[8vmin] w-[23vmin] overflow-y-auto rounded-[3px] border-[0.3px] border-black bg-pokedex-gray p-2">
      <p
        className="font-vt323 text-xs leading-3 tracking-wide"
        id="text-screen"
      ></p>
    </div>
  );
}
