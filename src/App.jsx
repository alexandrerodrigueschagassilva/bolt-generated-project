import { Routes, Route, Navigate } from 'react-router-dom'
    import Home from './pages/Home'
    import Login from './pages/Login'
    import Register from './pages/Register'
    import Dashboard from './pages/Dashboard'
    import VisaoGeral from './pages/dashboard/VisaoGeral'
    import Integracoes from './pages/dashboard/Integracoes'
    import Planos from './pages/dashboard/Planos'
    import Blacklist from './pages/dashboard/Blacklist'
    import AtribuirInstancia from './pages/admin/AtribuirInstancia'

    function App() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<VisaoGeral />} />
            <Route path="integracoes" element={<Integracoes />} />
            <Route path="planos" element={<Planos />} />
            <Route path="blacklist" element={<Blacklist />} />
            <Route path="atribuir-instancia" element={<AtribuirInstancia />} />
          </Route>
        </Routes>
      )
    }

    const ProtectedRoute = ({ children }) => {
      const token = localStorage.getItem('token')
      return token ? children : <Navigate to="/login" />
    }

    export default App
