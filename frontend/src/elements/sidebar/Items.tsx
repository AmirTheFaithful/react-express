import { FC, ReactElement } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";

import Logo from "./Logo";
import Item from "./Item";

import "../../styles/elements/sidebar/index.scss";

const SidebarItemsList: FC = (): ReactElement => {
  return (
    <div className="sidebar-contents">
      <Logo />
      <Item content={<PiShoppingCartDuotone size={40} />} />
    </div>
  );
};

export default SidebarItemsList;
