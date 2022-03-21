import { FC } from "react";
import { MdReceipt } from "react-icons/md";

const Header: FC = () => {
  return (
    <div className="p-4 border-b fixed top-0 w-full">
      <h1 className="text-2xl font-bold flex gap-2 items-center">
        <MdReceipt />
        Bill Splitter
      </h1>
    </div>
  );
};

export default Header;
