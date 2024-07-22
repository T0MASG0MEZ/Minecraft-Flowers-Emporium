import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Welcome } from "./components/welcome"
import { FiltersProvider } from "./components/context/filterscontext"
import { Notfound } from "./pages/notFound"

function App() {


  return (
    <>
      <BrowserRouter>
        <FiltersProvider>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="*" element={<Notfound />} />
          </Routes>
        </FiltersProvider>
      </BrowserRouter>
    </>
  )
}

export default App
