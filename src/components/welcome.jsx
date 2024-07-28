import { Cartelinicio } from "./cartelinicio"
import { Products } from "./products"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { useContext, useEffect } from "react";
import { Loader } from "./loader/loader.jsx"
import { AppContext } from "../components/context/appcontext.jsx"

export function Welcome() {

    const { cargarData, flores } = useContext(AppContext)

    useEffect(() => {
        cargarData();
    });

    const lasFlores = flores

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