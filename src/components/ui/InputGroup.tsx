import { cn } from "@/lib/utils";
import { InputGroupProps } from "@/types/global";

const InputGroup = ({
  children,
  className,
  error,
  ...props
}: InputGroupProps) => {
  return (
    <>
      <div className={cn("", className)}>{children}</div>{" "}
      {error && (
        <span role="alert" className="input_error">
          تکایە ئەم بەشە پڕکەرەوە
        </span>
      )}
    </>
  );
};

export default InputGroup;
