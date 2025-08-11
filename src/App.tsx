
import './App.css'
import PhoneCon from './Components/Infor/indexP'
import MessengerContact from './Components/Infor/MessengerContact'
import useRouteElement from './pages/useRouteElement'
import 'react-toastify/ReactToastify.css'
function App() {
const routeElement =  useRouteElement()

  return (
    <>
     {routeElement}
     <PhoneCon/>
     <MessengerContact/>
    </>
  )
}

export default App
