import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStyle } from "./App.styled";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";

function App() {
  return (
    <AppStyle>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;
