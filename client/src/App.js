import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import RequestAprooval from "./pages/admin/RequestAprooval";
import AddLoans from "./component/admin/AddLoans";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/admin" element={<Navbar />}>
            <Route index element={<AdminHome />} />
            <Route path="loanRequest" element={<RequestAprooval />} />
            <Route path="addLoans" element={<AddLoans />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
