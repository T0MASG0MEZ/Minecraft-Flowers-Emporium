import { useContext } from "react";
import { Navbar } from "../Navbar";
import { AppContext } from "../context/appcontext";
import "./shopTruck.css";
import { Esmeralda } from "../../assets/svg";
import { Close } from "../../assets/svg";

export function ShopTruck() {
    const { carrito, incrementarCantidad, decrementarCantidad, eliminarDelCarrito } = useContext(AppContext);

    const totalEsmeraldas = carrito.reduce((total, flor) => total + (flor.precio * flor.cantidad), 0);

    return (
        <>
            <Navbar />
            <section className="pt-20">
                <article className="carrito-grilla">
                    {carrito.map(flor => (
                        <div className="bg-gray-400/60 max-w-[600px] mx-4 hover:scale-105 transition-transform rounded-3xl flex relative items-center justify-around w-full shadow-xl shadow-black/15" key={flor.item}>
                            <div className="flex flex-col items-center p-4">
                                <h2 className="font-bold text-xl">{flor.title}</h2>
                                <img src={flor.img} alt={flor.img} className="size-40" />
                            </div>
                            <div className="flex flex-col items-center gap-4 text-white">
                                <div className="flex gap-3 py-2 items-center bg-gray-600/70 rounded-3xl text-xl px-3">
                                    <p className="">Cantidad:</p>
                                    <button onClick={() => decrementarCantidad(flor.item)}>-</button>
                                    <p>{flor.cantidad}</p>
                                    <button onClick={() => incrementarCantidad(flor.item)}>+</button>
                                </div>
                                <strong className="text-xl py-2 flex items-center w-full justify-around bg-green-500/90 rounded-3xl px-3">
                                    Precio:
                                    <span><Esmeralda /></span>
                                    {flor.precio * flor.cantidad}
                                </strong>
                                <div className="absolute top-2 right-2 cursor-pointer" onClick={() => eliminarDelCarrito(flor.item)}>
                                    <Close />
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
            <aside className="bg-gray-400 rounded-3xl fixed right-0 bottom-0 m-4">
                {carrito.length === 0 ? (
                    <div className="p-4 text-xl">No hay ningun producto cargado</div>
                ) : (
                    <div className="p-4 flex flex-col gap-3">
                        <div>
                            <h2 className="text-xl">Resumen de compra</h2>
                        </div>
                        <div>
                            <p>Total de items: {carrito.reduce((total, flor) => total + flor.cantidad, 0)}</p>
                            <div className="flex items-center gap-1">
                                <p>Precio total:</p>
                                <Esmeralda />
                                <p>{totalEsmeraldas}</p>
                            </div>
                        </div>
                        <button className="p-4 bg-blue-400/70 rounded-3xl w-full">Comprar</button>
                    </div>
                )}
            </aside>
        </>
    );
}
