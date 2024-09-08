import { lazy } from "react";

import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const RootLayout = lazy(() => import("@/pages/_root/RootLayout"));
const AuthRouterProvider = lazy(() => import("@/providers/AuthRouterProvider"));
const UserNullRouterProvider = lazy(
  () => import("@/providers/UserNullRouterProvider")
);

const Login = lazy(() => import("@/pages/_root/Login"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Error = lazy(() => import("@/pages/Error"));

const Home = lazy(() => import("@/pages/_auth/Home"));
const AuthLayout = lazy(() => import("@/pages/_auth/layout/AuthLayout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        {/* Root Routes */}
        <Route
          path="/"
          errorElement={<Error />}
          element={<UserNullRouterProvider Component={RootLayout} />}>
          <Route path="login" errorElement={<Error />} element={<Login />} />
        </Route>
      </>
      <>
        {/* Auth Routes */}
        <Route
          path="/"
          errorElement={<Error />}
          element={<AuthRouterProvider Component={AuthLayout} />}>
          <Route
            index
            errorElement={<Error />}
            element={<Navigate replace to={`/home`} />}
          />
          <Route path="home" errorElement={<Error />} element={<Home />} />
        </Route>
      </>
      <Route errorElement={<Error />} element={<NotFound />} path="*" />
    </>
  )
);

export default router;
