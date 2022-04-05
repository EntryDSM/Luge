import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderContainer, MainContainer, NoticeContainer } from "../containers";

function MainRouter() {
  return (
    <>
      <HeaderContainer />
      <div id="RouterWrapper">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/notice" element={<NoticeContainer />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouter;
