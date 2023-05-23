import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-tabulator/lib/styles.css";
import { GlobalContextProvider } from "./contexts";

import "./App.css";

//COMPONENTS
import { Home, Loader, Login } from "./layouts";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/authenticate" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
