"use client";

export function getTextScreen() {
  const textScreen = document.querySelector(
    "#text-screen",
  ) as HTMLParagraphElement;
  return textScreen;
}

export function getValueInput() {
  const valueInput = document.querySelector("#val-screen") as HTMLInputElement;
  return valueInput;
}
