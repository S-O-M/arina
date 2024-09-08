import { cn } from "@/lib/utils";
import { InputAddonProps } from "@/types";
import React from "react";

const InputAddon = ({ children, className, ...props }: InputAddonProps) => {
  return (
    <div {...props} className={cn("", className)}>
      {children}
    </div>
  );
};

export default InputAddon;
