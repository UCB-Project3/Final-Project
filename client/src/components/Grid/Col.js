import React from "react";

export const Col = ({ size = null, children }) => (
  <div className={size}>{children}</div>
);
