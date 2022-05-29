import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";
import backend from '../service/Backend.js';

export default function Sexo() {

    const [sexo, setSexo] = useState("Sin Calcular");
    const handleCalculate = (e) => {
        const estilo= document.sexoForm.aprendizaje.value;
        const promedio= document.sexoForm.promedio.value;
        const recinto= document.sexoForm.recinto.value;
          
        console.log(estilo +"  "+promedio+"  "+recinto);
          backend.getSexo({"data": ["n", recinto, promedio,"n", "n","n","n", "n", "n",estilo]
              }).then(response => {
                setSexo(response);
              console.log(response);
          })
  


    };
    const selectFiltro = ['DIVERGENTE', 'CONVERGENTE', 'ASIMILADOR', 'ACOMODADOR'];
    const selectFiltro1 = ['Turrialba', 'Paraiso'];
    return(
        <div className='body'>
        <h2 className='text-center'>Adivinar Sexo</h2>

        <div className='p-5'>
                <Form onSubmit={handleCalculate} name="sexoForm">
                    <div>
                        <span>Estilo de Aprendizaje: </span>
                        <select name="aprendizaje">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <span>Último promedio para matrícula: </span>
                    <CustomInput errorMsg="Inserte el promedio" type="number" min="0" className='mt-2' name='promedio' placeholder='Último promedio para matrícula'></CustomInput>
                    <div>
                        <span>Recinto: </span>
                        <select name="recinto">
                            {selectFiltro1.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular Sexo" type="submit" />
                    <div>
                        <span>Mi Sexo es: {sexo}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}

