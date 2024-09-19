import { FaPaw } from "react-icons/fa"
import { NavLink, useLocation } from "react-router-dom"
import { HomeLayout } from "../../page/HomeLayout"

export const AuthLayout = ({children}) => {

    const location = useLocation()

  return (

<HomeLayout>
    <div className="flex min-h-[86dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground flex items-end justify-center gap-1"> CuatroPatitas <FaPaw /></h2>
        </div>


        {children}


        <div className="flex items-center justify-center">
          <div className="text-sm">
            {
                location.pathname == '/login' ? 
                    (<>
                        No tienes una cuenta?{" "}
                        <NavLink to='/register' className="font-medium text-primary hover:text-primary/80">
                            Registrate
                        </NavLink>
                    </>)
                    
                     : (<>
                            Ya tienes una cuenta?{" "}
                            <NavLink to='/login' className="font-medium text-primary hover:text-primary/80">
                            Inicia Sesion
                            </NavLink>
                       </>)
            }            
          </div>
        </div>
      </div>
    </div>
    </HomeLayout>
  )
}
