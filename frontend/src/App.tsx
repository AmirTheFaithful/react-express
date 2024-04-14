import { ReactElement, Fragment } from "react";

// Custom components
import Sidebar from "./elements/sidebar";

function App(): ReactElement {
  return (
    <Fragment>
      <Sidebar />
    </Fragment>
  );
}

export default App;
