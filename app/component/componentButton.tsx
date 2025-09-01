import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router";

interface ICustombutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
}

function CustomButton3({
  variant = "primary",
  title,
  onClick,
  className,
}: ICustombutton) {
  return (
    <button
      onClick={onClick}
      className={`${variant == "primary" ? "bg-primary text-white" : "bg-white border-primary border text-primary"}  px-8 py-3 rounded-md  cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}

export { CustomButton3 };
