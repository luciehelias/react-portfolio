import { ReactNode } from "react";

type TextSectionProps = {
  children: ReactNode;
  className?: string;
};

const TextSection = ({ children, className = "" }: TextSectionProps) => (
  <p className={`common-text ${className}`}>{children}</p>
);

export default TextSection;
