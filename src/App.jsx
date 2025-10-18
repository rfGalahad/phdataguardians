import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LandingPage } from './features/landingPage/pages/LandingPage';
import { PrivacyNoticePage } from './features/privacyNoticePage/pages/PrivacyNoticePage';
import { RegistrationPage } from './features/registrationPage/pages/RegistrationPage';




function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-notice" element={<PrivacyNoticePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
