import React from 'react';
import { esmeralda } from './subcomponents/esmerald.jsx';
import flores from "../data/data.json"
export function Cards () {
    return (
        <>
            {flores.map((flores) => (
                <div className='m-4 flex flex-col shadow-xl gap-4 shadow-black/20 rounded-2xl border-solid border-black/5 border'>
                    <picture className='flex items-center justify-center pt-8'>
                        <img src={ flores.img } alt={"son las flores de " + flores.img} className='bg-slate-500/20 h-60 rounded-2xl '/>
                    </picture>
                    <div className='flex justify-start text-pretty px-4 flex-col'>
                        <h2 className='text-3xl pb-3' >{ flores.title }</h2>
                        <p className='text-sm text-black/60 grow'>{ flores.descripcion }</p>
                    </div>
                    <div className='flex justify-end gap-4 text-white p-4'>
                        <p className='text-lg rounded-xl px-4 py-2 bg-green-500' >{ esmeralda }{ flores.precio }</p>
                        <a className='text-lg rounded-xl px-4 py-2 bg-blue-700/80' href="">Agregar al carrito</a>
                    </div>
                </div>
            ))}
        </>
    )
}