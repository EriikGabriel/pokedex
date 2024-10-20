"use client";

export function InternalButton() {
  function handleClearTextScreen() {
    const textScreen = document.querySelector(
      "#text-screen",
    ) as HTMLParagraphElement;

    if (textScreen.textContent === "Searching...") return;

    const valInput = document.querySelector("#val-screen") as HTMLInputElement;

    textScreen.innerHTML = "Search for pokemon:";

    valInput.value = "";
    valInput.disabled = false;
    valInput.focus();
  }

  return (
    <button
      onClick={handleClearTextScreen}
      className="absolute bottom-[9vmin] left-[2vmin] h-[3vmin] w-[3vmin] rounded-full border-b-[0.5px] border-r-[0.5px] border-b-black border-r-black bg-pokedex-gray hover:brightness-125"
      aria-label="internal"
    />
  );
}
