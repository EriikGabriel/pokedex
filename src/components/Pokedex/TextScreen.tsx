export function TextScreen() {
  return (
    <div className="absolute left-[2vmin] top-[2.8vmin] z-[2] h-[8vmin] w-[23vmin] rounded-[3px] border-[0.3px] border-black bg-pokedex-gray p-2">
      <p
        className="font-vt323 text-xs leading-3 tracking-wide"
        id="flip-screen"
      >
        Procurando por pokémon: <span></span>
      </p>
    </div>
  );
}
