import { Spinner } from "@chakra-ui/react";
import { useGetRefugiosQuery } from "../api"
import { HomeLayout } from "../page/HomeLayout"

export const RefugiosPage = () => {

 const { isLoading, data } = useGetRefugiosQuery();

  return (
    <HomeLayout>
      <div>
        <h1>RefugiosPage</h1>
        {
          isLoading ? <Spinner /> : JSON.stringify(data)
        }
        <p></p>
      </div>
    </HomeLayout>
  )
}
