import { useParams } from "react-router-dom";
import { Button } from "../auth/components/Button";

export const VerifyTokenPage = () => {

    const { token } = useParams();



  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4">
            <Button >Activar cuenta</Button>
        </div>
        
    </div>
  )
}
