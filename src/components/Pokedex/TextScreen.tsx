import { usePokedex } from "@contexts/PokedexProvider";
import { useEffect, useState } from "react";

export function TextScreen() {
  const [description, setDescription] = useState("");

  const { pokemon, api } = usePokedex();

  useEffect(() => {
    if (pokemon) {
      api.getPokemonSpeciesById(pokemon.id).then((res) => {
        const flavorText = res.flavor_text_entries.find(
          (entry) => entry.language.name === "en",
        )?.flavor_text;

        const flavorTextCleaned = flavorText
          ?.replace(/\f/g, " ")
          .replaceAll("POKéMON", "Pokémon");

        setDescription(flavorTextCleaned ?? "No description found.");
      });
    }
  }, [pokemon, api]);

  return (
    <div className="absolute left-[2vmin] top-[2.8vmin] z-[2] h-[8.2vmin] w-[23vmin] overflow-y-auto rounded-[3px] border-[0.3px] border-black bg-pokedex-gray p-2">
      <p
        className="font-vt323 text-xs leading-3 tracking-wide"
        id="flip-screen"
      >
        Search for pokemon: <span id="screen-number"></span>
        <br />
        <span className="mt-2 tracking-tight">{description}</span>
      </p>
    </div>
  );
}
