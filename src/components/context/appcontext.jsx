import { createContext, useState, useEffect } from "react";
import fetchData from "../data/data.js";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [flores, setFlores] = useState([]);

    useEffect(() => {
        cargarData();
    }, []);

    function cargarData() {
        fetchData()
            .then(r => {
                setFlores(r);
            })
            .catch(err => console.error(err));
    };

    function agregarAlCarrito(item) {
        setCarrito(prevCarrito => {
            const itemEnCarrito = prevCarrito.find(i => i.item === item);

            if (itemEnCarrito) {
                return prevCarrito.map(i =>
                    i.item === item ? { ...i, cantidad: i.cantidad + 1 } : i
                );
            } else {
                const productoAgregado = flores.find(el => el.item === item);
                if (productoAgregado && productoAgregado.title && productoAgregado.img) {
                    return [...prevCarrito, { ...productoAgregado, cantidad: 1 }];
                } else {
                    console.error("Producto inválido intentado agregar al carrito:", productoAgregado);
                    return prevCarrito;
                }
            }
        });
    }

    function incrementarCantidad(item) {
        setCarrito(prevCarrito =>
            prevCarrito.map(i =>
                i.item === item ? { ...i, cantidad: i.cantidad + 1 } : i
            )
        );
    }

    function decrementarCantidad(item) {
        setCarrito(prevCarrito =>
            prevCarrito.map(i =>
                i.item === item && i.cantidad > 1 ? { ...i, cantidad: i.cantidad - 1 } : i
            )
        );
    }

    function eliminarDelCarrito(item) {
        setCarrito(prevCarrito => prevCarrito.filter(i => i.item !== item));
    }

    return (
        <AppContext.Provider value={{ agregarAlCarrito, incrementarCantidad, eliminarDelCarrito, decrementarCantidad, cargarData, carrito, flores }}>
            {children}
        </AppContext.Provider>
    );
}
