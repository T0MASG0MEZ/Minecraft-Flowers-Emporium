import { Cartelinicio } from "./cartelinicio"
import { Products } from "./products"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { useContext } from "react";
import { Loader } from "./loader/loader.jsx"
import { AppContext } from "../components/context/appcontext.jsx"

export function Welcome() {

    const { flores } = useContext(AppContext)

    return (
        <>
            {
                    flores.length === 0 ?
                    <Loader />
                    : 
                    <>
                        < Navbar />
                        < Cartelinicio />
                        < Products lasFlores={flores} />
                        < Footer />
                    </>
            }
        </>
    )
}