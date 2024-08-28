import { motion } from 'framer-motion';
import PropTypes from 'prop-types'
motion

export const CardMascota = ( {nombreFantasia, adoptada, descripcion, edad, sexo, raza} ) => {
  return (
    <div className='p-4 max-w-sm cursor-pointer'>
      <motion.div
      initial={{y:200, opacity: 0.5}}
      animate={{y:0, opacity: 1}}
      transition={{ duration: 1}}
      whileHover={{
        scale: 1.03,
      }}
       className='flex justify-center rounded-lg h-full dark:bg-gray-800  p-8 flex-col bg-primary text-white'>
      <header>{nombreFantasia}</header>
        <div>{descripcion}</div>
        <footer>{edad}</footer>
        <p>{sexo}</p>
      </motion.div>
        
    </div>
  )
}


CardMascota.propTypes = {
    nombreFantasia: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    adoptada: PropTypes.number.isRequired,
    sexo: PropTypes.string.isRequired,
    raza: PropTypes.object.isRequired,
};