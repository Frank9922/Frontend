import { Link } from "react-router-dom"
import { AuthLayout } from "./AuthLayout"
import { Button } from "../components/Button"
import { motion } from "framer-motion"
import { Input } from "../components/Input"
import { Label } from "../components/Label"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IoMdClose } from "react-icons/io"
import { resetResponseError, startLoginWithEmailAndPassword } from "../../store/auth"

const initialForm = {
  email: '',
  password: ''
}

const rulesForm = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length > 6, 'La contraseña debe tener al menos 6 caracteres']
}


export const LoginPage = () => {

  const { responseError } = useSelector(state => state.auth)

  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const {email, emailValid, password, passwordValid, formState, onInputChange, formValidation, isFormValid } = useForm(initialForm, rulesForm);


  const onSubmitForm = async(e) => {

    e.preventDefault();

    setFormSubmitted(true);


    if(!isFormValid) return

    dispatch(resetResponseError())


    dispatch(startLoginWithEmailAndPassword(formState));
    
  }

  return (
      <AuthLayout>

      <motion.div
        initial={{ x: 100, opacity: 0.5 }}   
        animate={{ x: 0, opacity: 1 }}      
        exit={{ x: -100, opacity: 0 }}      
        transition={{ duration: 0.5 }} 
        className="bg-card rounded-lg shadow-2xl">

          <div className="transition-all duration-200 px-10 py-8">
      
            <form onSubmit={onSubmitForm} className="space-y-6 flex flex-col">
              <h2 className="text-2xl text-center font-bold">Iniciar Sesion</h2>
              <div className="flex flex-col gap-1">
                <Label htmlFor='email'>Email Adress</Label>
                  <Input
                   type='email'
                   name='email'
                   value={email}
                   onChange={onInputChange}
                   placeholder="example@test.com"
                   isValid={!emailValid}
                   showErrors={formSubmitted}
                   autoComplete="email"
                   />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor='password'>Password</Label>
                  <Link href="#" className="text-sm font-medium text-primary hover:text-primary/80" >
                    Forgot password?
                  </Link>
                </div>
                  <Input
                  type='password'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  placeholder='********'
                  isValid={!passwordValid}
                  showErrors={formSubmitted}
                  autoComplete="password"
                  />
              </div>
              {
                responseError && (

                  <motion.div 
                    initial={{ x: -20, opacity: 0.5 }}   
                    animate={{ x: 0, opacity: 1 }}      
                    exit={{ x: 0, opacity: 0 }}      
                    transition={{ duration: 0.5 }} className="relative text-error bg-background_error my-1 py-1 rounded-lg" >
                      <p className="p-2 text-sm">{responseError}</p> 
                      <IoMdClose className="absolute top-1 right-1 p-1 text-2xl cursor-pointer"/>
                  </motion.div>
                         
                )
              }

                  {
                    formSubmitted
                    ? 
                         Object.values(formValidation).map((error, index) => 
                        {
                          const initialX = index % 2 === 0 ? 100 : -100;
                          const exitX = index % 2 === 0 ? -100 : 100;

                          if(error === null) return;

                          return (
                            <div key={index} className="">
                          <motion.div initial={{ x: initialX, opacity: 0.5 }}   
                          animate={{ x: 0, opacity: 1 }}      
                          exit={{ x: exitX, opacity: 0 }}      
                          transition={{ duration: 0.5 }} className="text-error bg-background_error my-1 py-1 rounded-lg" key={index}> <p className="p-2 text-sm">{error}</p> </motion.div>
                         </div>
                         )}
                        )
                        
                      
                    : null

                      }
              
              <div className="pt-4">
                <Button>
                  Iniciar Sesion
                </Button>
              </div>
            </form>
          </div>
      </motion.div>
      </AuthLayout>
  )
}
