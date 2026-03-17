import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPages />} />

        <Route element={<ProtectedRoute allowedRols={["admin" , "airforce" , "intel"]} />}>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/launcher/:id" element={<LauncherDetailsPage />} />
        </Route>

        <Route element={<ProtectedRoute allowedRols={["admin"  , "intel"]} />}>
          <Route path="/allusers" element={<Users />} />
          <Route path="/AddLauncher" element={<AddLauncherPage />} />

        </Route>
        <Route element={<ProtectedRoute allowedRols={["admin" ]} />}>
          <Route path="/allusers" element={<Users />} />
          <Route path="/rgister" element={<RegisterPages />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
