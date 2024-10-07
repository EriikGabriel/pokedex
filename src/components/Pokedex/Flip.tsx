"use client";

import { cn } from "@utils/cn";
import { useState } from "react";
import { BlueButtons } from "./BlueButtons";
import { Light } from "./Light";
import { TextScreen } from "./TextScreen";
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
        "perspective absolute bottom-[0.5vmin] left-[42vmin] h-[48.6vmin] w-[39vmin] rounded-[0px_10px_10px_0px] rounded-tl-none border-[0.2px] border-black bg-pokedex-red transition-all duration-500",
        !flip && "left-0 z-[2] cursor-pointer rotate-y-180",
        className,
      )}
      {...props}
    >
      {flip && (
        <>
          <div className="absolute bottom-[1vmin] left-[1vmin] h-[46.4vmin] w-[37vmin] rounded-[5px] rounded-tr-none border-[0.2px] border-black">
            <div className="relative z-[3] h-full p-4">
              <TextScreen />

              <BlueButtons />
              <WhiteButtons />

              <div className="absolute left-[22vmin] top-[23vmin] flex w-[13vmin] gap-1">
                <div className="h-[1vmin] w-1/2 rounded-md border-[0.3px] border-black bg-pokedex-gray" />
                <div className="h-[1vmin] w-1/2 rounded-md border-[0.3px] border-black bg-pokedex-gray" />
              </div>

              <Light className="left-[30vmin] top-[26vmin] h-[4vmin] w-[4vmin] bg-[#fcdf25] after:bg-[#fcdf25]" />

              <div className="flex justify-between">
                <div className="absolute left-[2vmin] top-[32vmin] h-[3.5vmin] w-[13vmin] rounded border-[0.3px] border-black bg-pokedex-gray" />
                <div className="absolute right-[2vmin] top-[32vmin] h-[3.5vmin] w-[13vmin] rounded border-[0.3px] border-black bg-pokedex-gray" />
              </div>
            </div>
          </div>

          <div className="absolute left-[15.9vmin] top-[-2.1vmin] z-[2] h-[8.5vmin] w-[6.4vmin] rounded-tr-[0.3px] border-t-[0.2px] border-t-black bg-pokedex-red rotate-[39.4deg]" />
          <div className="absolute left-[1vmin] right-[4vmin] top-[-3.2vmin] z-[1] h-[5vmin] w-[18.3vmin] rounded-tl-[5px] rounded-tr-none border-[0.2px] border-b-0 border-l-[0.2px] border-r-0 border-black border-l-black bg-pokedex-red" />
        </>
      )}

      <div className="absolute -top-[3.075vmin] left-[16.2vmin] h-[7.5vmin] w-[6.7vmin] rounded-tr-[0.3px] border-t-[0.2px] border-t-black bg-pokedex-red rotate-[38.9deg]" />
      <div className="absolute -left-[0.1vmin] -top-[4.35vmin] h-[5vmin] w-[19.3vmin] rounded-tl-[0.3px] border-b-0 border-l-[0.2px] border-r-0 border-t-[0.2px] border-l-black border-t-black bg-pokedex-red" />

      {!flip && (
        <>
          <div className="arrow before:arrow absolute right-2.5 top-2/4 h-[45px] w-[45px] bg-black -translate-y-[80%] translate-x-2 before:absolute before:left-1 before:top-0.5 before:h-10 before:w-10 before:bg-yellow-500 before:content-['']" />
          <div className="absolute bottom-[30px] left-2/4 h-[1vmin] w-[10vmin] rounded-[25px] border-[0.2px] border-black bg-pokedex-red -translate-x-2/4 -translate-y-2/4" />
        </>
      )}
    </div>
  );
}
