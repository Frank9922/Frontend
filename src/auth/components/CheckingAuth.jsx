import { Spinner } from "@chakra-ui/react"

export const CheckingAuth = () => { 

  return (
    <div className={`w-screen h-screen flex justify-center items-center bg-primary animate__animated animate__fadeIn`}>
        <Spinner size='xl'
          width='100px'
          height='100px'
          speed='0.85s'
          color="white"
        />
    </div>
)
}
