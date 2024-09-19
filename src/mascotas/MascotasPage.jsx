import { HomeLayout } from "../page/HomeLayout";
import { GridMascota } from "./components/GridMascota";
import { useGetMascotasQuery } from "../api";
import { motion } from "framer-motion";
import { BallTriangle } from "react-loader-spinner";
import { NotFoundMascotas } from "./components/NotFoundMascotas";

export const MascotasPage = () => {

  const { isLoading, data, isError} = useGetMascotasQuery();

  return (
    <HomeLayout>
      <div className="min-h-[86vh] flex flex-col justify-center items-center">
        {
          isLoading 
          
          ? <motion.div
              className="flex justify-center"
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
          : isError ? <NotFoundMascotas /> 
          : !data ? <NotFoundMascotas /> 
          : <GridMascota mascotas={data.mascotas}/>
        }
      </div>

    </HomeLayout>
  )
}
