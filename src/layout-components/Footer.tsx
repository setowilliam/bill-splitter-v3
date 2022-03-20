import { FC } from "react";
import Button from "../components/Button";

type FooterProps = {};

const Footer: FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <div className="p-4 border-t">
      <Button>Footer Button</Button>
    </div>
  );
};

export default Footer;
