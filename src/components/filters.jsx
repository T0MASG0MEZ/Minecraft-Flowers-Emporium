import { useId } from "react"
import { Esmeralda } from "../assets/svg"
import { useFilters } from "./hook/useFilters"

export function Filters() {

    const { filters, setFilters } = useFilters()
    const { minPrice, color } = filters

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            color: event.target.value
        }))
    }

    return (
        <>
            <section className="flex max-w-[1000px] p-4 mx-auto">
                <article className="flex justify-around items-center gap-4 flex-wrap flex-grow">
                    <div className="flex items-center gap-3">
                        <label htmlFor={minPriceFilterId}>Precio:</label>
                        <input
                            type="range"
                            id={minPriceFilterId}
                            min='0'
                            max='64'
                            value={minPrice}
                            onChange={handleChangeMinPrice}
                        />
                        <div className="flex items-center gap-2 w-4">
                            <span><Esmeralda /></span>
                            <span>{minPrice}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <label htmlFor={categoryFilterId}>Color:</label>
                        <select className="bg-gray-500/35 px-4 py-2 rounded-xl" id={categoryFilterId} onChange={handleChangeCategory}>
                            <option value="all">Todos</option>
                            <option value="rojo">Rojo</option>
                            <option value="amarillo">Amarillo</option>
                            <option value="azul">Azul</option>
                            <option value="violeta">Violeta</option>
                            <option value="rosa">Rosa</option>
                            <option value="blanco">Blanco</option>
                            <option value="negro">Negro</option>
                            <option value="naranja">Naranja</option>
                        </select>
                    </div>
                </article>
            </section>
        </>
    )
}