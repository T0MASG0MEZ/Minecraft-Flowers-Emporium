import { Cartelinicio } from "./cartelinicio"
import { Products } from "./products"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
export function Welcome () {
    return (
        <>  
            < Navbar />
            < Cartelinicio />
            < Products />
            < Footer />
        </>
    )
}