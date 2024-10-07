export function WhiteButtons() {
  return (
    <div className="relative mt-4 min-h-[4vmin]">
      <div className="absolute grid w-[13vmin] grid-cols-[repeat(2,1fr)] grid-rows-[4vmin] gap-0 rounded border-[0.1px] border-black bg-white">
        <button aria-label="_" className="border-r-[0.1px] border-r-black" />
        <button aria-label="_" />
      </div>

      <div className="absolute top-[2px] -z-[1] grid w-[13vmin] grid-cols-[repeat(2,1fr)] grid-rows-[4vmin] gap-0 rounded border-[0.1px] border-black bg-white brightness-75">
        <div className="border-r-[0.1px] border-r-black" />
        <div />
      </div>
    </div>
  );
}
