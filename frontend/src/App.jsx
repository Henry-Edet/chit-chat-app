import * as Pages from "./pages/index";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Pages.Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Pages.Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Pages.SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
