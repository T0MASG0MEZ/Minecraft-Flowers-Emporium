import { Link } from 'react-router-dom';
import { Buttonaddshop } from './buttonaddshop';
import { Esmeralda, Plus } from '../assets/svg';

export function Cards({ flores }) {

    return (
        <>
            {flores.map(flor => (
                
                    <div key={flor.item} className='md:m-4 hover:scale-105 transition-transform flex flex-col shadow-xl gap-4 shadow-black/10 max-w-[320px] mx-auto rounded-2xl border-solid border-black/15 border'>
                        <picture className='flex items-center justify-center p-4'>
                            <img src={flor.img} alt={"son las flores de " + flor.img} className='bg-slate-500/20 h-60 rounded-2xl w-60' />
                        </picture>
                        <div className='flex justify-center items-center text-pretty gap-4 pb-4 flex-col'>
                            <h2 className='text-3xl pb-3' >{flor.title}</h2>
                            <Buttonaddshop item={flor.item} />
                            <div className='flex items-center justify-center gap-2'>
                                <div className='flex gap-3 border-2 border-green-400 text-lg px-3 items-center py-1 rounded-3xl'>
                                    < Esmeralda />
                                    {flor.precio}
                                </div>
                                <Link to={`/shop/${flor.item}`}>
                                    <Plus />
                                </Link> 
                            </div>
                        </div>
                    </div>
            ))}
        </>
    )
}