import { FC, ReactElement } from "react";
import { FaSearch } from "react-icons/fa";

import "../../styles/elements/navbar/searchbar.scss";

const Searchbar: FC = (): ReactElement => {
  return (
    <div className="searchbar">
      <input className="input" type="text" placeholder="Search..." />
      <div className="button">
        <FaSearch size={40} />
      </div>
    </div>
  );
};

export default Searchbar;
