import React from 'react'

export const PopUp = ({mensaje,setState}) => {

  
  return (
    <div className="overlay">
      <div className="content__popup">
        <i className="far fa-window-close icono__close fa-2x"  onClick={()=> setState(false)}></i>
        <h3>{mensaje}</h3>
      </div>
    </div>
  );
}
