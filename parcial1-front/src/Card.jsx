import React from 'react'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({kindPet,namePet}) => {
  return (
    <div>
      <h2>Tipo de la mascota: {kindPet}</h2>
      <h2>Nombre de la mascota: {namePet}</h2>
    </div>
  );
}

export default Card;
