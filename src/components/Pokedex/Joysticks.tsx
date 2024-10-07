export function Joysticks() {
  return (
    <div className="relative -right-[19.5vmin] top-[29vmin]">
      <button
        className="absolute left-[-2.6vmin] top-[-0.3vmin] h-[3.4vmin] w-[2.7vmin] -rotate-90 rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-l-[0.5px] border-l-black bg-pokedex-gray"
        aria-label="left joystick"
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50" />
      </button>
      <button
        className="absolute left-[2.8vmin] top-[-0.3vmin] h-[3.4vmin] w-[2.7vmin] rotate-90 rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-r-[0.5px] border-t-[0.5px] border-solid border-r-black border-t-black bg-pokedex-gray"
        aria-label="right joystick"
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50" />
      </button>
      <button
        className="absolute left-[0.1vmin] top-[-2.8vmin] h-[3.4vmin] w-[2.7vmin] rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-r-[0.5px] border-r-black bg-pokedex-gray"
        aria-label="top joystick"
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50" />
      </button>
      <button
        className="absolute left-[0.12vmin] top-[2.2vmin] h-[3.4vmin] w-[2.7vmin] rotate-180 rounded-[21%_21%_50%_50%_/_13%_13%_33%_33%] border-l-[0.5px] border-t-[0.5px] border-l-black border-t-black bg-pokedex-gray"
        aria-label="bottom joystick"
      >
        <div className="triangle absolute left-[0.82vmin] top-[0.8vmin] h-[1vmin] w-[1vmin] bg-slate-200 opacity-50" />
      </button>
      <button
        className="absolute flex h-[3vmin] w-[3vmin] items-center justify-center rounded-full bg-pokedex-gray"
        aria-label="center joystick"
      >
        <div className="h-[1.1vmin] w-[1.1vmin] rounded-full bg-slate-200 opacity-50" />
      </button>
    </div>
  );
}
