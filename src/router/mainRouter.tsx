import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderContainer, MainContainer } from "../containers";


function MainRouter() {
  return (
    <>
      <HeaderContainer />
      <div id="RouterWrapper">
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouter;
