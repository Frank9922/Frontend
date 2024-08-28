import { Spinner } from "@chakra-ui/react";
import { useGetMascotasQuery } from "../api"
import { HomeLayout } from "../page/HomeLayout";
import { GridMascota } from "./components/GridMascota";

export const MascotasPage = () => {

  const { isLoading, data} = useGetMascotasQuery();


  return (
    <HomeLayout>
      <div>
        {
          isLoading ? <Spinner /> : <GridMascota mascotas={data.mascotas} />
        }
      </div>

    </HomeLayout>
  )
}
