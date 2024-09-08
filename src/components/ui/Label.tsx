import { cn } from "@/lib/utils";
import { LabelProps } from "@/types";
import React, { forwardRef } from "react";

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <label
        className={cn(
          "cursor-pointer text-md text-nowrap md:text-lg font-bold font-speda_bold",
          className
        )}
        {...props}>
        {children}
      </label>
    );
  }
);

export default Label;
