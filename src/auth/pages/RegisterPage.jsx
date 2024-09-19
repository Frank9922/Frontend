import { Link } from "react-router-dom"
import { AuthLayout } from "./AuthLayout"
import { Button } from "../components/Button"
import { motion } from "framer-motion"
import { FormRegister } from "../components/FormRegister"
motion

export const RegisterPage = () => {



  return (
      <AuthLayout>
        <FormRegister />
    
      </AuthLayout>
      
  )
}
