import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: string;
  children?: ReactNode;
  btnText?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  
}
const Button = ({btnStyle, btnText, iconLeft, iconRight,...props }: IButtonProps) => {
  return (
    <button className={btnStyle} {...props}>
      {iconLeft}
      {btnText}
      {iconRight}
    </button>
  );
};

export default Button;
