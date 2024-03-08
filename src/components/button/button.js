import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(
        `
        w-full 
        rounded-full 
        bg-white
        border
        border-transparent
        px-2
        py-2 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-[#080704]
        font-bold
        hover:scale-105
        transition
      `,
        disabled && 'opacity-75 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
