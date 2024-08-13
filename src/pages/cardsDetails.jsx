import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../components/context/appcontext";
import { Buttonaddshop } from "../components/buttonaddshop";
import { Back, Esmeralda } from "../assets/svg";
import "./cardsDetails.css"

export function CardsDetails() {
    const { item } = useParams();
    const { flores } = useContext(AppContext);

    const [florSeleccionada, setFlorSeleccionada] = useState(null);

    useEffect(() => {
        const findFlor = flores.find(el => el.item === parseInt(item));
        setFlorSeleccionada(findFlor || null);
    }, [item, flores]);

    if (!florSeleccionada) {
        return <p>No se encontró la flor.</p>;
    }

    return (
        <>
            <section className="h-screen w-screen bg-image fixed">
                <div className="h-screen w-screen bg-black/50 flex items-center justify-center">
                    <article className="bg-white/95 p-8 flex md:block  flex-wrap rounded-3xl">
                        <picture className="flex items-center justify-center bg-slate-400/50 max-w-[100px] md:max-w-[300px] float-left rounded-3xl">
                            <img src={florSeleccionada.img} alt={florSeleccionada.title} className="max-h-[350px]" />
                        </picture>
                            <div className="max-w-[700px] md:text-2xl text-pretty py-4 pl-4 flex flex-col gap-4">
                                <h2 className="font-bold">{florSeleccionada.title}</h2>
                                <p>{florSeleccionada.descripcion}</p>
                            </div>
                            <div className="flex flex-row-reverse items-center justify-center gap-4 p-4">
                                <Buttonaddshop item={florSeleccionada.item} />
                                <div className='flex gap-3 border-2 border-green-400 text-xl px-3 items-center py-1 rounded-3xl'>
                                    < Esmeralda />
                                    {florSeleccionada.precio}
                                </div>
                                <Link to={"/"}>
                                    <button className="bg-slate-400/50 px-4 py-2 rounded-3xl">
                                        <Back />
                                    </button>
                                </Link>
                            </div>
                    </article>
                </div>
            </section>
        </>
    );
}
