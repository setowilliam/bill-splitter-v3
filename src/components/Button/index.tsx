import { FC, useMemo } from "react";
import clsx from "../../utils/clsx";
import { BUTTON_VARIANT_STYLES, flex, spacing } from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = "primary", Icon, ...buttonProps } = props;

  const variantStyle = useMemo(
    () => clsx(Object.values(BUTTON_VARIANT_STYLES[variant])),
    [variant]
  );

  return (
    <button
      {...buttonProps}
      className={`${variantStyle} ${spacing} ${flex} font-bold rounded-lg border transition`}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
