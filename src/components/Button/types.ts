import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export type ButtonVariant = "primary" | "secondary" | "regular";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  Icon?: IconType;
};
