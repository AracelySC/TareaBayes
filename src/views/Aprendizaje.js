import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";
import backend from '../service/Backend.js';

export default function Aprendizaje() {

    const [aprendizaje, setAprendizaje] = useState("Sin Calcular");

    const handleCalculate = (e) => {
        const recinto= document.aprendizajeForm.recinto.value;
        const promedio= document.aprendizajeForm.promedio.value;
        const sexo= document.aprendizajeForm.sexo.value;
        console.log(sexo +"  "+promedio+"  "+recinto);
        if(promedio<11){  
          backend.getAprendizaje2([sexo, promedio, recinto]
              ).then(response => {
                  setAprendizaje(response);
              console.log(response);
          })
        }else{ setAprendizaje("No se permite promedios mayores a 10" );}

    };
    const selectFiltro = ['F', 'M'];
    const selectFiltro1 = ['Turrialba', 'Paraiso'];
    return(
        <div className='body'>
        <h2 className='text-center'>Adivinar Tipo de Aprendizaje</h2>

        <div className='p-5'>
                <Form onSubmit={handleCalculate} name="aprendizajeForm">
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
                    <span>Último promedio para matrícula: </span>
                    <CustomInput errorMsg="Inserte el promedio"  type="number" min="1" max="10" step=".01" className='mt-2' name='promedio' placeholder='Último promedio para matrícula'></CustomInput>
                    <div>
                        <span>Recinto: </span>
                        <select name="sexo">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular tipo de aprensizaje" type="submit" />
                    <div>
                        <span>Mi tipo de aprendizaje es: {aprendizaje}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}

