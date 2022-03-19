import { FC } from "react";
import clsx from "../utils/clsx";
import { BUTTON_VARIANT_STYLES, spacing } from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = "primary", ...buttonProps } = props;

  const variantStyle = BUTTON_VARIANT_STYLES[variant];

  return (
    <button
      {...buttonProps}
      className={`${spacing} ${clsx(
        Object.values(variantStyle)
      )} w-fit font-medium rounded transition`}
    >
      {children}
    </button>
  );
};

export default Button;