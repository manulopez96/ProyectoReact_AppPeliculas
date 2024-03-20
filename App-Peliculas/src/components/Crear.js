import React, { useState } from "react";
import { guardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {

    const [peliState, setPeliState] = useState({});
    const conseguirDatosForm = (e) => {
        e.preventDefault();

        //conseguir datos del formulario
        let datos = e.target;
        let titulo = datos.titulo.value;
        let descripcion = datos.descripcion.value;

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // guardar estado
        setPeliState(peli);

        // actualizar el estado del listado principal
        setListadoState((elementos) => {
            return [...elementos, peli]
        });
        
        //guardar en el almacenamiento local
        guardarEnStorage("pelis", peli);
    }
    
    
    const tituloComponente = "Añadir pelicula";
    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
            {(peliState.titulo && peliState) && "has creado la pelicula: " + peliState.titulo}
            </strong>
            <form action="" onSubmit={conseguirDatosForm}>
                <input  type="text" 
                        id="titulo"
                        name="titulo"
                        placeholder="Titulo" />
                <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="30"
                    rows="10"
                    placeholder="Descripcion"
                ></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    );
};
