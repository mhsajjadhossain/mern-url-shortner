import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import useAuthContext from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Layout>
        <div className="pages pt-16">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              exact={true}
              element={!user ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to={"/"} />}
            />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
