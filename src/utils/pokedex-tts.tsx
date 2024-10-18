"use server";

import { Client } from "fakeyou.ts";

export async function pokedexTTS(text: string) {
  const client = new Client();

  const model = await client.fetchTtsModelByName("Pokedex (Pokemon, 4Kids)");

  if (!model) return;

  const audio = await model.infer(text);

  if (!audio) return;

  return JSON.stringify(audio);
}
