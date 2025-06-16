import { RouterProvider } from "react-router";
import "./styles/main.scss";
import { router } from "./Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
