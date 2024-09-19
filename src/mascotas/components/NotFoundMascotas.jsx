import { motion } from "framer-motion"


export const NotFoundMascotas = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
        NotFoundMascotas
    </motion.div>
  )
}
