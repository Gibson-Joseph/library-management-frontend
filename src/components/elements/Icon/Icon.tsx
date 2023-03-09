import React from "react";

const Icon = ({ iconName, className }: any) => {
  return <img src={iconName} alt={iconName} className={className} />;
};

export default Icon;
