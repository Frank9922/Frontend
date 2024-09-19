import { motion } from 'framer-motion';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import marco from '../../../public/m-m.png'


export const CardMascota = ( {nombreFantasia, adoptada, descripcion, edad, sexo, raza, galeriaFotos, hoverEffect = true, displayNombre = true} ) => {


  return (
    <Link to={`/mascota/${nombreFantasia}`} className='m-4 max-w-sm cursor-pointer'>
      <motion.div
      initial={{y:100, opacity: 0.5}}
      animate={{y:0, opacity: 1}}
      transition={{ duration: .5}}
      whileHover={ hoverEffect ? {
        scale: 1.03,
      } : {}}
       className='flex flex-col items-center mb-[17%]'>
            <div className="inline-block relative">
              <img className="block relative z-20" src={marco} />
              <img className="absolute top-[19%] w-[48%] h-[61%] left-[25%]  object-cover z-10" src={galeriaFotos} loading='lazy'/>
            </div>

            {displayNombre ? <h2 className="m-[-16%] z-20 font-dancing text-2xl">{nombreFantasia}</h2> : null }
      </motion.div>
        
    </Link>
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