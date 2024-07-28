const flores = [
    {
        title: "Diente de Leon",
        img: "/flowers/dientedeleon.webp",
        precio: 33,
        color: "amarillo",
        item: 0,
        descripcion: "Planta común y fácil de encontrar. Su color amarillo ilumina paisajes y es ideal para tinte y decoración. Esencial en cualquier inventario."
    },
    {
        title: "Amapola",
        img: "/flowers/amapola.webp",
        precio: 43,
        color: "rojo",
        item: 1,
        descripcion: "Una flor común y vistosa que se encuentra en varios biomas del juego. Su diseño es simple pero colorido, con pétalos rojos vibrantes y un tallo verde."
    },
    {
        title: "Orquídea azul",
        img: "/flowers/orquideaazul.webp",
        precio: 40,
        color: "azul",
        item: 2,
        descripcion: "Flor de color azul vibrante que se encuentra principalmente en los biomas de pantano. Con su color distintivo, aporta un toque de belleza y contraste a los paisajes del juego. Es una planta decorativa que también puede ser utilizada para crear tinte azul claro."
    },
    {
        title: "Allium",
        img: "/flowers/allium.webp",
        precio: 64,
        color: "violeta",
        item: 3,
        descripcion: "Flor de color púrpura que añade un toque de elegancia a los entornos del juego. Esta planta se encuentra en biomas de bosque florido y se destaca por su distintivo tono morado. Además de su valor decorativo, el Allium puede ser utilizado para crear tinte magenta."
    },
    {
        title: "Tulipán Rosa",
        img: "/flowers/tulipanrosa.webp",
        precio: 12,
        color: "rosa",
        item: 4,
        descripcion: "Flor delicada de color rosado que añade un toque suave y encantador a los paisajes del juego. Esta planta se encuentra en biomas de llanuras y bosques floridos. Además de su valor decorativo."
    },
    {
        title: "Tulipán Rojo",
        img: "/flowers/tulipanrojo.webp",
        precio: 12,
        color: "rojo",
        item: 5,
        descripcion: "Flor vibrante de color rojo que aporta un toque de intensidad y belleza a los paisajes del juego. Esta planta se encuentra en biomas de llanuras y bosques floridos. Además de su valor decorativo."
    },
    {
        title: "Tulipán Blanco",
        img: "/flowers/tulipanblanco.webp",
        precio: 12,
        color: "blanco",
        item: 6,
        descripcion: "Flor elegante de color blanco que añade un toque de pureza y serenidad a los paisajes del juego. Esta planta se encuentra en biomas de llanuras y bosques floridos. Además de su valor decorativo."
    },
    {
        title: "Tulipán Naranja",
        img: "/flowers/tulipannaranja.webp",
        precio: 12,
        color: "naranja",
        item: 7,
        descripcion: "Flor brillante de color naranja que aporta un toque de calidez y energía a los paisajes del juego. Esta planta se encuentra en biomas de llanuras y bosques floridos. Además de su valor decorativo."
    },
    {
        title: "Margarita",
        img: "/flowers/margarita.webp",
        precio: 23,
        color: "blanco",
        item: 8,
        descripcion: "Flor encantadora de color blanco y amarillo que ilumina los prados y biomas florales del juego. Esta planta se encuentra en biomas de llanuras y bosques, agregando un toque de frescura y simplicidad a su entorno."
    },
    {
        title: "Aciano",
        img: "/flowers/aciano.webp",
        precio: 53,
        color: "azul",
        item: 9,
        descripcion: "Flor de color azul claro que embellece los biomas de bosques y praderas del juego. Esta planta aporta un toque delicado y sereno a su entorno natural. Además de su valor decorativo."
    },
    {
        title: "Rosa del Wither",
        img: "/flowers/rosawither.webp",
        precio: 64,
        color: "negro",
        item: 10,
        descripcion: "Flor oscura y misteriosa que se encuentra únicamente al derrotar al Wither. Esta flor emite un brillo siniestro y esencialmente es una rareza dentro del juego, reflejando su conexión con el poderoso jefe del juego."
    },
    {
        title: "Girasol",
        img: "/flowers/girasol.webp",
        precio: 64,
        color: "amarillo",
        item: 11,
        descripcion: "Flor grande y brillante que sigue la dirección del sol en el juego. Esta planta se encuentra en biomas de girasoles y puede ser utilizada para obtener colorante amarillo."
    },
    {
        title: "Lila",
        img: "/flowers/lila.webp",
        precio: 64,
        color: "violeta",
        item: 12,
        descripcion: "Flor de color morado suave que adorna los biomas de bosque. Esta planta aporta un toque de tranquilidad y belleza natural a su entorno. Además de su función decorativa."
    },
    {
        title: "Rosal",
        img: "/flowers/rosal.webp",
        precio: 64,
        color: "rojo",
        item: 13,
        descripcion: "Flor de color morado suave que adorna los biomas de bosque. Esta planta aporta un toque de tranquilidad y belleza natural a su entorno. Además de su función decorativa."
    },
    {
        title: "Peonia",
        img: "/flowers/peonia.webp",
        precio: 64,
        color: "violeta",
        item: 14,
        descripcion: "Flor grande y exuberante de color rosa que se encuentra en biomas de taiga y bosque. Esta planta destaca por su belleza ornamental, añadiendo un toque distintivo a los paisajes del juego. Además de su valor estético."
    },
    {
        title: "Plantorcha",
        img: "/flowers/plantorcha.webp",
        precio: 64,
        color: "amarillo",
        item: 15,
        descripcion: "Flor luminosa y funcional que emite luz en su entorno. Esta planta única se puede encontrar en biomas de bosques oscuros y pantanos, proporcionando una fuente de luz natural y decorativa que puede ser útil para iluminar áreas sin necesidad de antorchas convencionales."
    },
    {
        title: "Azure Bluet",
        img: "/flowers/azurebluet.webp",
        precio: 40,
        color: "blanco",
        item: 16,
        descripcion: "Pequeña y encantadora flor de color azul claro con un centro amarillo. Esta planta es común en biomas de taiga y bosque, añadiendo un toque de color suave y natural a los paisajes del juego. Aunque principalmente decorativa."
    },
    {
        title: "Convalaria",
        img: "/flowers/convalaria.webp",
        precio: 33,
        color: "blanco",
        item: 17,
        descripcion: "Flor blanca y delicada que adorna los biomas de taiga y bosque. Esta planta, también conocida como lirio del valle, añade un toque de belleza y elegancia natural a los paisajes del juego."
    },
    {
        title: "Flor Cian",
        img: "/flowers/florcian.webp",
        precio: 53,
        color: "azul",
        item: 18,
        descripcion: "Flor Cian es una planta de color cian brillante y vibrante que añade un toque distintivo a los biomas donde se encuentra."
    }
];

export default function fetchData() {
    return new Promise(r => {
        setTimeout(() => {
            r(flores);
        }, 3000);
    });
};