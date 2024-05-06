import * as Pages from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/signup" element={<Pages.SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
