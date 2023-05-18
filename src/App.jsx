import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Shared/Footer/Footer'
import Header from './component/Shared/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
