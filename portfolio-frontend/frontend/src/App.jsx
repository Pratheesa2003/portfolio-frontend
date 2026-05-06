import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./user/HomePage";
import AdminLogin from "./admin/AdminLoginPage";
import AdminDashboard from "./admin/AdminDashboardPage";
import ManageProfile from "./admin/ManageProfile";
import ManageSkills from "./admin/ManageSkills";
import ManageLearning from "./admin/ManageLearning";
import ManageProjects from "./admin/ManageProjects";
import ManageContact from "./admin/ManageContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<ManageProfile />} />
        <Route path="/admin/skills" element={<ManageSkills />} />
        <Route path="/admin/learning" element={<ManageLearning />} />
        <Route path="/admin/projects" element={<ManageProjects />} />
        <Route path="/admin/contact" element={<ManageContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;