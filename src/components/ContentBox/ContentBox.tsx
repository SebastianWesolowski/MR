import classnames from "classnames";
import type { FC, PropsWithChildren } from "react";
import React from "react";

import type { IContentBoxProps } from "@/components/ContentBox/type";

import s from "./contentBox.module.scss";

export const ContentBox: FC<PropsWithChildren<IContentBoxProps>> = ({ image, children }) => {
  const fullBackground = classnames([s.fullBackground]);

  return (
    <div className={s.layoutBox}>
      {image ? <img className={fullBackground} src={image} alt="background" /> : null}
      <div className={s.contentLayout}>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};
