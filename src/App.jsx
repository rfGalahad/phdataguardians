import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LandingPage } from './features/landingPage/pages/LandingPage';
import { PrivacyNoticePage } from './features/privacyNoticePage/pages/PrivacyNoticePage';
import { RegistrationPage } from './features/registrationPage/pages/RegistrationPage';
import { DataBreachReport } from './features/dataBreachReport/DataBreachReport';
import { DashboardLayout } from './components/layout/DashboardLayout';




function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-notice" element={<PrivacyNoticePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dataBreachReport" element={<DataBreachReport />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
