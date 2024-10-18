"use client";

import { usePokedex } from "@contexts/PokedexProvider";
import { cn } from "@utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoFemale, IoMale, IoSparklesOutline } from "react-icons/io5";

export function Screen() {
  const [pokemonSprite, setPokemonSprite] = useState<string>("");

  const { pokemon, spriteOptions, setSpriteOptions, isSearching } =
    usePokedex();

  function handleGender(gender: "male" | "female") {
    setSpriteOptions({ ...spriteOptions, gender });
  }

  function handleShiny() {
    setSpriteOptions({ ...spriteOptions, shiny: !spriteOptions.shiny });
  }

  useEffect(() => {
    if (spriteOptions.gender === "male" || !pokemon?.sprites.front_female) {
      if (spriteOptions.rotated) {
        spriteOptions.shiny
          ? setPokemonSprite(pokemon?.sprites.back_shiny!)
          : setPokemonSprite(pokemon?.sprites.back_default!);
      } else {
        spriteOptions.shiny
          ? setPokemonSprite(pokemon?.sprites.front_shiny!)
          : setPokemonSprite(pokemon?.sprites.front_default!);
      }
    } else {
      if (spriteOptions.rotated) {
        spriteOptions.shiny
          ? setPokemonSprite(pokemon?.sprites.back_shiny_female!)
          : setPokemonSprite(pokemon?.sprites.back_female!);
      } else {
        spriteOptions.shiny
          ? setPokemonSprite(pokemon?.sprites.front_shiny_female!)
          : setPokemonSprite(pokemon?.sprites.front_female!);
      }
    }
  }, [pokemon, spriteOptions, isSearching]);

  return (
    <>
      <div className="absolute left-[2.6vmin] top-[3vmin] z-[1] h-[19vmin] w-[22vmin] rounded-[5%_5%_5%_18%_/_5%_5%_5%_18%] border-[0.3px] border-black bg-white">
        <div className="relative left-[7vmin] top-[0.8vmin] flex h-[1.3vmin] w-[7vmin] items-center justify-between">
          <div className="h-[1vmin] w-[1vmin] rounded-full border-[0.3px] border-black bg-pokedex-red-darken" />
          <div className="h-[1vmin] w-[1vmin] rounded-full border-[0.3px] border-black bg-pokedex-red-darken" />
        </div>

        <div className="absolute left-[2vmin] top-[2.8vmin] h-[11vmin] w-[17vmin] rounded-[1px] border-[0.3px] border-black bg-pokedex-gray">
          {pokemon && (
            <>
              <Image
                src={pokemonSprite ?? pokemon.sprites.front_default}
                alt={pokemon?.name ?? ""}
                className={cn(
                  "absolute h-full w-full select-none object-contain",
                  isSearching && "animate-pulse brightness-0",
                )}
                sizes="100%"
                height={50}
                width={50}
              />
              <div className="z-1 relative flex h-full items-end justify-between px-1 font-vt323 text-xs">
                <div className="flex w-full justify-between">
                  <p className="text-white">{("000" + pokemon.id).slice(-3)}</p>
                  <div className="flex items-center justify-center">
                    <button onClick={() => handleGender("male")}>
                      <IoMale
                        className={cn(
                          "size-2 text-neutral-500 hover:text-white",
                          spriteOptions.gender === "male" && "text-white",
                        )}
                      />
                    </button>
                    <button onClick={() => handleGender("female")}>
                      <IoFemale
                        className={cn(
                          "size-2 text-neutral-500 hover:text-white",
                          spriteOptions.gender === "female" && "text-white",
                        )}
                      />
                    </button>
                    <button onClick={() => handleShiny()}>
                      <IoSparklesOutline
                        className={cn(
                          "size-2 text-neutral-500 hover:text-white",
                          spriteOptions.shiny && "text-white",
                        )}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-[1.8vmin] left-[2vmin] h-[2.1vmin] w-[2.1vmin] rounded-full border-[0.3] border-black bg-pokedex-red-darken" />
        <div className="relative left-[15.5vmin] top-[13.8vmin] w-fit">
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
        </div>
      </div>

      <div className="absolute left-[3vmin] top-[3.4vmin] h-[19vmin] w-[22vmin] rounded-[5%_5%_5%_18%_/_5%_5%_5%_18%] border-[0.3px] border-black bg-white brightness-75" />
    </>
  );
}
