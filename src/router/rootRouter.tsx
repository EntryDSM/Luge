import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingContainer } from "../containers";

const MainRouter = lazy(() => import("./mainRouter"));

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
        <Suspense fallback={<LoadingContainer />}>
            <MainRouter />
        </Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
