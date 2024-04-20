import {
  ReactElement,
  FC,
  useState,
  MouseEventHandler,
  useRef,
  MutableRefObject,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Logo from "./Logo";
import Items from "./Items";
import Circles from "../../utils/Circles";

import "../../styles/elements/sidebar/index.scss";

type Prop = {
  refObject: MutableRefObject<HTMLButtonElement | null>;
};

export default function Sidebar(): ReactElement {
  const sidebarRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);

  return (
    /* Y-axis stack */
    <aside ref={sidebarRef} className="sidebar">
      {/* Background with colorful circles */}
      <section className="sidebar-background">
        <Circles />
      </section>
      {/* Sidebar's body with it's contents */}
      <section className="sidebar-contents">
        <Button refObject={sidebarRef} />
        <Logo />
        <Items />
      </section>
    </aside>
  );
}

const Button: FC<Prop> = ({ refObject }): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick: MouseEventHandler = (): void => {
    if (expanded == false) {
      refObject.current?.classList.add("expanded-sidebar");
      setExpanded(true);
    } else {
      refObject.current?.classList.remove("expanded-sidebar");
      setExpanded(false);
    }
  };

  return (
    <button onClick={handleClick}>
      {expanded ? <FaChevronLeft size={40} /> : <FaChevronRight size={40} />}
    </button>
  );
};
