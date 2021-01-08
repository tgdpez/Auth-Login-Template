import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.js";

const MainLayout = () => {
  return (
    <>
      <div className="root">
        {/*To actually see this MainLayout TopBar - the routing must not navigate away from the "/" parent path. See Authenticated-app.js */}
        <TopBar />
        <div>
          <h1>This main layout houses all the other layouts</h1>
          <h6>It renders them conditionally based on the children routes.</h6>
          <h6>This also houses the TopBar component</h6>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
