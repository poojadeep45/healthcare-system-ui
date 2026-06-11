import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorSignupPage from "./pages/DoctorSignupPage";
import LaboratorySignupPage from "./pages/LaboratorySignupPage";
import PharmacySignupPage from "./pages/PharmacySignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctor" element={<DoctorSignupPage />} />
        <Route path="/laboratory" element={<LaboratorySignupPage />} />
        <Route path="/pharmacy" element={<PharmacySignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;