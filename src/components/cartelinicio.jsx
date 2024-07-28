import { Arrowdown } from "../assets/svg";
import "./cartelinicio.css";

export function Cartelinicio () {
    return (
        <section className="block h-screen relative" id="welcome">
            <article className="background-image h-screen fixed top-0 right-0 left-0 bottom-0 -z-50">
                <div className="flex items-center flex-col text-white justify-center h-screen bg-black/50">
                    <div className="text-xl md:text-6xl max-w-[700px] text-center text-pretty font-black py-4 pl-4">
                        <h2 className="text-shadow-pop-br z-10">Bienvenidos a la mejor tienda de flores de Minecraft!</h2>
                    </div>
                </div>
                <div className="animate-bounce absolute bottom-0 right-1/2 left-1/2  pb-12">
                    <Arrowdown />
                </div>
            </article>
        </section>
    )
}