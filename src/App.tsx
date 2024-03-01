import { RouterProvider } from "react-router-dom";
import "./App.css";
import BaseRouter from "./routes/BaseRouter";
//import FormContextProvider from "./context/context.tsx";
//import { MyContext } from "./context/contextAll.ts";
function App() {
  return (
    <RouterProvider router={BaseRouter} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
