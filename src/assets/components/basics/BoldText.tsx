type BoldTextProps = {
  children: React.ReactNode;
};

const BoldText = ({ children }: BoldTextProps) => (
  <span className="font-bold text-purple-800">{children}</span>
);
export default BoldText;
