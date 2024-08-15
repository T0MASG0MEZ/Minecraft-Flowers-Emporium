import React, { useContext, useState } from 'react'
import { AppContext } from '../context/appcontext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import "./Checkout.css"
import { Back, Esmeralda } from '../../assets/svg';
import { Link } from 'react-router-dom';
export function Checkout() {

    const { carrito, totalEsmeraldas, vaciarCarrito } = useContext(AppContext);
    const [pedidoId, setPedidoId] = useState("");
    const { register, handleSubmit } = useForm();

    const db = getFirestore();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalEsmeraldas
        }

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
            })
            .catch((error) => {
                console.log(error);
            });
        vaciarCarrito();
    }

    if (pedidoId) {
        return (
            <>
                <section className='bg-image-checkout'>
                    <article className='w-screen h-screen bg-black/50 flex items-center justify-center'>
                        <div className='bg-white p-6  flex flex-col items-center rounded-2xl'>
                            <div className='flex p-6 flex-col items-center text-pretty text-3xl max-w-[350px] text-center gap-4'>
                                <h2>Gracias por tu compra!</h2>
                                <p>Tu codigo de pedido es: <strong>{pedidoId}</strong></p>
                            </div>
                            <Link to="/">
                                <Back />
                            </Link>
                        </div>
                    </article>
                </section >
            </>
        )
    }

    return (
        <section className='bg-image-checkout'>
            <article className='w-screen h-screen bg-black/50 flex items-center justify-center'>
                <div className='bg-white p-6  flex flex-col items-center rounded-2xl'>
                    <h1 className='text-3xl font-bold'>Finalizar Compra</h1>
                    <form onSubmit={handleSubmit(comprar)} className='flex flex-col pt-4 gap-4'>

                        <input className='text-xl border-[1px] p-4 rounded-xl outline-none focus:rounded-3xl transition-all duration-500' {...register("nombre")} placeholder='Ingrese tu Nombre' type="text" />
                        <input className='text-xl border-[1px] p-4 rounded-xl outline-none focus:rounded-3xl transition-all duration-500' {...register("email")} placeholder='Ingrese tu Email' type="email" />
                        <input className='text-xl border-[1px] p-4 rounded-xl outline-none focus:rounded-3xl transition-all duration-500' {...register("telefono")} placeholder='Ingrese tu Telefono' type="phone" />
                        <div>
                            <p className='text-xl flex items-center gap-1'>Total a pagar:
                                <Esmeralda />{totalEsmeraldas}</p>
                        </div>
                        <button className='w-full bg-green-600/70 rounded-xl text-white text-2xl py-2 flex items-center justify-center' type='submit'>Comprar</button>
                        <div className='flex items-center justify-center'>
                            <Link to="/shop">
                                <Back />
                            </Link>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    )
}