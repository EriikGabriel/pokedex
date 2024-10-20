"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { PokemonListItemType } from "./Screen";

interface PokemonListNavProps {
  pokemonList: PokemonListItemType[] | null;
}

export function PokemonListNav({ pokemonList }: PokemonListNavProps) {
  return (
    <>
      {pokemonList?.map(({ id, icon, hasDiscovered }, i) => (
        <div
          key={`${id}-${i}`}
          className="relative flex h-fit flex-col items-center rounded-sm hover:bg-neutral-500/45"
        >
          <Image
            src={icon}
            alt={`Pokemon #${id}`}
            width={50}
            height={50}
            className={cn(
              "h-fit w-fit",
              hasDiscovered ? "brightness-100" : "brightness-0",
            )}
            style={{ imageRendering: "pixelated" }}
          />

          <small className="absolute left-[2px] top-[2px] h-fit text-[7px] leading-none tracking-wider text-white">
            #{("0000" + id).slice(-4)}
          </small>
        </div>
      ))}
    </>
  );
}
