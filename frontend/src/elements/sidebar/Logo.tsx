import { FC, ReactElement } from "react";

import "../../styles/elements/sidebar/index.scss";

import LogoImg from "../../assets/Logo.png";

const Logo: FC = (): ReactElement => {
  return (
    <div className="sidebar-item logo">
      <img className="image" src={LogoImg} alt="Plagma" />
      <h6 className="name">PLAGMA</h6>
    </div>
  );
};

export default Logo;
