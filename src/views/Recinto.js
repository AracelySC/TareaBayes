import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState, useEffect} from "react";
import CustomInput from "../components/Input";
import backend from '../service/Backend.js';

export default function Recinto() {
    const [recinto, setRecinto] = useState("Sin Calcular");
   
    const handleCalculate = (e) => {
      const estilo= document.recinto.aprendizaje.value;
      const promedio= document.recinto.promedio.value;
      const sexo= document.recinto.sexo.value;

      if(promedio<11){
      console.log(estilo+" "+promedio+" "+sexo +"  ");
      backend.getRecinto( [sexo,promedio,estilo]
            ).then(response => {
                setRecinto(response);
            console.log(response);
        })
    }else{ setRecinto("No se permite promedios mayores a 10" );}
    };
    const selectFiltro = ['DIVERGENTE', 'CONVERGENTE', 'ASIMILADOR', 'ACOMODADOR'];
    const selectFiltro1 = ['F', 'M'];

    return (
        <div className='body'>
            <h2 className='text-center'>Adivinar Recinto</h2>
            <div className='p-5'>
                <Form onSubmit={handleCalculate} name="recinto">
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
                    <CustomInput errorMsg="Inserte el promedio" type="number" min="1" max="10" step=".01" className='mt-2' name='promedio' placeholder='Último promedio para matrícula' required>
                   
                    </CustomInput>
                    <div>
                        <span>Sexo: </span>
                        <select name="sexo">
                            {selectFiltro1.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular Recinto" type="submit" />
                    <div>
                        <span>Mi Recinto es: {recinto}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}

