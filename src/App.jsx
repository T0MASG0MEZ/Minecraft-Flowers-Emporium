import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Welcome } from "./components/welcome"
import { FiltersProvider } from "./components/context/filterscontext"
import { Notfound } from "./pages/notFound"
import { ShopTruck } from "./components/shop/shopTruck"
import { Checkout } from "./components/shop/Checkout.jsx"
import { AppProvider } from "./components/context/appcontext"
import { CardsDetails } from "./pages/cardsDetails"

function App() {


  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <FiltersProvider>
            <Routes>
              <Route path="/" element={< Welcome />} />
              <Route path="/shop" element={< ShopTruck />} />
              <Route path="/shop/:item" element={< CardsDetails />} />
              <Route path="*" element={< Notfound />} />
              <Route path="/checkout" element={< Checkout />} />
            </Routes>
          </FiltersProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
