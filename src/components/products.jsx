import { Truck } from "../assets/svg.jsx";
import { Cards } from "../components/cards.jsx";
import { flores as initialFlowers } from "../components/data/data.json"
import { useState } from "react";
import { useFilters } from "./hook/useFilters.jsx";
import { Filters } from "./filters.jsx";
import "./products.css"

export function Products() {
    const [flores] = useState(initialFlowers)
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(flores)
    return (
        <>
            <article className="bg-white">
                <div className="flex items-center justify-center gap-4 p-8">
                    <Truck />
                    <h2 className="text-4xl">Nuestra coleccion de flores!</h2>
                </div>
                <div>
                    <Filters />
                </div>
                <div className="grilla">
                    <Cards flores={filteredProducts} />
                </div>
            </article>
        </>
    )
}