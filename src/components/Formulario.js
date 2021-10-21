import React,{useState,useEffect} from 'react'
import { PopUp } from './PopUp'
let usuarios = require('../data/data.json')
export const Formulario = () => {
  const [state, setstate] = useState()
  const [msg, setmsg] = useState('')
  const [correo, setcorreo] = useState('')
  const [check, setcheck] = useState(false)
  useEffect(() => {
    if(msg !== ''){
      setstate(true)
    }
  }, [msg])
  const handleInputChange = ({target}) => {
    setcorreo(target.value)
  }
  const handleInputCheckChange = ({target})=>{
  
    setcheck(target.checked)
  }
  const politicasOpen= (e)=>{
    e.preventDefault()
    setmsg('Politicas cargando...')
    setstate(true)
  }
  const login = (e)=>{
    e.preventDefault()
    if(!check){
      setmsg('Por favor aceptar terminos y condiciones')
    }
    else{ 
      let usuario = usuarios.data.find(usuario => usuario.usuario == correo)
      if(usuario){
        setmsg(`Felicidades su correo ${correo} ya esta registrado`)
        setstate(true)
      }
      else{
        setmsg(`Su correo ${correo} es incorrecto`)
        setstate(true)
      }
    }
  }
    
  
  return (
    <div className="content__form">
      <div>
        <span>¡Bienvenido al CX una experiencia digital Festival,</span>
        <span>completamente salida de la caja !</span>
        <br />
        <br />
        <span className="blue">Diviértete y aprende de la mano de gúrus </span>
        <span className="blue">
          y expertos digitales en estos tres días festival.
        </span>
      </div>
      <div>
        <form onSubmit={login}>
          <span>Ingresa a esta experiencia con tu correo corporativo</span>
          <input
            type="email"
            placeholder="Correo electrónico"
            onChange={handleInputChange}
            className="input__login"
            value={correo}
            required
            disabled={!check}
          />
          <button>
            <span>Ingresar</span>
          </button>
          <div className="content__checkbox">
            <input
              type="checkbox"
              className="input__check"
              id="check"
              onChange={handleInputCheckChange}
            />
            <label for="check">
              
              Para ver la politica de los datos haga clic{" "}
              <a href="" onClick={politicasOpen}>
                aqui
              </a>
            </label>
         
          </div>
        </form>
      </div>
      {state && <PopUp mensaje={msg} setState={setstate} />}
    </div>
  );
}
