"use client";
import { EditIcon, Ellipsis, Trash } from "lucide-react";
import React, { useState } from "react";

type EditDropDownProps = {
  id?: number;
};
const EditDropDown:React.FC<EditDropDownProps> = ({id}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsClick(false);
  };

  const handleMouseEnter = () => {
    setIsClick(true);
  };
  return (
    <div className="absolute top-[.5rem] right-[.5rem] cursor-pointer group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative">
        <Ellipsis size={22} />
        {/* <ul
          className="absolute top-full left-0 w-30 p-3 bg-white border rounded-sm z-20 flex flex-col space-y-1 opacity-0 transition-opacity
        ease-in-out duration-300 group-hover:opacity-100"
        >
          <li className="flex space-x-2 items-center">
            <EditIcon size={18} color="orange" />
            <span>Edit</span>
          </li>
          <li className="flex space-x-2 items-center">
            <Trash size={18} color="red" />
            <span>Delete</span>
          </li>
        </ul> */}
        {
            isClick && 
        <ul
          className="absolute top-full left-0 w-30 p-3 bg-white border rounded-sm z-20 flex flex-col space-y-1 "
        >
          <li className="flex space-x-2 items-center">
            <EditIcon size={18} color="orange" />
            <span>Edit</span>
          </li>
          <li className="flex space-x-2 items-center">
            <Trash size={18} color="red" />
            <span>Delete</span>
          </li>
        </ul>
        }

      </div>
    </div>
  );
};

export default EditDropDown;
