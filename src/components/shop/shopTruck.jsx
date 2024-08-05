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
            <section className="pt-20 flex justify-center">
                <article className="flex items-center justify-center flex-col gap-6">
                    {carrito.map(flor => (
                        <div className="max-w-[600px] border-t-[1px] border-b-[1px] border-black/20 mx-4 hover:scale-105 transition-transform flex relative items-center justify-around w-full" key={flor.item}>
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
                    <div className="border-t-[1px] border-black/20 max-w-[600px] w-full border-b-[1px] m-4">
                        {carrito.length === 0 ? (
                            <div className="p-4 text-xl">No hay ningun producto cargado</div>
                        ) : (
                            <div className="p-4 flex items-center justify-around flex-wrap">
                                <div>
                                    <h2 className="text-xl">Resumen de compra</h2>
                                    <p>Total de items: {carrito.reduce((total, flor) => total + flor.cantidad, 0)}</p>
                                    <div className="flex items-center">
                                        <p>Precio total:</p>
                                        <Esmeralda />
                                        <p>{totalEsmeraldas}</p>
                                    </div>
                                </div>
                                <button className="px-7 py-3 bg-blue-400/70 rounded-3xl">Comprar</button>
                            </div>
                        )}
                    </div>
                </article>
                <picture>
                    {
                        carrito.length === 0 ? (
                            <></>
                        )
                        : (
                            <div className="hidden md:block max-w-[300px]">
                                <img src="/aldeano.png" alt="Aldeano Minecraft" />
                            </div>
                        )
                    }
                </picture>
            </section>
        </>
    );
}
