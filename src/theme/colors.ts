import { Colors } from "./types";

export const baseColors = {
  failure: "#fa113e",
  primary: "#43AA8B",
  primaryBright: "#FFBF00",
  primaryDark: "#43AA8B",
  secondary: "#FFBF00",
  success: "#15bd69",
  warning: "#fa113e",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f6f8", // light color
  backgroundDisabled: "#E9EAEB", 
  contrast: "#43AA8B", // dark color
  invertedContrast: "#FFFFFF", // white
  input: "#eeeeee",
  tertiary: "#EFF4F5",
  text: "#C8C9CA",
  textDisabled: "#BDC2C4",
  textSubtle: "#C8C9CA",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#C8C9CA",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#000000",
  tertiary: "#353547",
  text: "#C8C9CA",
  textDisabled: "#666171",
  textSubtle: "#C8C9CA",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
