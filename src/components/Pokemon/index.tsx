"use client";

import { usePokedex } from "@contexts/PokedexProvider";
import Image from "next/image";

export function Pokemon() {
  const { pokemon } = usePokedex();

  return (
    <div className="flex w-1/2 items-center">
      {pokemon && (
        <>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id ?? 0}.gif`}
            alt="Pokemon"
            width={500}
            height={500}
            style={{ imageRendering: "pixelated" }}
            className="mx-auto w-52"
            priority
          />
        </>
      )}
    </div>
  );
}
