import { motion } from "framer-motion"
import { Label } from "./Label"
import { Input } from "./Input"
import { Link } from "react-router-dom"
import { Button } from "./Button"

export const FormRegister = () => {
  return (
    <motion.div
    initial={{ x: 100, opacity: 0.5 }}   
    animate={{ x: 0, opacity: 1 }}      
    exit={{ x: -100, opacity: 0 }}      
    transition={{ duration: 0.5 }} 
    className="bg-card rounded-lg shadow-2xl">

      <div className="px-10 py-8">
        <form className="space-y-6">
          <h2 className="text-2xl text-center font-bold">Crear Cuenta</h2>
          <div>
            <Label htmlFor='email'>
                Email Adress
            </Label>
            <Input name='email' type='email' placeholder='name@example.com'/>

          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="name@example.com"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password">Password</label>

              <Link href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                Forgot password?
              </Link>
            
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Crear Cuenta
            </Button>
          </div>
        </form>
      </div>
  </motion.div>
  )
}
