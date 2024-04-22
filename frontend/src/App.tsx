import { ReactElement, Fragment } from "react";

// Custom elements
import Sidebar from "./elements/sidebar";
import Navbar from "./elements/navbar";

function App(): ReactElement {
  return (
    <Fragment>
      <Sidebar />
      <Navbar />
    </Fragment>
  );
}

export default App;
