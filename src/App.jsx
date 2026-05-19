import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DashboardLayout } from './components/layout/DashboardLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { EmptyPage } from './components/ui/feedback/EmptyPage'
import { AuthCallback } from './features/auth/AuthCallback';
import { LoginPage } from './features/auth/LoginPage'
import { LandingPage } from './features/landingPage/pages/LandingPage'
import { ManageMembers } from './features/manageMembers/pages/ManageMembers'
import { ManagePendingMembers } from './features/manageMembers/pages/ManagePendingMembers'
import { PaymentSuccess } from './features/payment/PaymentSuccess';
import { PrivacyImpactAssessment } from './features/privacyImpactAssessment/PrivacyImpactAssessment'
import { useCheckout } from './features/privacyImpactAssessment/SubsciptionTiers/hooks/useCheckout';
import { PrivacyNoticePage } from './features/privacyNoticePage/pages/PrivacyNoticePage'
import { RegistrationPage } from './features/registrationPage/pages/RegistrationPage'
import { ProtectedRoute } from './routes/ProtectedRoutes'
import { supabase } from './services/supabaseClient';


function App() {
 
  const { initiateCheckout } = useCheckout();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const price = params.get('price');
    const name = params.get('name');

    // Only run if redirected from Google OAuth
    if (!price || !name) return;

    const handleCallback = async () => {
      setIsCheckingOut(true);

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setIsCheckingOut(false);
        return;
      }

      await initiateCheckout({
        email: session.user.email,
        price,
        name,
      });

      setIsCheckingOut(false);
    };

    handleCallback();
  }, []);

  if (isCheckingOut) return <AuthCallback />;

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
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
