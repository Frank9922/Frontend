import { BallTriangle } from "react-loader-spinner"

export const CheckingAuth = () => { 

  return (
    <div className={`w-screen h-screen flex justify-center items-center bg-primary animate__animated animate__fadeIn`}>
        <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#fafafa"
                ariaLabel="ball-triangle-loading"/>
    </div>
)
}
