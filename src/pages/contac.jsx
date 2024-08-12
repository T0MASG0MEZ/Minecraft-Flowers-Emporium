import './contact.css'
export function Contact() {
    return (
        <>
            <section className='h-screen w-screen background-image-2'>
                <article className='h-screen bg-black/40 flex items-center justify-center'>
                    <div className='z-50 bg-white flex items-center justify-center'>
                        <picture className='w-1/2 md:block hidden relative'>
                            <img className='h-full' src="/minecraftfiestas.webp" alt="" />
                            <div className='absolute bottom-0 h-36 text-white bg-gradient-to-t from-black/70 from-60% to-black/5 flex items-start justify-end flex-col w-full'>
                                <div className='flex items-center flex-row-reverse'>
                                    <h2 className='font-black'>Minecraf Flowers Emporium</h2>
                                    <img className='w-[60px]' src="/public/flowers/plantorcha.webp" alt="Minecraft Fiestas!" />
                                </div>
                                <ul className='flex gap-4 pb-4 px-4'>
                                    <li>
                                        <img className='w-[40px]' src="/public/panal.webp" alt="" />
                                    </li>
                                    <li>
                                        <img className='w-[40px]' src="/public/obsidiana.webp" alt="" />
                                    </li>
                                    <li>
                                        <img className='w-[40px]' src="/public/diamante.webp" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </picture>
                        <div className='flex md:w-1/2 items-center justify-center flex-col gap-4 py-2 px-8'>
                            <h2 className='text-2xl'>Contactanos!</h2>
                            <form action="#" method='post' className='flex flex-col gap-3'>
                                <div className='flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-center'>
                                    <label htmlFor="nombre"></label>
                                    <input className='border-solid ease-in-out duration-300 shadow-lg shadow-black/5 focus:rounded-sm outline-transparent  focus:outline-blue-700 border-2 border-black/10 p-2 w-full md:mr-4' type="text" placeholder='Nombre:' id='nombre' name='nombre' />

                                    <label htmlFor="apellido"></label>
                                    <input className='border-solid ease-in-out duration-300 shadow-lg shadow-black/5 focus:rounded-sm outline-transparent focus:outline-blue-700 border-2 border-black/10 w-full p-2' type="text" placeholder='Apellido:' id='apellido' name='apellido' />
                                </div>
                                <label htmlFor="email"></label>
                                <input className='border-solid ease-in-out duration-300 shadow-lg shadow-black/5 focus:rounded-sm outline-transparent focus:outline-blue-700 border-2 border-black/10 p-2' type="email" placeholder='Correo:' id='email' name='email' />

                                <label htmlFor="celular"></label>
                                <input className='border-solid ease-in-out duration-300 shadow-lg shadow-black/5 focus:rounded-sm outline-transparent focus:outline-blue-700 border-2 border-black/10 p-2' type="tel" placeholder='Celular:' id='celular' name='celular' />

                                <label htmlFor="textarea"></label>
                                <textarea className='border-solid ease-in-out duration-300 shadow-lg shadow-black/5 focus:rounded-sm outline-transparent border-2  focus:outline-blue-700 border-black/10 p-2' placeholder='Describe tu inquietud...' id="mensaje" name="mensaje"/>

                                <button className='bg-blue-700/80 py-2 text-white'>Enviar</button>
                            </form>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}