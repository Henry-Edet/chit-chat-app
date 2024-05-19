import * as Pages from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/signup" element={<Pages.SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
