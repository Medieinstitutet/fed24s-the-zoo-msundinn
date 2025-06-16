import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { AnimalsPage } from "./pages/AnimalsPage";
import { AnimalDetailsPage } from "./pages/AnimalDetailsPage";
import { AnimalsApp } from "./components/AnimalsApp";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      {
        element: <AnimalsApp />,
        children: [
          { path: "animals", element: <AnimalsPage /> },
          { path: "animals/:id", element: <AnimalDetailsPage /> },
        ],
      },
    ],
  },
]);
