import React from "react";

type CentralizedBodyProps = {
  children: React.ReactNode;
};

const CentralizedBody: React.FC<CentralizedBodyProps> = ({ children }) => {
  return <div data-relation="centralized">{children}</div>;
};

export default CentralizedBody;
