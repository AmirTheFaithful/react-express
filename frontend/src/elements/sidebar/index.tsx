import { ReactElement } from "react";

import Logo from "./Logo";
import Circles from "../../utils/Circles";

import "../../styles/elements/sidebar/index.scss";

export default function Sidebar(): ReactElement {
  return (
    <aside className="sidebar">
      {/* Background with colorful circles */}
      <div className="sidebar-background">
        <Circles />
      </div>
      {/* Sidebar's body with it's contents */}
      <div className="sidebar-contents">
        <Logo />
      </div>
    </aside>
  );
}
