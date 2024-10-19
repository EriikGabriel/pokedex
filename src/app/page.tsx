import { Pokedex } from "@components/Pokedex";
import { Pokemon } from "@components/Pokemon";

export default function Home() {
  return (
    <div className="flex h-dvh">
      <Pokemon />
      <div className="flex h-dvh items-center justify-center">
        <Pokedex />
      </div>
    </div>
  );
}
