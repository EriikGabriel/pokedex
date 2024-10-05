"use client";

import { cn } from "@utils/cn";
import { useState } from "react";
import { BlueButtons } from "./BlueButtons";
import { Light } from "./Light";
import { WhiteButtons } from "./WhiteButtons";

interface FlipProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  open?: boolean;
}

export function Flip({ open = false, className, ...props }: FlipProps) {
  const [flip, setFlip] = useState(open);

  return (
    <div
      onClick={() => {
        setFlip(true);
      }}
      className={cn(
        "perspective absolute bottom-[0.5vmin] left-[32vmin] h-[38.6vmin] w-[29vmin] rounded-[0px_10px_10px_0px] rounded-tl-none border-[0.2px] border-black bg-pokedex-red transition-all duration-500",
        !flip && "left-0 z-[2] cursor-pointer rotate-y-180",
        className,
      )}
      {...props}
    >
      {flip && (
        <>
          <div className="absolute bottom-[1vmin] left-[1vmin] h-[36.4vmin] w-[27vmin] rounded-[5px] rounded-tr-none border-[0.2px] border-black">
            <div className="absolute left-[2vmin] top-[2.8vmin] z-[2] h-[8vmin] w-[23vmin] rounded-[3px] border-[0.3px] border-black bg-pokedex-gray p-2">
              <p className="font-vt323 text-base" id="flip-screen">
                Procurando por pokémon: <span></span>
              </p>
            </div>
            <div className="absolute left-[2vmin] top-[30vmin] h-[3.5vmin] w-[8vmin] rounded border-[0.3px] border-black bg-pokedex-gray" />
            <div className="absolute left-[17vmin] top-[30vmin] h-[3.5vmin] w-[8vmin] rounded border-[0.3px] border-black bg-pokedex-gray" />

            <BlueButtons />
            <WhiteButtons />

            <div className="relative left-[15vmin] top-[21vmin] flex w-[7vmin] justify-between">
              <div className="h-[0.6vmin] w-[3.4vmin] rounded-sm border-[0.3px] border-black bg-pokedex-gray" />
              <div className="h-[0.6vmin] w-[3.4vmin] rounded-sm border-[0.3px] border-black bg-pokedex-gray" />
            </div>

            <Light className="left-[20vmin] top-[24vmin] h-[3vmin] w-[3vmin] bg-[#fcdf25] after:bg-[#fcdf25]" />
          </div>

          <div className="absolute left-[5.9vmin] top-[-2.1vmin] z-[1] h-[8.5vmin] w-[6.4vmin] rounded-tr-[0.3px] border-t-[0.2px] border-t-black bg-pokedex-red rotate-[39.4deg]" />
          <div className="absolute left-[1vmin] right-[4vmin] top-[-3.2vmin] z-[1] h-[5vmin] w-[8.3vmin] rounded-tl-[5px] rounded-tr-none border-[0.2px] border-b-0 border-l-[0.2px] border-r-0 border-black border-l-black bg-pokedex-red" />
        </>
      )}

      <div className="absolute -top-[3.075vmin] left-[6.2vmin] h-[7.5vmin] w-[6.7vmin] rounded-tr-[0.3px] border-t-[0.2px] border-t-black bg-pokedex-red rotate-[38.9deg]" />
      <div className="absolute -left-[0.1vmin] -top-[4.35vmin] h-[5vmin] w-[9.3vmin] rounded-tl-[0.3px] border-b-0 border-l-[0.2px] border-r-0 border-t-[0.2px] border-l-black border-t-black bg-pokedex-red" />

      {!flip && (
        <>
          <div className="arrow before:arrow absolute right-2.5 top-2/4 h-[45px] w-[45px] bg-black -translate-y-[80%] translate-x-2 before:absolute before:left-1 before:top-0.5 before:h-10 before:w-10 before:bg-yellow-500 before:content-['']" />
          <div className="absolute bottom-[30px] left-2/4 h-[1vmin] w-[10vmin] rounded-[25px] border-[0.2px] border-black bg-pokedex-red -translate-x-2/4 -translate-y-2/4" />
        </>
      )}
    </div>
  );
}
