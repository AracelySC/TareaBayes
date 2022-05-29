import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";
import backend from '../service/Backend.js';
export default function Redes() {

    const [red, setRed] = useState("Sin Calcular");
    const handleCalculate = (e) => {
        const confiabilidad = document.redes.confiabilidad.value;
        const enlaces = document.redes.enlaces.value;
        const capacidad = document.redes.capacidad.value;
        const costo = document.redes.costo.value;


        backend.getRedes({
            "data": ["N", confiabilidad, enlaces, capacidad, costo, "N"]
        }).then(response => {
            setRed(response);
            console.log(response);
        })



    };
    const selectFiltro = ['Low', 'Medium', 'High'];
    return (
        <div className='body'>
            <h2 className='text-center'>Adivinar Clasificación de Redes</h2>

            <div className='p-5'>
                <Form onSubmit={handleCalculate} name="redes">
                    <span>Confiabilidad: </span>
                    <CustomInput errorMsg="Inserte el promedio" type='number' className='mt-2' min='2' max='5' name='confiabilidad' placeholder='Enlaces'></CustomInput>
                    <div className="mt-2">   </div>
                    <span>Enlaces: </span>
                    <CustomInput errorMsg="Inserte el promedio" type='number' className='mt-2' min='7' max='20' name='enlaces' placeholder='Enlaces'></CustomInput>

                    <div className="mt-2">
                        <span>Capacidad: </span>
                        <select name="capacidad">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <span>Costo: </span>
                        <select name="costo">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular clasificación de red" type="submit" />
                    <div>
                        <span>La clasificación de la red es: {red}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}
