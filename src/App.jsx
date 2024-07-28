import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Welcome } from "./components/welcome"
import { FiltersProvider } from "./components/context/filterscontext"
import { Notfound } from "./pages/notFound"
import { Contact } from "./pages/contac"
import { ShopTruck } from "./components/shop/shopTruck"
import { AppProvider } from "./components/context/appcontext"

function App() {


  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <FiltersProvider>
            <Routes>
              <Route path="/" element={< Welcome />} />
              <Route path="/contact" element={< Contact />} />
              <Route path="/shop" element={< ShopTruck />} />
              <Route path="*" element={< Notfound />} />
            </Routes>
          </FiltersProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
