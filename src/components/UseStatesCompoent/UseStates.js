import React, { useState, useEffect } from 'react'
import { UseEffectComponent } from '../UseEffect/UseEffectComponent';
import './UseStates.css';

export const UseStates = () => {
    const [nombre, setNombre] = useState("Este texto cambiará");
    const [contador, setContador] = useState(0);

    const cambiarEstadoNombreInput = (e) => {
        let valor = e.target.value;
        valor === "" ? setNombre("Sin valor asignado") : setNombre(e.target.value);
        setContador((contador + 1));
    }
    useEffect(e => {
        console.log("Componenete cargado")
    }, []);

    useEffect(e => {
        console.log("Se ha cambiado el nombre");        
    }, [nombre]);

    useEffect(e => {
        console.log("Contador aumentando", contador)
    }, [contador]);

    return (
        <div className='Use-states'>
            <h6>Cambiando es estado de la variable con <strong className='h3-variable'> UseStates </strong></h6>
            <div>
                <input type="text" onKeyUp={e => cambiarEstadoNombreInput(e)} placeholder="Estado nuevo" />
            </div>
            <h3 className='h3-variable'> {nombre} </h3>

            <div className='Use-effect-test'>
                <h6> Validando algunos casos en estados con UseStates </h6>
                <p>Cantidad de veces que ha cambiado el valor del intput: {contador}</p>
                <div>
                    {nombre === "René" && <UseEffectComponent/>}
                </div>
            </div>
        </div>
    )
}
