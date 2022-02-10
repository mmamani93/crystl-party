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
import Footer from '@components/Footer'
import styles from '../styles.module.scss'

const AppRoutes = () => (
  <>
    <Header />
    <div className={styles.appContainer}>
      <Routes>
        <Route path={RoutesURL.WELCOME} element={<Welcome />} />
        <Route path={RoutesURL.PARTY_FORM} element={<PartyForm />} />
        <Route path={RoutesURL.INVITATION} element={<Invitation />} />
      </Routes>
    </div>
    <Footer />
  </>
)

export default AppRoutes
