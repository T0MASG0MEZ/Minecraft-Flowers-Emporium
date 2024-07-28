import { useContext } from 'react';
import { AppContext } from './context/appcontext';
import { Esmeralda } from '../assets/svg';

export function Cards({ flores }) {

    const { agregarAlCarrito } = useContext(AppContext)

    return (
        <>
            {flores.map(flor => (
                <div key={flor.item} className='md:m-4 flex flex-col shadow-xl gap-4 shadow-black/30 max-w-[320px] mx-auto rounded-2xl border-solid border-black/15 border'>
                    <picture className='flex items-center justify-center pt-8'>
                        <img src={flor.img} alt={"son las flores de " + flor.img} className='bg-slate-500/20 h-60 rounded-2xl w-60' />
                    </picture>
                    <div className='flex justify-start text-pretty px-4 flex-col'>
                        <h2 className='text-3xl pb-3' >{flor.title}</h2>
                        <p className='text-sm text-black/60 grow h-32'>{flor.descripcion}</p>
                    </div>
                    <div className='flex justify-end gap-4 text-white p-4'>
                        <p className='text-lg rounded-xl bg-green-500/90 flex items-center gap-1 px-3' >
                            < Esmeralda />
                            <strong>
                                {flor.precio}
                            </strong>
                        </p>
                        <button onClick={() => agregarAlCarrito(flor.item)} className='text-base font-semibold rounded-xl px-4 py-2 bg-green-600'>Agregar al carrito</button>
                    </div>
                </div>
            ))}
        </>
    )
}