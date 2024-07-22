import { Shop } from "../assets/svg"

export function Navbar () {
    return (
        <>
            <nav className="text-black flex fixed items-center w-full justify-around p-4 bg-white/95">
                <div>
                    <a href="">
                        <h1 className="text-xl font-bold">Minecraft Flowers Emporium</h1>
                    </a>
                </div>
                <div className="flex items-center gap-4 p-2 md:p-0">
                    <a href="">
                        <Shop />
                    </a>
                </div>
            </nav>
        </>
    )
}