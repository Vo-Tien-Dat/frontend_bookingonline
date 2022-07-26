import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
  
const routes = [
  {
    path: "api",
    element: <Login />,
    routes: [
      {
        path: "register",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "home",
    element: <Home />,
    exact: true,
    routes: [
      {
        path: "hello",
      },
    ],
  },
];

const RouteWithSubRoutes = (routes) => {
  return (
    <>
      {routes.map((route, index) =>
        route.routes != undefined ? (
          <Route key={index} path={route.path} element={route.element}>
            {RouteWithSubRoutes(route.routes)}
          </Route>
        ) : (
          <Route key={index} path={route.path} element={route.element}></Route>
        )
      )}
    </>
  );
};

const MainRoute = ({ routes }) => {
  return (
    <Router>
      <Routes>{RouteWithSubRoutes(routes)}</Routes>
    </Router>
  );
};

export { MainRoute };

export default routes;
