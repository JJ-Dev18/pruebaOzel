import React from 'react'
const imagenes = require.context("../img",true)
export const Portada = () => {
  return (
    <div className="content__portada">
      <div className="content__logo">
        <img src={imagenes(`./logo.png`).default} alt="Logo" />
      </div>
      <div className="content__webinar">
        <img src={imagenes(`./webinar.png`).default}alt="" />
      </div>
    </div>
  );
}
