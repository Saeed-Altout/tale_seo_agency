import { flex } from "@/app/styles";
const WhiteSpace = ({ children, styles }) => {
  return (
    <div
      className={`${flex.startCenter} ${styles} flex-col overflow-hidden bg-white rounded-lg shadow-xl`}
    >
      {children}
    </div>
  );
};

export default WhiteSpace;
