import { FC, ReactElement } from "react";

import Badge from "../../utils/Badge";

import "../../styles/elements/sidebar/index.scss";

type Props = {
  icon: ReactElement;
  title: string;
};

const SidebarItem: FC<Props> = ({ icon, title }): ReactElement => {
  return (
    <li data-title={title} className="sidebar-item">
      <div className="icon">
        {icon}
        <Badge bg="red" text="white" count={1} />
      </div>

      <p className="item-title">{title}</p>
    </li>
  );
};

export default SidebarItem;
