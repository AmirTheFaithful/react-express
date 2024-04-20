import { FC, ReactElement } from "react";
import { PiShoppingCartDuotone, PiTShirtDuotone } from "react-icons/pi";

import Item from "./Item";

import "../../styles/elements/sidebar/index.scss";

const SidebarItemsList: FC = (): ReactElement => {
  return (
    <div className="items">
      <Item icon={<PiShoppingCartDuotone size={40} />} title="My Cart" />
      <Item icon={<PiTShirtDuotone size={40} />} title="Clothes" />
    </div>
  );
};

export default SidebarItemsList;
