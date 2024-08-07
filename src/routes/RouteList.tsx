import {  Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Screen
import { HomeScreen } from '@_src/components/Screen/HomeScreen'

export const RouteList = () => {
  const location = useLocation()

  
  return (
    <AnimatePresence initial={false}>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  </AnimatePresence>
  )
}