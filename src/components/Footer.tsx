import { FC } from "react";
import Button from "./Button";

type FooterProps = {};

const Footer: FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <div className="p-4 border-t grid gap-4 grid-cols-2">
      <Button variant="regular">Add</Button>
      <Button>Calculate</Button>
    </div>
  );
};

export default Footer;
