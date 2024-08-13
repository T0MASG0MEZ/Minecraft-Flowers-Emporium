export function Footer() {
    return (
        <>
            <footer className="bg-white flex justify-center flex-col p-4">
                <div className="bg-black/30 w-3/4 h-[2px] rounded-full mx-auto"></div>
                <section className="flex justify-evenly p-4">
                    <div className="flex items-center">
                        <img className="w-14" src="/panal.webp" alt="panal" />
                        <img className="w-14" src="/obsidiana.webp" alt="obsidiana" />
                        <img className="w-14" src="/diamante.webp" alt="diamante" />
                    </div>
                    <div className="flex justify-center pt-4 text-black/50">
                        <h2>© 2024 Tomas Gomez. Casi todos los derechos reservados</h2>
                    </div>
                </section>
            </footer>
        </>
    )
}