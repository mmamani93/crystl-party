import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import RoutesURL from '@constants/routes'
import Welcome from '@screens/Welcome'
import Invitation from '@screens/Invitation'
import PartyForm from '@screens/PartyForm'
import Header from '@components/Header'
import Footer from '../components/Footer'

const AppRoutes = () => (
  <>
    <Header />
    <Routes>
      <Route path={RoutesURL.WELCOME} element={<Welcome />} />
      <Route path={RoutesURL.PARTY_FORM} element={<PartyForm />} />
      <Route path={RoutesURL.INVITATION} element={<Invitation />} />
    </Routes>
    <Footer />
  </>
)

export default AppRoutes
