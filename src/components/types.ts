import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "regular";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};
