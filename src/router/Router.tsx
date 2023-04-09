import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProviders";

export const Router = () => {
  return (
    <Switch>
      <LoginUserProvider>
        /*パスが「/」の場合ログイン画面を表示 */
        <Route exact path="/">
          <Login />
        </Route>
        /*パスが「/home」の場合はHomeRouteを参照して画面表示 */
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {HomeRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      /**上記以外の場合404ページを表示*/
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
