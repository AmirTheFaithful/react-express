import { FC, ReactElement } from "react";

import "../styles/utils/badge.scss";

type Props = {
  bg: string;
  text: string;
  count: number;
};

const Badge: FC<Props> = ({ bg, text, count }): ReactElement => {
  return (
    <span className="badge" style={{ backgroundColor: bg, color: text }}>
      {count}
    </span>
  );
};

export default Badge;
