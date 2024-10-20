"use client";

import { usePokedex } from "@contexts/PokedexProvider";
import { getTextScreen, getValueInput } from "@utils/pokedex-elements";

export function InternalButton() {
  const { pokemon, getPokemonDescription } = usePokedex();

  async function handleClearTextScreen() {
    const textScreen = getTextScreen();
    const valueInput = getValueInput();

    if (textScreen.textContent === "Searching...") return;

    if (pokemon && !valueInput.disabled) {
      const description = await getPokemonDescription(pokemon);
      textScreen.innerHTML = description;
      valueInput.disabled = true;
      return;
    }

    textScreen.innerHTML = "Search for pokemon:";

    valueInput.value = "";
    valueInput.disabled = false;
    valueInput.focus();
  }

  return (
    <button
      onClick={handleClearTextScreen}
      className="absolute bottom-[9vmin] left-[2vmin] h-[3vmin] w-[3vmin] rounded-full border-b-[0.5px] border-r-[0.5px] border-b-black border-r-black bg-pokedex-gray hover:brightness-125"
      aria-label="internal"
    />
  );
}
