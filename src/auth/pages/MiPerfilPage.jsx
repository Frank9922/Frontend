import { useForm } from "../../hooks/useForm"
import { HomeLayout } from "../../page/HomeLayout"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Label } from "../components/Label"
import { motion } from "framer-motion"

const initialForm = {
  nombre: '',
  provincia: '',
  ciudad: '',
  direccion: ''
}

const rulesForm = {
  nombre: [(value) => value.length >= 3, 'El nombre debe ser Mayor a tres letras'],
  provincia: [(value) => value.length >= 4, 'La provincia debe ser Mayor a tres letras'],
  ciudad: [(value) => value.length >= 4, 'La ciudad debe ser Mayor a tres letras'],
  direccion: [(value) => value.length >= 6, 'El nombre debe ser Mayor a tres letras']
}


export const MiPerfilPage = () => {

  const { nombre, provincia, direccion, nombreValid, provinciaValid, direccionValid, ciudad, ciudadValid, formState, isFormValid, onInputChange } = useForm(initialForm, rulesForm)



  const onSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return

    console.log(formState)

  }


  return (
    <HomeLayout>

      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: .5}}

      className="flex flex-col min-h-[86vh]">
        <main className="flex flex-col p-[5%] w-full h-full justify-center items-center">
          <form onSubmit={onSubmit} className="bg-primary rounded-lg max-w-[800px] w-full">
            <section className="p-4  flex gap-4">
              <div className="w-full">
                <Label textWhite>
                  Nombre Completo
                </Label>
                <Input
                  value={nombre}
                  name='nombre'
                  placeholder=''
                  onChange={onInputChange}
                  showErrors={false}
                  autoComplete="nombre"
                  isValid={nombreValid}
                />
              </div>


            </section>

            <section className="p-4  flex gap-4">
              <div className="w-full">
                <Label textWhite>
                  Provincia
                </Label>
                <Input onChange={onInputChange}
                  value={provincia}
                  name='provincia'
                  placeholder=''
                  showErrors={false}
                  autoComplete="provincia"
                  isValid={provinciaValid}
                />
              </div>

              <div className="w-full">
                <Label textWhite>
                  Ciudad
                </Label>
                <Input onChange={onInputChange}
                  value={ciudad}
                  name='ciudad'
                  placeholder=''
                  showErrors={false}
                  autoComplete="ciudad"
                  isValid={ciudadValid}
                />
              </div>

            </section>

            <section className="p-4  flex gap-4">
              <div className="w-full">
                <Label textWhite>
                  Direccion
                </Label>
                <Input onChange={onInputChange}
                  value={direccion}
                  name='direccion'
                  placeholder=''
                  showErrors={false}
                  autoComplete="direccion"
                  isValid={direccionValid}
                />
              </div>

            </section>

            <section className="p-4  flex gap-4">
              <Button colorPrimary={false}>
                xd
              </Button>
            </section>

          </form>

        </main>
      </motion.div>

    </HomeLayout>
  )
}
