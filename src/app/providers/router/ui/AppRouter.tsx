import React, {Suspense} from "react";
import { Routes, Route } from "react-router-dom"
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { routeConfig } from "shared/config/routConfig/routConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter;