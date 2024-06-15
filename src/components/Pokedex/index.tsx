import { Cylinder } from "./Cylinder";
import { Flip } from "./Flip";
import { Internal } from "./Internal";
import { TopDetails } from "./TopDetails";
import { TopLights } from "./TopLights";

interface PokedexProps {}

export function Pokedex({}: PokedexProps) {
  return (
    <div className="absolute left-1/2 h-[50vmin] w-[32vmin] -translate-x-[90%]">
      <div className="h-[50vmin] w-[32vmin] rounded-xl border-[0.3px] border-black bg-pokedex-red">
        <TopDetails />
        <TopLights />
        <Internal />
        <Cylinder />
      </div>

      <Flip open />
    </div>
  );
}
