import { FC, ReactElement } from "react";

import "../../styles/elements/sidebar/index.scss";

import LogoImg from "../../assets/Logo.png";

const Logo: FC = (): ReactElement => {
  return (
    <a className="logo" href="/">
      <img className="image" src={LogoImg} alt="Plagma" />
      <h6 className="name">PLAGMA</h6>
    </a>
  );
};

export default Logo;
