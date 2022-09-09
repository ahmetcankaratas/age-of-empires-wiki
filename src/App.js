import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Layout/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}
export default App;
