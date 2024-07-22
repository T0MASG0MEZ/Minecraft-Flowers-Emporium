import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Welcome } from "./components/welcome"
import { FiltersProvider } from "./components/context/filterscontext"
import { Notfound } from "./pages/notFound"
import { Contact } from "./pages/contac"

function App() {


  return (
    <>
      <BrowserRouter>
        <FiltersProvider>
          <Routes>
            <Route path="/" element={< Welcome />}/>
            <Route path="/contact" element={< Contact />} />
            <Route path="*" element={< Notfound />} />
          </Routes>
        </FiltersProvider>
      </BrowserRouter>
    </>
  )
}

export default App
