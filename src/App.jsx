import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LandingPage } from './features/landingPage/pages/LandingPage';
import { PrivacyNoticePage } from './features/privacyNoticePage/pages/PrivacyNoticePage';
import { RegistrationPage } from './features/registrationPage/pages/RegistrationPage';
import { DataBreachReport } from './features/dataBreachReport/DataBreachReport';
import { DashboardLayout } from './components/layout/DashboardLayout';

import { LoginPage } from './features/auth/LoginPage';

import { ManagePendingMembers } from './features/manageMembers/pages/ManagePendingMembers';
import { ManageMembers } from './features/manageMembers/pages/ManageMembers';

import { EmptyPage } from './components/ui/EmptyPage';

import { ProtectedRoute } from './routes/ProtectedRoutes';





function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacy-notice' element={<PrivacyNoticePage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/dataBreachReport' element={<DataBreachReport />} />

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
