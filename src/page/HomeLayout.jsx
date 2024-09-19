import { motion } from "framer-motion"
import { NavBar } from "./components/NavBar"
import { Link } from "react-router-dom"


export const HomeLayout = ( { children } ) => {
  return (
    <>
    <main className="bg-white">
        <NavBar />

          <motion.div 
          >

            {children}
            
          </motion.div>
    </main>

    <footer className="bg-primary px-4 py-6 text-primary-foreground md:px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 CuatroPatitas. Desarrollador por <Link to='https://www.linkedin.com/in/francoleivaa/'>Franco Leiva</Link></p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-primary-foreground/80">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-primary-foreground/80" >
              Terms of Service
            </Link>
          </div>
        </div>
    </footer>
    </>
)
}
