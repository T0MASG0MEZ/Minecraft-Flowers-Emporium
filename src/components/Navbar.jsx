

export function Navbar({ img }) {
    return (
        <nav className="text-black flex fixed w-full justify-around p-4 bg-white">
            <div>
                <h1 className="text-xl">Minecraft Flowers Emporium</h1>
            </div>
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Buscar..." className="rounded-3xl bg-slate-200 p-2" />
                <img src={img} className="size-7" alt={"Foto de" + img } />
            </div>
        </nav>
    )
}