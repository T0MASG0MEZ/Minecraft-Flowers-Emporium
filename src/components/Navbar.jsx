import { useContext } from "react"
import { Shop } from "../assets/svg"
import { Link } from "react-router-dom"
import { AppContext } from "./context/appcontext"

export function Navbar () {
    const { carrito } = useContext(AppContext); 

    return (
        <>
            <nav className="text-black flex fixed items-center w-full justify-around z-50 p-4 bg-white/95">
                <div>
                    <Link to="/">
                        <h1 className="text-xl font-bold">Minecraft Flowers Emporium</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/shop">
                        <div className="flex items-center gap-2 justify-center">
                            <div>
                                <Shop />
                            </div>
                            {
                                carrito.length > 0 &&
                                <div className="bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                                    {carrito.length}
                                </div>
                            }
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}