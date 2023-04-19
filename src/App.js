import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage/LoginPage";
import SignUpPage from "./Page/SingUpPage/SignUpPage";
import DetailPage from "./Page/DetailPage/DetailPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
