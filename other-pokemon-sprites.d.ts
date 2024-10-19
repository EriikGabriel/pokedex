import "pokenode-ts";

declare module "pokenode-ts" {
  export interface OtherPokemonSprites {
    /** Dream World Sprites of this Pokémon */
    dream_world: DreamWorld;
    /** Official Artwork Sprites of this Pokémon */
    "official-artwork": { front_default: string | null };
    showdown: {
      /** The default depiction of this Pokémon from the front in battle */
      front_default: string | null;
      /** The shiny depiction of this Pokémon from the front in battle */
      front_shiny: string | null;
      /** The female depiction of this Pokémon from the front in battle */
      front_female: string | null;
      /** The shiny female depiction of this Pokémon from the front in battle */
      front_shiny_female: string | null;
      /** The default depiction of this Pokémon from the back in battle */
      back_default: string | null;
      /** The shiny depiction of this Pokémon from the back in battle */
      back_shiny: string | null;
      /** The female depiction of this Pokémon from the back in battle */
      back_female: string | null;
      /** The shiny female depiction of this Pokémon from the back in battle */
      back_shiny_female: string | null;
    };
    /** Home Artwork Sprites of this Pokémon */
    home: Home;
  }
}
