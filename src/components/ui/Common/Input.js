import { cn } from "@/utils/tailwindmarge/cn";
import React from "react";

const Input = ({ className, type, placeHolder }) => {
  return (
    <input
      type={type}
      className={cn("outline-0", className)}
      placeholder={placeHolder}
    ></input>
  );
};

export default Input;
