import { FC, ReactElement } from "react";

import Badge from "../../utils/Badge";

import "../../styles/elements/sidebar/index.scss";

type Props = {
  content: ReactElement;
};

const SidebarItem: FC<Props> = ({ content }): ReactElement => {
  return (
    <li className="sidebar-item">
      <div className="icon">
        {content}
        <Badge bg="red" text="white" count={1} />
      </div>
    </li>
  );
};

export default SidebarItem;
