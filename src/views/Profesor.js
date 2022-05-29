import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";
import backend from '../service/Backend.js';
export default function Profesor() {

    const [profesor, setProfesor] = useState("Sin Calcular");

    const handleCalculate = (e) => {
        const edad = document.profesor.edad.value;
        const sexo = document.profesor.sexo.value;
        const experiencia = document.profesor.experiencia.value;
        const impartido = document.profesor.impartido.value;
        const antecedentes = document.profesor.antecedentes.value;
        const habilidad = document.profesor.habilidad.value;
        const experiencia_t = document.profesor.experiencia_t.value;
        const experiencia_sito = document.profesor.experiencia_sito.value;


        backend.getProfesor({
            "data": [edad, sexo, experiencia, impartido, antecedentes, habilidad, experiencia_t, experiencia_sito, "N"]
        }).then(response => {
            setProfesor(response);
            console.log(response);
        })
    };
    const selectFiltro = ['F', 'M', 'NA'];
    const selectFiltro1 = ['Turrialba', 'Paraiso'];
    const selectFiltro2 = ['B', 'I', 'A'];
    const selectFiltro3 = [1, 2, 3];
    const selectFiltro4 = ['DM', 'ND', 'O'];
    const selectFiltro5 = ['L', 'A', 'H'];
    const selectFiltro6 = ['N', 'S', 'O'];


    return (
        <div className='body'>
            <h2 className='text-center'>Adivinar Tipo de Profesor</h2>

            <div className='p-5'>
                <Form onSubmit={handleCalculate} name="profesor">
                    <span>Edad: </span>
                    <CustomInput type="number" min="1" max="3" errorMsg="Inserte el edad" className='mt-2' name='edad'  placeholder='Edad'></CustomInput>

                    <div className="mt-2">
                        <span>Sexo: </span>
                        <select name="sexo">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-2">
                        <span>Autoevaluación del maestro de su habilidad o experiencia enseñando: </span>
                        <select name="experiencia">
                            {selectFiltro2.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-2">
                        <span>Número de veces que el profesor ha impartido este tipo de curso : </span>
                        <select name="impartido">
                            {selectFiltro3.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <span>Antecedentes de la disciplina del maestro o área de especialización : </span>
                        <select name="antecedentes">
                            {selectFiltro4.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <span>Habilidades del maestro en el uso de computadoras: </span>
                        <select name="habilidad">
                            {selectFiltro5.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <span>La experiencia del docente utilizando la tecnología basada en la Web para la enseñanza: </span>
                        <select name="experiencia_t">
                            {selectFiltro6.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <span>La experiencia del docente en el uso de un sitio Web: </span>
                        <select name="experiencia_sito">
                            {selectFiltro6.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular tipo de profesor" type="submit" />
                    <div>
                        <span>Mi tipo de profesor es: {profesor}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}
