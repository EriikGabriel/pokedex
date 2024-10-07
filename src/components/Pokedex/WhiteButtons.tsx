export function WhiteButtons() {
  return (
    <>
      <div className="absolute left-[2vmin] top-[23vmin] grid w-[8vmin] grid-cols-[repeat(2,1fr)] grid-rows-[3vmin] gap-0 rounded border-[0.1px] border-black bg-white">
        <button aria-label="_" className="border-r-[0.1px] border-r-black" />
        <button aria-label="_" />
      </div>

      <div className="absolute left-[2.2vmin] top-[23.2vmin] -z-[1] grid w-[8vmin] grid-cols-[repeat(2,1fr)] grid-rows-[3vmin] gap-0 rounded border-[0.1px] border-black bg-white brightness-75">
        <div className="border-r-[0.1px] border-r-black" />
        <div />
      </div>
    </>
  );
}
