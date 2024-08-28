import { Provider } from "react-redux"
import { AppRouter } from "./router"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"


export const CuatroPatitas = () => {

  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <AnimatePresence>
            <AppRouter />
          </AnimatePresence>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  )
}
