import classnames from "classnames";
import type { FC, PropsWithChildren } from "react";
import React from "react";

import s from "./gridLayout.module.scss";

export const GridLayout: FC<PropsWithChildren> = ({ children }) => {
  const classGrid = classnames([s.gridContainer]);

  return <div className={classGrid}>{children}</div>;
};
