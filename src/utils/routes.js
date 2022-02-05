import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import routesURL from '../constants/routes';
import Welcome from '../screens/Welcome';
import Invitation from '../screens/Invitation';
import PartyForm from '../screens/PartyForm';

const AppRoutes = () => (
  <Routes>
    <Route path={routesURL.WELCOME} element={<Welcome />} />
    <Route path={routesURL.PARTY_FORM} element={<PartyForm />} />
    <Route path={routesURL.INVITATION} element={<Invitation />} />
  </Routes>
)

export default AppRoutes;