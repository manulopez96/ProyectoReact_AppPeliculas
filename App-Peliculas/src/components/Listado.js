import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
    // const [listadoState, setListadoState] = useState([]);
    const [editar, setEditar] = useState(0);

    const ConseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);
        return peliculas;
    };

    const borrarPeli = (id) => {
        //Conseguir pelicular
        let pelisAlmacenadas = ConseguirPeliculas();

        //filtrar esas peliculas para que se elimine del array
        let nuevoArrayPeliculas = pelisAlmacenadas.filter(
            (peli) => peli.id !== parseInt(id)
        );

        //actualizar estado del listado
        setListadoState(nuevoArrayPeliculas);

        //Actualizae los datos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(nuevoArrayPeliculas));
    };

    useEffect(() => {
        ConseguirPeliculas();
    }, []);

    return (
        <>
            {Array.isArray(listadoState) ? (
                listadoState.map((peli) => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
                            <button
                                className="edit"
                                onClick={() => {
                                    setEditar(peli.id);
                                }}
                            >
                                Editar
                            </button>
                            <button
                                className="delete"
                                onClick={() => {
                                    borrarPeli(peli.id);
                                }}
                            >
                                Eliminar
                            </button>
                            {/*Formulario de editar*/}
                            {editar === peli.id && (
                                <Editar
                                    peli={peli}
                                    conseguirPeliculas={ConseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                ></Editar>
                            )}
                        </article>
                    );
                })
            ) : (
                <h2>No hay peliculas todavia</h2>
            )}
        </>
    );
};
