import React, { useState } from 'react';
import Tab from './Tablero.module.css';

const tam = 10;

const Tablero = () => {
    const [tablero, setTablero] = useState(crearTablero(tam));
    //const [snakeCells, setSnakeCells] = useState(new Set([44]))

    /*const [tablero, setTablero] = useState(
        new Array(tam).fill(0).map(row => new Array(tam).fill(0)),
    );*/

    return (
        <div className={Tab.tablero}>
            {tablero.map((row, rowIdx) => (
                <div key={rowIdx} className={Tab.row}>{
                    row.map((cell, cellIdx) => (
                        <div key={cellIdx} className={Tab.cell}></div>
                    ))
                }</div>
            ))}
        </div>
    );
};

const crearTablero = tam => {
    let cont = 1;
    const tablero = [];
    for (let i = 0; i < tam; i++) {
        const rowActual = [];
        for (let j = 0; j < tam; j++) {
            rowActual.push(cont++);
        }
        tablero.push(rowActual);
    }
    return tablero;
};


export default Tablero;