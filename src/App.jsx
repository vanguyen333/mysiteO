import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <RouterProvider router={router} />
    // <div>
    //   <Header />
    //   <Home />
    //   {/* <Blog /> */}
    // </div>
  );
}

export default App;
