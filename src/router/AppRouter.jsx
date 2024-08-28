import { Navigate, Route, Routes } from "react-router-dom"
import { authenticated } from "../store/auth"
import { MascotasPage } from "../mascotas/MascotasPage"
import { RefugiosPage } from "../refugios/RefugiosPage"
import { HomePage } from "../page/HomePage"
import { DashboardRouter } from "../dashboard/DashboardRouter"
import { LoginPage, RegisterPage } from "../auth/pages"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { useSelector } from "react-redux"
import { CheckingAuth } from "../auth/components/CheckingAuth"


export const AppRouter = () => {

  const algo = useCheckAuth();

  const { status } = useSelector(state => state.auth)

  if( status === authenticated.checking){
    return <CheckingAuth />;
  }

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mascotas" element={<MascotasPage />} />
        <Route path="/refugios" element={<RefugiosPage />} />

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
            <Route path="/dashboard" element={<DashboardRouter />} />
          </>
        )}

        {/* Fallback Route (404 Not Found) */}
        <Route path="*" element={<Navigate to="/" />} />



    </Routes>
)
}
