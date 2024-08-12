import { NavigatorRoute } from "@_src/routes/NavigatorRoute"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Providers = () => {
  return (
    <>
      <NavigatorRoute />
      <ToastContainer />
    </>
  )
}