
import './App.css'
import useRouteElement from './pages/useRouteElement'
import 'react-toastify/ReactToastify.css'
function App() {
const routeElement =  useRouteElement()

  return (
    <>
     {routeElement}
     
    </>
  )
}

export default App
