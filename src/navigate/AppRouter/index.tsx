import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../Components/Layout";
import { routes } from "../data";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element: Component, isProtected }) => (
          <Route
          key={path}
          path={path}
          element={
          isProtected ? (
            <RequireAuth>
              <Component />
            </RequireAuth>
            ) : (
              <Component />
            )
          }
        />
      ))}
      </Route>
    </Routes>
  );
};
