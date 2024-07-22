import { useContext } from "react";
import { FiltersContext } from "../context/filterscontext"

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (flores) => {
        return flores.filter(flor => {
            return (
                flor.precio >= filters.minPrice &&
                (
                    filters.color === "all" ||
                    flor.color === filters.color
                )
            )
        })
    }
    return { filterProducts, filters, setFilters }
}