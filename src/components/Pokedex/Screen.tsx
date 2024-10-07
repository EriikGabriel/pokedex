export function Screen() {
  return (
    <div className="relative z-[1] w-full">
      <div className="z-[2] h-[19vmin] w-full rounded-[5%_5%_5%_18%_/_5%_5%_5%_18%] border-[0.3px] border-black bg-white px-4">
        <div className="relative left-[7vmin] flex h-[1.3vmin] w-[7vmin] items-center justify-between py-4">
          <div className="h-[1vmin] w-[1vmin] rounded-full border-[0.3px] border-black bg-pokedex-red-darken" />
          <div className="h-[1vmin] w-[1vmin] rounded-full border-[0.3px] border-black bg-pokedex-red-darken" />
        </div>

        <div className="ml-3 flex h-[11vmin] w-[90%] justify-center rounded-[1px] border-[0.3px] border-black bg-pokedex-gray"></div>

        <div className="absolute bottom-[1vmin] left-[3vmin] h-[1.5vmin] w-[1.5vmin] rounded-full border-[0.3] border-black bg-pokedex-red-darken" />
        <div className="relative left-[15vmin] top-[0.8vmin] w-fit">
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
          <div className="mb-[1px] h-1 w-[3.5vmin] rounded-[0.2px] border-b-[2.38px] border-b-black" />
        </div>
      </div>

      <div className="absolute left-[3] top-[3.4px] -z-[1] h-[19vmin] w-full rounded-[5%_5%_5%_18%_/_5%_5%_5%_18%] border-[0.3px] border-black bg-white brightness-75" />
    </div>
  );
}
