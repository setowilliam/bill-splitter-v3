import { FC } from "react";

const PageLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-safari">{children}</div>
  );
};

export default PageLayout;
