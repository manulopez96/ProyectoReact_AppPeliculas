import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
    const [listadoState, setListadoState] = useState([]);
    return (
        <div className="layout">
            {/* <!-- Cabecera --> */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>

                <h1>Mis Pelis</h1>
            </header>

            {/* <!-- barra de navegacion --> */}
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/#">Inicio</a>
                    </li>
                    <li>
                        <a href="/#">peliculas</a>
                    </li>
                    <li>
                        <a href="/#">Blog</a>
                    </li>
                    <li>
                        <a href="/#">Contacto</a>
                    </li>
                </ul>
            </nav>

            <section className="content">
                {/* <!-- aqui van las peliculas --> */}
                <Listado
                    listadoState={listadoState}
                    setListadoState={setListadoState}
                ></Listado>
            </section>

            <div className="lateral">
                <Buscador
                    listadoState={listadoState}
                    setListadoState={setListadoState}
                ></Buscador>
                <Crear setListadoState={setListadoState}></Crear>
            </div>

            <footer className="footer">
                &copy; Master en React -{" "}
                <a href="https://lpz-emanuel.web.app/">Emanuel Lopez</a>
            </footer>
        </div>
    );
}

export default App;
