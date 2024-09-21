export function BlueButtons() {
  return (
    <>
      <div className="absolute left-[2.25vmin] top-[12.9vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff]">
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-r-[0.3px] border-r-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
        <div className="border-t-[0.3px] border-black" />
      </div>
      <div className="font-press-start-2p absolute left-[2vmin] top-[12.5vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff] text-pokedex-gray">
        <button className="border-r-[0.3px] border-r-black">0</button>
        <button className="border-r-[0.3px] border-r-black">1</button>
        <button className="border-r-[0.3px] border-r-black">2</button>
        <button className="border-r-[0.3px] border-r-black">3</button>
        <button className="border-black">4</button>
        <button className="border-r-[0.3px] border-t-[0.3px] border-black">
          5
        </button>
        <button className="border-r-[0.3px] border-t-[0.3px] border-black">
          6
        </button>
        <button className="border-r-[0.3px] border-t-[0.3px] border-black">
          7
        </button>
        <button className="border-r-[0.3px] border-t-[0.3px] border-black">
          8
        </button>
        <button className="border-t-[0.3px] border-black">9</button>
      </div>
    </>
  );
}
