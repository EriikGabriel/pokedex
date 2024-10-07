"use client";

import { PokedexContext } from "@/contexts/PokedexProvider";
import { useContext } from "react";
import { InternalButton } from "./InternalButton";
import { Joysticks } from "./Joysticks";
import { Screen } from "./Screen";

export function Internal() {
  const { pokemon } = useContext(PokedexContext);

  return (
    <>
      <div className="absolute bottom-[1vmin] left-[1vmin] h-[48vmin] w-[37vmin] rounded-[5px] rounded-tr-none border-[0.2px] border-black">
        <div className="relative h-full p-4">
          <Screen />

          <InternalButton />

          <div className="relative left-[5vmin] mt-4 flex w-[8vmin] justify-between">
            <div className="h-[0.8vmin] w-[3.4vmin] rounded-sm border-[0.3px] border-black bg-pokedex-red-darken" />
            <div className="h-[0.8vmin] w-[3.4vmin] rounded-sm border-[0.3px] border-black bg-[#146889]" />
          </div>

          <div className="absolute bottom-[4.8vmin] left-[6.5vmin] flex h-[5vmin] w-[8vmin] items-center justify-center rounded-lg border-[0.3px] border-black bg-[#52ae5f] font-vt323">
            {pokemon?.name}
          </div>

          <Joysticks />
        </div>
      </div>

      <div className="absolute left-[16.8vmin] top-[8vmin] h-[8.5vmin] w-[6.4vmin] rounded-tr-[0.3px] border-t-[0.2px] border-t-black bg-pokedex-red -rotate-[39.5deg]" />
      <div className="absolute right-[4vmin] top-[7vmin] h-[5vmin] w-[8.3vmin] rounded-tl-[0.3px] rounded-tr-[5px] border-[0.2px] border-b-0 border-l-0 border-black bg-pokedex-red" />
    </>
  );
}
