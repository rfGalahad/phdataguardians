import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DashboardLayout } from './components/layout/DashboardLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { EmptyPage } from './components/ui/feedback/EmptyPage'
import { LoginPage } from './features/auth/LoginPage'
import { LandingPage } from './features/landingPage/pages/LandingPage'
import { ManageMembers } from './features/manageMembers/pages/ManageMembers'
import { ManagePendingMembers } from './features/manageMembers/pages/ManagePendingMembers'
import { PaymentSuccess } from './features/payment/PaymentSuccess';
import { PrivacyImpactAssessment } from './features/privacyImpactAssessment/PrivacyImpactAssessment'
import { PrivacyNoticePage } from './features/privacyNoticePage/pages/PrivacyNoticePage'
import { RegistrationPage } from './features/registrationPage/pages/RegistrationPage'
import { ProtectedRoute } from './routes/ProtectedRoutes'
import { SampleEmail } from './features/payment/SampleEmail';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>

        <Route path='/sample' element={<SampleEmail />} />
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacy-notice' element={<PrivacyNoticePage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/payment/success' element={<PaymentSuccess />} />

        <Route path='/services' >
          <Route path='privacy-impact-assessment' element={<PrivacyImpactAssessment />} />
          <Route path='privacy-training' element={<EmptyPage />} />
          <Route path='compliance-consulting' element={<EmptyPage />} />
          <Route path='policy-development' element={<EmptyPage />} />            
          <Route path='data-breach-response' element={<EmptyPage />} />
          <Route path='audit-risk-assessment' element={<EmptyPage />} />
          <Route path='research-advocacy' element={<EmptyPage />} />
          <Route path='technology-solutions' element={<EmptyPage />} />
        </Route>

        <Route path='/data-breach-report' element={<EmptyPage />} />

        <Route path='admin'>
          <Route path='login' element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout/>}>
              <Route path='dashboard' element={<EmptyPage />} />
              <Route path='managePendingMembers' element={<ManagePendingMembers />} />
              <Route path='manageMembers' element={<ManageMembers />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
