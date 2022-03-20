import { ButtonVariant } from "./types";

export const BUTTON_VARIANT_STYLES: Record<
  ButtonVariant,
  Record<string, string>
> = {
  primary: {
    background: "bg-blue-700 hover:bg-blue-800 active:bg-blue-900 ",
    text: "text-white",
  },
  secondary: {
    border: "border-solid border-gray-200 hover:border-blue-700",
    background: "bg-white-700 active:bg-blue-900",
    text: "text-blue-700 active:text-white",
  },
  regular: {
    background: "bg-slate-200 hover:bg-slate-700 active:bg-slate-900",
    text: "text-slate-700 hover:text-white active:text-white",
  },
};

export const spacing = "px-4 py-2";
