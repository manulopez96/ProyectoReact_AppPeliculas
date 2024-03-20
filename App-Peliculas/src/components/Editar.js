import React from "react";

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
    const tituloComponente = "Editar pelicula";
    const guardarEdicion = (e, id) => {
        e.preventDefault();
        // conseguir el formulario con el target
        let datos = e.target;

        // buscar el indice en el localstorage
        const pelisAlmacenadas = conseguirPeliculas();
        const indice = pelisAlmacenadas.findIndex((peli) => peli.id === id);

        // crear objeto con ese indice
        let peliActualizada = {
            id,
            titulo: datos.titulo.value,
            descripcion: datos.descripcion.value,
        };

        // Actualizar el elemento con el indice
        pelisAlmacenadas[indice] = peliActualizada;
        console.log(indice, pelisAlmacenadas);

        //Guardar en el localStorage
        localStorage.setItem("pelis", JSON.stringify(peliActualizada));

        // actualizar estados
        setListadoState(pelisAlmacenadas);
        setEditar(0);
        
    };

    return (
        <div className="edit-form">
            <h3 className="titulo">{tituloComponente}</h3>
            <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
                <input
                    type="text"
                    name="titulo"
                    className="titulo-editado"
                    defaultValue={peli.titulo}
                ></input>
                <textarea
                    name="descripcion"
                    defaultValue={peli.descripcion}
                    className="descripcion-editada"
                ></textarea>
                <input
                    type="submit"
                    className="editar"
                    value="actualizar"
                ></input>
            </form>
        </div>
    );
};
