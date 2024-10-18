"use client";

import { usePokedex } from "@contexts/PokedexProvider";

export function GreenDisplay() {
  const { pokemon, isSearching } = usePokedex();

  return (
    <div className="absolute bottom-[3.8vmin] left-[7vmin] flex h-[5vmin] w-[8vmin] items-center justify-center rounded-lg border-[0.3px] border-black bg-[#52ae5f] font-vt323 text-xs capitalize tracking-wide text-[#1d5b27]">
      {!isSearching && pokemon?.name}
    </div>
  );
}
