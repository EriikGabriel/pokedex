"use client";

import { cn } from "@/utils/cn";
import { usePokedex } from "@contexts/PokedexProvider";
import { Light } from "./Light";

export function TopLights() {
  const { audioVoice } = usePokedex();

  return (
    <>
      <div className="absolute left-[2.5vmin] top-[1.5vmin] flex h-[7vmin] w-[7vmin] items-center justify-center rounded-full border-[0.3px] border-black bg-white">
        <Light
          className={cn(
            "h-[5.8vmin] w-[5.8vmin] bg-[#2aa9fe] after:bg-[#2aa9fe]",
            audioVoice && "animate-glow repeat-infinite",
          )}
        />
      </div>

      <div className="relative left-[10vmin] top-[0.9vmin] flex">
        <Light
          className={cn(
            "ml-0 h-[1.6vmin] w-[1.6vmin] bg-[#c20000] after:bg-[#c2001f]",
            audioVoice && "animate-glow delay-100 repeat-1",
          )}
        />
        <Light
          className={cn(
            "ml-6 h-[1.6vmin] w-[1.6vmin] bg-[#e9ca40] after:bg-[#e9ca40]",
            audioVoice && "animate-glow delay-75 repeat-1",
          )}
        />
        <Light
          className={cn(
            "ml-12 h-[1.6vmin] w-[1.6vmin] bg-[#459c2f] after:bg-[#459c2f]",
            audioVoice && "animate-glow delay-0 repeat-1",
          )}
        />
      </div>
    </>
  );
}
