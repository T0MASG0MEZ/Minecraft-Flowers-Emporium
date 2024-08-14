import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const AppContext = createContext();
const firebaseConfig = {
    apiKey: "AIzaSyCHZEtpyX5p9pq60q6Y_h9QwBUtkMvzlR4",
    authDomain: "minecraft-flowers-empori-8b92c.firebaseapp.com",
    projectId: "minecraft-flowers-empori-8b92c",
    storageBucket: "minecraft-flowers-empori-8b92c.appspot.com",
    messagingSenderId: "759185072250",
    appId: "1:759185072250:web:8ca16ad4c3726b493e9bc3",
    measurementId: "G-VZMMJDQ7SC"
};
const collectionName = 'Flores';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export function AppProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [flores, setFlores] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, collectionName);
        getDocs(collectionRef).then((snapshot) => {
            if (snapshot.size > 0) {
                const { docs } = snapshot;
                const data = docs.map((doc) => doc.data());
                setFlores(data);
            } else {
                alert('No hay items en tu colección');
            }
        });
    }, []);
    
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

    const totalEsmeraldas = carrito.reduce((total, flor) => total + (flor.precio * flor.cantidad), 0);

    return (
        <AppContext.Provider value={{ agregarAlCarrito, incrementarCantidad, eliminarDelCarrito, decrementarCantidad, totalEsmeraldas, carrito, flores }}>
            {children}
        </AppContext.Provider>
    );
}
