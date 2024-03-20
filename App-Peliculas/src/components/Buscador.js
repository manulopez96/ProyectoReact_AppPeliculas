import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
    const [busqueda, setBusquedaState] = useState("");
    const [noEncontrado, setnoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        // e.preventDefault();
        //crear estado
        setBusquedaState(e.target.value);
        console.log(busqueda);

        // listado completo de peliculas, en la props

        // filtrar para buscar
        let pelisEncontradas = listadoState.filter((peli) => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });

        if (busqueda.length <= 1 || pelisEncontradas.length <= 0) {
            pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
            setnoEncontrado(true);
        } else {
            setnoEncontrado(false);
        }
        // Dar valor al localStorage
        setListadoState(pelisEncontradas);

        // actualizar el estado del listado con lo filtrado
    };
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {noEncontrado == true && busqueda.length > 1 && (
                <span className="no-encontrado">{"No hay resultados"}</span>
            )}
            <form action="">
                <input
                    type="text"
                    id="search-field"
                    name="busqueda"
                    autoComplete="off"
                    onChange={buscarPeli}
                />
                <button>Buscar</button>
            </form>
        </div>
    );
};
