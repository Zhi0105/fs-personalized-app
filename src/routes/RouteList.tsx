import {  Routes, Route, useLocation } from 'react-router-dom'

// Screen
import { HomeScreen } from '@_src/components/Screen/HomeScreen'

export const RouteList = () => {
  const location = useLocation()

  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  )
}