import classnames from "classnames";
import type { FC, PropsWithChildren } from "react";

import type { IGridBoxProps } from "@/components/GridBox/type";

import s from "./gridBox.module.scss";

export const GridBox: FC<PropsWithChildren<IGridBoxProps>> = ({ className, children }) => {
  const gridBox = classnames([s.box, className]);

  return <div className={gridBox}>{children}</div>;
};
