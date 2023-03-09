import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}

    <div>
      <main>{props.children}</main>
    </div>
  </div>
);

export { Main };
