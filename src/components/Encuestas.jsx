import React from 'react';

function Encuestas({encuestas}) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <li id={encuesta.id}>{encuesta.pregunta} {mostrar(encuesta.opciones)} </li>
                ))}
                
            </ul>
        </div>
    );
}

function mostrar(opciones) {
    return (
        <ul>
            {opciones.map((opcion, index) => (
                <li key={index} onClick={() => handleClick(opcion)}>
                    {opcion}
                </li>
            ))}
        </ul>
    );
}

function handleClick(opcion) {
    alert(`Haz hecho clic en la opción: ${opcion}`);
}

export default Encuestas;