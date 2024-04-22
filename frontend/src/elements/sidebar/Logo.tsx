import { FC, ReactElement } from "react";

import "../../styles/elements/sidebar/index.scss";

import LogoImg from "../../assets/Logo.png";

// A line on the top of sidebar that consists of small independent components
const LogoContainer: FC = (): ReactElement => {
  return (
    <div className="logo-container">
      <Logo />
    </div>
  );
};

// A "box" that represents a logo with icon and brandname
const Logo: FC = (): ReactElement => {
  return (
    <div className="logo">
      <img className="image" src={LogoImg} alt="Plagma" />
      <h6 className="name">PLAGMA</h6>
    </div>
  );
};

export default LogoContainer;
