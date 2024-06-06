import Image from "next/image";
import React from "react";

interface ExpandButtonProps {
  onClick: () => void;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-[#311535] rounded-full">
      <Image src="icon-plus.svg" alt="" width={30} height={30} />
    </button>
  );
};

export default ExpandButton;
