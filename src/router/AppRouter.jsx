import { Navigate, Route, Routes } from "react-router-dom"
import { authenticated } from "../store/auth"
import { MascotasPage } from "../mascotas/MascotasPage"
import { RefugiosPage } from "../refugios/RefugiosPage"
import { HomePage } from "../page/HomePage"
import { LoginPage, RegisterPage } from "../auth/pages"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { useSelector } from "react-redux"
import { CheckingAuth } from "../auth/components/CheckingAuth"
import { MascotaPage } from "../mascotas/MascotaPage"
import { MiPerfilPage } from "../auth/pages/MiPerfilPage"
import { MisMascotasPage } from "../auth/pages/MisMascotasPage"
import { VerifyTokenPage } from "../page/VerifyTokenPage"


export const AppRouter = () => {

  useCheckAuth();

  const { status } = useSelector(state => state.auth)

  if( status === authenticated.checking){
    return <CheckingAuth />;
  }

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mascotas" element={<MascotasPage />} />
        <Route path="/refugios" element={<RefugiosPage />} />

        <Route path="mascota/:mascotaName" element={<MascotaPage />} />
        <Route path="verifyToken/:token" element={<VerifyTokenPage />} />

        {/* Authentication Routes (Conditional rendering) */}
        {status !== authenticated.authenticated && status !== authenticated.checking && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}

        {/* Logged-in User Routes */}
        {status === authenticated.authenticated && (
          <>
            <Route path="/logout" element={<Navigate to="/dashboard" />} />
            <Route path="/mi-perfil" element={<MiPerfilPage /> } />
            <Route path='/mis-mascotas' element={<MisMascotasPage /> } />
          </>
        )}

        {/* Fallback Route (404 Not Found) */}
        <Route path="*" element={<Navigate to="/" />} />



    </Routes>
)
}
