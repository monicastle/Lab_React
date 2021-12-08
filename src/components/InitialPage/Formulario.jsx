import React, { useState } from "react";
import ReactDOM from "react-dom";
import Estilos from './Estilos.module.css';
import Tablero from './Tablero.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

function Formulario() {
    const [pantalla, setPantalla] = useState("normal");
    const [jugador, setJugador] = useState("");

    function iniciarJuego() {
        if (jugador === "") {
            alert("¡El campo nombre esta vacio!");
        } else {
            setPantalla("juego");
        }
    }

    function finalizarJuego() {
        setPantalla("normal");
        setJugador("");
    }


    if (pantalla === "juego") {
        return (
            <div>
                <h3 className={Estilos.title}>Puntaje de {jugador}: 0</h3>
                <Tablero />
                <button onClick={finalizarJuego} className={Estilos.botonOver}>GAME OVER</button>
            </div>
        );
    }

    return (
        <div>
            <div className={Estilos.space}>
                <h3 className={Estilos.title}>Ingrese su nombre:</h3>
                <input className={Estilos.textField} placeholder="Nombre Completo" type="text" value={jugador}
                    onChange={(e) => setJugador(e.target.value)} />
                <button className={Estilos.botonJugar} onClick={iniciarJuego}>START</button>
            </div>
            <div className={Estilos.tabla}>
                <h3 className={Estilos.title}>Tabla de puntuaciones:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Puntaje</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

ReactDOM.render(<Formulario />, document.querySelector("#root"));
export default Formulario;