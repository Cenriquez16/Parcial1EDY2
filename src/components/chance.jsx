import React, { useState } from "react";
import AgregarCampoButton from './AgregarCampoButton';
import Formulario from "./Formulario";
import { Tabla } from "./Tabla";

function Chance() {
  const [nombre, setNombre] = useState("");
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [numero3, setNumero3] = useState("");
  const [Total1, setTotal1] = useState("");
  const [Total2, setTotal2] = useState("");
  const [Total3, setTotal3] = useState("");
  const [contenedorChances, setContenedorChances] = useState([])
  const [contenedorTotal, setContenedorTotal] = useState([])

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleNumero1Change = (event) => {
    setNumero1(Number(event.target.value));
  };

  const handleNumero2Change = (event) => {
    setNumero2(Number(event.target.value));
  };
  const handleNumero3Change = (event) => {
    setNumero3(Number(event.target.value));
  };
  const handleTotal1Change = (event) => {
    setTotal1(Number(event.target.value));
  };
  const handleTotal2Change = (event) => {
    setTotal2(Number(event.target.value));
  };
  const handleTotal3Change = (event) => {
    setTotal3(Number(event.target.value));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const Total = [
      {'numero': numero1,},
      {'numero': numero2,},
      {'numero': numero3,},
    ]

    const MTotal = [
      {'Total': Total1,},
      {'Total': Total2,},
      {'Total': Total3,},
    ]
    setContenedorChances([...contenedorChances, ...Total])
    setContenedorTotal([...contenedorTotal, ...MTotal])
  };

  return (  
    <div>
    <form onSubmit={handleSubmit} >
    <h1>Bienvenido a la casa de apuestas Robocorp S.A.S</h1>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Chance 1:
        <input type="number" value={numero1} onChange={handleNumero1Change} />
        <input type="number" value={Total1} onChange={handleTotal1Change} />
      </label>
      <br />
      <label>
        Chance 2:
        <input type="number" value={numero2} onChange={handleNumero2Change} />
        <input type="number" value={Total2} onChange={handleTotal2Change} />
      </label>
      <br />
      <label>
        Chance 3:
        <input type="number" value={numero3} onChange={handleNumero3Change} />
        <input type="number" value={Total3} onChange={handleTotal3Change} />
      </label>
      <br />
      <button type="submit" >Jugar</button>
      <br />
    </form>
    <div>
      <Tabla chances={contenedorChances} contenedorTotal={contenedorTotal} />
      
    </div>
    </div>
  );
}


export default Chance;
