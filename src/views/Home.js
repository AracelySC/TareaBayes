import '../style/Common.css'
import Form from '../components/Form'
import Button from '../components/Button';
import React, { useState } from "react";
import backend from '../service/Backend.js';

export default function Home() {
    const [aprendizaje, setAprendizaje] = useState("Sin Calcular");
    const handleCalculate = (e) => {

        const ec = parseInt(document.estilo.c5.value) + parseInt(document.estilo.c9.value) + parseInt(document.estilo.c13.value) + parseInt(document.estilo.c17.value) + parseInt(document.estilo.c25.value) + parseInt(document.estilo.c29.value);
        const or = parseInt(document.estilo.c2.value) + parseInt(document.estilo.c10.value) + parseInt(document.estilo.c22.value) + parseInt(document.estilo.c26.value) + parseInt(document.estilo.c30.value) + parseInt(document.estilo.c34.value);
        const ca = parseInt(document.estilo.c7.value) + parseInt(document.estilo.c11.value) + parseInt(document.estilo.c15.value) + parseInt(document.estilo.c19.value) + parseInt(document.estilo.c31.value) + parseInt(document.estilo.c35.value);
        const ea = parseInt(document.estilo.c4.value) + parseInt(document.estilo.c12.value) + parseInt(document.estilo.c24.value) + parseInt(document.estilo.c28.value) + parseInt(document.estilo.c32.value) + parseInt(document.estilo.c36.value);
     
        backend.getAprendizaje({"data": ["N/A", ca, ec, ea, or, "N/A", "N/A"]
            }).then(response => {
            setAprendizaje(response);
            console.log(response);
        })


    };
    const selectFiltro = ['1', '2', '3', '4'];
    return (

        <div className='body'>
            <h2 className='text-center'>Yo aprendo...</h2>
            <div className='p-5'>
                <Form onSubmit={handleCalculate} name="estilo">

                    <table className="table table-bordered">
                        <tbody className='table_'>
                            <tr>
                                <td>
                                    <select name="c1">
                                        {selectFiltro.map(value => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                    discerniendo
                                </td>
                                <td>
                                    <select name="c2">
                                        {selectFiltro.map(value => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                    ensayando</td>
                                <td>
                                    <select name="c3">
                                        {selectFiltro.map(value => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select> involucrándome</td>
                                <td>
                                    <select name="c4">
                                        {selectFiltro.map(value => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select> practicando</td>
                            </tr>
                            <tr>
                                <td><select name="c5">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select> receptivamente  </td>
                                <td><select name="c6">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select> relacionando </td>
                                <td><select name="c7">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select> analíticamente  </td>
                                <td><select name="c8">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select> imparcialmente </td>
                            </tr>

                            <tr>
                                <td><select name="c9">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>sintiendo </td>
                                <td><select name="c10">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>observando  </td>
                                <td><select name="c11">
                                    {selectFiltro.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>pensando  </td>
                                <td><select name="c12">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select>haciendo  </td>
                            </tr>

                            <tr>
                                <td><select name="c13">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> aceptando  </td>
                                <td><select name="c14">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select>  arriesgando  </td>
                                <td><select name="c15">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select>  evaluando </td>
                                <td><select name="c16">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select>  con cautela  </td>
                            </tr>

                            <tr>
                                <td><select name="c17">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> intuitivamente  </td>
                                <td><select name="c18">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> productivamente  </td>
                                <td><select name="c19">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> lógicamente  </td>
                                <td><select name="c20">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> cuestionando  </td>
                            </tr>

                            <tr>
                                <td><select name="c21">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> abstracto  </td>
                                <td><select name="c22">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> observando  </td>
                                <td><select name="c23">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> concreto  </td>
                                <td><select name="c24">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> activo  </td>
                            </tr>

                            <tr>
                                <td><select name="c25">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> orientado al presente </td>
                                <td><select name="c26">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> reflexivamente  </td>
                                <td><select name="c27">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> orientado hacia el futuro </td>
                                <td><select name="c28">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> pragmático  </td>
                            </tr>

                            <tr>
                                <td><select name="c29">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> aprendo más de la experiencia </td>
                                <td><select name="c30">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> aprendo más de la observación  </td>
                                <td><select name="c31">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> aprendo más de la conceptualización  </td>
                                <td><select name="c32">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> aprendo más de la experimentación </td>
                            </tr>
                            <tr>
                                <td><select name="c33">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> emotivo  </td>
                                <td><select name="c34">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> reservado </td>
                                <td><select name="c35">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> racional  </td>
                                <td><select name="c36">
                                    {selectFiltro.map(value => (<option key={value} value={value}> {value}</option>))}
                                </select> abierto </td>
                            </tr>
                        </tbody>
                    </table>

                    <Button text="Calcular Aprendizaje" type="submit" />
                    <div>
                        <span>Mi tipo de Aprendizaje es: {aprendizaje}</span>
                    </div>
                </Form>
            </div>
        </div>


    )
}