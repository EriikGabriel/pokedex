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
      <div className="absolute left-[2vmin] top-[12.5vmin] grid w-[23vmin] grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,3vmin)] gap-0 rounded border-[0.2px] border-black bg-[#28aaff]">
        <button aria-label="_" className="border-r-[0.3px] border-r-black" />
        <button aria-label="_" className="border-r-[0.3px] border-r-black" />
        <button aria-label="_" className="border-r-[0.3px] border-r-black" />
        <button aria-label="_" className="border-r-[0.3px] border-r-black" />
        <button aria-label="_" className="border-black" />
        <button
          aria-label="_"
          className="border-r-[0.3px] border-t-[0.3px] border-black"
        />
        <button
          aria-label="_"
          className="border-r-[0.3px] border-t-[0.3px] border-black"
        />
        <button
          aria-label="_"
          className="border-r-[0.3px] border-t-[0.3px] border-black"
        />
        <button
          aria-label="_"
          className="border-r-[0.3px] border-t-[0.3px] border-black"
        />
        <button aria-label="_" className="border-t-[0.3px] border-black" />
      </div>
    </>
  );
}
