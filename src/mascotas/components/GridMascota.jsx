import { motion } from "framer-motion"
import { CardMascota } from "./CardMascota"
import PropTypes from 'prop-types'
import { useState } from "react"
import { BallTriangle } from "react-loader-spinner"

export const GridMascota = ( { mascotas } ) => {

    const [items, setItems] = useState(15)
    const [isLoading, setIsLoading] = useState(false);
    const [onFilters, setOnFilters] = useState(false)
    const [filters, setFilters] = useState({
        edad: '',
        sexo: '',
        raza: ''
    })

    const handleButton = () => {

        if(items >= mascotas.length) return

        setIsLoading(true); 
        setTimeout(() => {
            setItems(items + 15);
            setIsLoading(false); 
        }, 1000);
    }

    const filteredMascotas = mascotas.filter((mascota) => {

        if(!onFilters) return mascotas

        return (
            (filters.edad === '' || mascota.edad === filters.edad) &&
            (filters.sexo === '' || mascota.sexo === filters.sexo) &&
            (filters.raza === '' || mascota.raza === filters.raza)
        );
    });

    const loadingAnimation = (
        <motion.div
          className="flex justify-center" // Add a class for styling
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#7aafa5"
            ariaLabel="ball-triangle-loading"
            />
        </motion.div>
      );

      const handleFiltrar = (event) => {
        event.preventDefault();
        console.log(filters)
        setOnFilters(true);
      }

      const handleInputChange = (e) => {

        setOnFilters(false);

        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
         
    };


  return (
    <div className="m-14">
            {/* <div className="mb-6">
                <form onSubmit={handleFiltrar} className="flex gap-4 flex-wrap">
                    <label>
                        Edad:
                        <input
                            type="text"
                            value={filters.edad}
                            onChange={(e) => setFilters({ ...filters, edad: e.target.value })}
                            className="ml-2 p-1 border rounded"
                        />
                    </label>
                    <label>
                        Sexo:
                        <input
                            type="text"
                            value={filters.sexo}
                            onChange={(e) => setFilters({ ...filters, sexo: e.target.value })}
                            className="ml-2 p-1 border rounded"
                        />
                    </label>
                    <label>
                        Raza:
                        <input
                            type="text"
                            value={filters.raza}
                            onChange={(e) => setFilters({ ...filters, raza: e.target.value })}
                            className="ml-2 p-1 border rounded"
                        />
                    </label>
                    <button>
                        Filtrar
                    </button>
                </form>
            </div> */}

        <motion.section
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">

            { filteredMascotas.slice(0, items).map((mascota) => (
                <CardMascota key={mascota.id} {...mascota} />
            ))}
        </motion.section>
        <section className="flex justify-center flex-col mx-[20%] mt-[5%]">

        {isLoading ? (
          loadingAnimation
        ) : (
          items < mascotas.length && (
            <button
              className="rounded-lg bg-primary text-white dark:bg-gray-800 m-4 p-4"
              onClick={handleButton}
            >
              Cargar Más
            </button>
          )
        )}
           
        </section>
        </div>
  )
}

GridMascota.propTypes = {
    mascotas: PropTypes.arrayOf(PropTypes.string).isRequired,
};
