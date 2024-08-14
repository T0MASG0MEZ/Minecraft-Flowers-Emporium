import { useContext } from 'react';
import { AppContext } from './context/appcontext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function Buttonaddshop({ item }) {
    const { agregarAlCarrito, carrito } = useContext(AppContext);

    const isInCart = carrito.some((el) => el.item === item);
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                if (isInCart) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Producto ya agregado en carrito",
                        footer: '<a id="ver-carrito" style="cursor: pointer; color: #3085d6;">Ver carrito</a>',
                        didRender: () => {
                            document.getElementById("ver-carrito").addEventListener("click", () => {
                                navigate('/shop');
                                Swal.close();
                            });
                        },
                    });
                } else {
                    agregarAlCarrito(item);
                }
            }}
            className={`text-xl font-semibold text-white rounded-xl px-4 py-2 ${isInCart ? 'bg-red-600' : 'bg-green-600'}`}
        >
            {isInCart ? 'Producto en carrito' : 'Agregar al carrito'}
        </button>
    );
}
