import React, { useState } from 'react'
import Card from './Card'
import './index.css'

function App() {

  const [kindPet, setKindPet] = useState("");
  const [namePet, setNamePet] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeKindPet = (event) => {
    setKindPet(event.target.value)
  }

  const onChangeNamePet = (event) => {
    setNamePet(event.target.value)
  }

  const validKindPet = (kindPet) => {
    const withOutSpaceKind = kindPet.trim();
    if (withOutSpaceKind.length >= 3) {
      return true
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta. Tipo de mascota muy corto");
      return false;
    }

  }

  const validNamePet = (namePet) => {
    const withOutSpaceName = namePet.trim();
    if (withOutSpaceName.length >= 6) {
      return true
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta. Nombre de mascota muy corto");
      return false;
    }

  }

  const complepleteInput = (kindPet, namePet) => {
    if (kindPet === "" || namePet === "") {
      setErrorSelect("Te faltan campos por completar")
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const isKindValid = validKindPet(kindPet);
    const isNameValid = validNamePet(namePet);

    const isCompleteInput = complepleteInput(kindPet, namePet);

    if (isKindValid && isNameValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("")
    }



  }

  return (
    <div className="App">
      <h1>Cuentanos mas de tu mascota</h1>
      <form onSubmit={handleSubmit}>
        <label>Tipo de mascota</label>
        <input type="text" placeholder='Digita el tipo de mascota' value={kindPet} onChange={onChangeKindPet} />
        <label>Nombre de mascota</label>
        <input type="text" placeholder='Digita el nombre de la mascota' value={namePet} onChange={onChangeNamePet} />
        <input type="submit" value="Imprimir mascota"></input>
      </form>

      <div className="error">{errorSelect}</div>

      {send && <Card kindPet={kindPet} namePet={namePet} />}

    </div>
  );
}

export default App;
