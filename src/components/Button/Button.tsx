import classNames from "classnames";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";

import s from "./button.module.scss";
import type { IButtonProps } from "./types";

export const Button: FC<PropsWithChildren<IButtonProps>> = ({ link, children }): JSX.Element => {
  const classButton = classNames([s.baseStyles]);

  return (
    <Link href={link}>
      <button className={classButton}>{children}</button>
    </Link>
  );
};
