import { ReactElement } from "react";

import Searchbar from "./Searchbar";

import "../../styles/elements/navbar/index.scss";

export default function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      <Searchbar />
    </nav>
  );
}
