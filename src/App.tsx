
import './App.css'
import useRouteElement from './pages/useRouteElement'

function App() {
const routeElement =  useRouteElement()

  return (
    <>
     {routeElement}
    </>
  )
}

export default App
