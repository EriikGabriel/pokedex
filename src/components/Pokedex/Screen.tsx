export function Screen() {
  return (
    <div>
      <div className="absolute left-[3vmin] top-[3.4vmin] z-[1] h-[19vmin] w-[22vmin] rounded-[5%_5%_5%_18%_/_5%_5%_5%_18%] border-[0.3px] border-black bg-white" />
      <div className="absolute left-[2.6vmin] top-[3vmin] z-[1] h-[19vmin] w-[22vmin] rounded-[5%_5%_5%_18%_/_5%_5%_5%_18%] border-[0.3px] border-black bg-white">
        <div className="relative left-[7vmin] top-[0.8vmin] flex h-[1.3vmin] w-[7vmin] items-center justify-between">
          <div className="h-[1vmin] w-[1vmin] rounded-full border-[0.3px] border-black bg-pokedex-red-darken" />
          <div className="h-[1vmin] w-[1vmin] rounded-full border-[0.3px] border-black bg-pokedex-red-darken" />
        </div>
        <div className="absolute left-[2vmin] top-[2.8vmin] h-[11vmin] w-[17vmin] rounded-[1px] border-[0.3px] border-black bg-pokedex-gray" />
        <div className="absolute bottom-[1.8vmin] left-[2vmin] h-[2.1vmin] w-[2.1vmin] rounded-full border-[0.3] border-black bg-pokedex-red-darken" />
        <div className="relative left-[15.5vmin] top-[13.8vmin] w-fit">
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
        </div>
      </div>
    </div>
  );
}
