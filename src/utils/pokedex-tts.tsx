"use server";

import { Client } from "fakeyou.ts";

export async function pokedexTTS(text: string) {
  const client = new Client();

  const model = await client.fetchTtsModelByName("Pokedex (Pokemon, 4Kids)");

  console.log(`Model: ${model}`);

  if (!model) return;

  const audio = await model.infer(text);

  if (!audio) return;

  console.log(`Audio: ${model}`);

  return JSON.stringify(audio);
}
