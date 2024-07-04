import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from './Home/Error';
import HomePage from "./Home/Home";
import DetailPage from './Home/detail';
import RootPage from "./Root/Root";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail", element: <DetailPage /> },
    ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
