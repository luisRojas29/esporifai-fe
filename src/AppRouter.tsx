import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import RedirectPage from './components/RedirectPage';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/redirect" element={<RedirectPage />} />
      {/*<Route path="/dashboard" element={Dashboard} /> */}
    </Routes>
  )
}

export default AppRouter;