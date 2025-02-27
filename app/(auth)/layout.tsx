import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex w-full h-screen flex-col items-center justify-center">
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default layout;
