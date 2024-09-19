import { Provider } from "react-redux"
import { AppRouter } from "./router"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { AnimatePresence } from "framer-motion"


export const CuatroPatitas = () => {

  return (
    <Provider store={store}>
        <BrowserRouter>
          <AnimatePresence>
            <AppRouter />
          </AnimatePresence>
        </BrowserRouter>
    </Provider>
  )
}
