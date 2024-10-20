"use client";

import { cn } from "@/utils/cn";
import { usePokedex } from "@contexts/PokedexProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Pokemon() {
  const [pokemonSprite, setPokemonSprite] = useState<string>("");

  const { pokemon, spriteOptions } = usePokedex();

  const pokemonHeight = (pokemon?.height ?? 1) / 10;

  useEffect(() => {
    const showdownSprites = pokemon?.sprites.other?.showdown;

    if (spriteOptions.gender === "male" || !pokemon?.sprites.front_female) {
      if (spriteOptions.rotated) {
        spriteOptions.shiny
          ? setPokemonSprite(showdownSprites?.back_shiny!)
          : setPokemonSprite(showdownSprites?.back_default!);
      } else {
        spriteOptions.shiny
          ? setPokemonSprite(showdownSprites?.front_shiny!)
          : setPokemonSprite(showdownSprites?.front_default!);
      }
    } else {
      if (spriteOptions.rotated) {
        spriteOptions.shiny
          ? setPokemonSprite(showdownSprites?.back_shiny_female!)
          : setPokemonSprite(showdownSprites?.back_female!);
      } else {
        spriteOptions.shiny
          ? setPokemonSprite(showdownSprites?.front_shiny_female!)
          : setPokemonSprite(showdownSprites?.front_female!);
      }
    }
  }, [pokemon, spriteOptions]);

  return (
    <div className="relative flex w-1/2 items-center">
      {pokemon && (
        <Image
          src={
            pokemonSprite ??
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default ??
            pokemon.sprites.front_default
          }
          alt={`${pokemon.name} sprite`}
          width={pokemonHeight * 200}
          height={pokemonHeight * 200}
          style={{ imageRendering: "pixelated" }}
          className={cn(
            "max-w-auto mx-auto max-h-fit",
            pokemon.name.includes("gmax") && "max-w-auto absolute bottom-0",
          )}
          unoptimized
        />
      )}
    </div>
  );
}
