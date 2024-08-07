import { BrowserRouter as Router } from 'react-router-dom'
import { RouteList } from './RouteList'
export const NavigatorRoute = () => {
  return (
    <Router>
      <RouteList />
    </Router>
  )
}