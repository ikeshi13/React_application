import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    /**パスが「/home/」の場合Home画面を表示 */
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    /**パスが「/home/user_management」の場合UserManagement画面を表示 */
    path: "/user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    /**パスが「/home/setting」の場合Seting画面を表示 */
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    /**パスが上記以外の場合404ページを表示 */
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
