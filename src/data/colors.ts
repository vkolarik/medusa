export const allColors: string[] = [
  "černá",
  "hnědá",
  "bílá",
  "modrá",
  "fialová",
  "červená",
  "růžová",
  "oranžová",
  "žlutá",
  "zelená",
]

export const allColorsHex: string[] = [
  "#000000", // Černá
  "#8B4513", // Hnědá
  "#FFFFFF", // Bílá
  "#0000FF", // Modrá
  "#800080", // Fialová
  "#FF0000", // Červená
  "#FFC0CB", // Růžová
  "#FFA500", // Oranžová
  "#FFFF00", // Žlutá
  "#008000", // Zelená
]

//generate an array of colors with their hex values
export const colorHexArray = allColors.map((color, index) => {
  return { color, hex: allColorsHex[index] };
});