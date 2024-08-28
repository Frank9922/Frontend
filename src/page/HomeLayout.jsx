import { motion } from "framer-motion"
import { NavBar } from "./components/NavBar"


export const HomeLayout = ( { children } ) => {
  return (
    <main className="">
        <NavBar />

          <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 0.2,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            {children}
          </motion.div>
    </main>
)
}
