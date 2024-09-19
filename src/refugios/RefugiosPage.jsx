import { BallTriangle } from "react-loader-spinner";
import { useGetRefugiosQuery } from "../api"
import { HomeLayout } from "../page/HomeLayout"
import { motion } from "framer-motion";

export const RefugiosPage = () => {

 const { isLoading, data } = useGetRefugiosQuery();



  return (
    <HomeLayout>
      <div>
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
            ariaLabel="ball-triangle-loading"/>
          </motion.div>
           : JSON.stringify(data)
        }
        </div>
        
        <p></p>
      </div>
    </HomeLayout>
  )
}
