import "./App.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "../src/ROUTER/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
