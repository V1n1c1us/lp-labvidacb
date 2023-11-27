import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
