import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Blog /> */}
    </div>
  );
}

export default App;
