import React, { useEffect } from 'react'
import './UseEffect.css';

export const UseEffectComponent = () => {
  useEffect(e => {
    console.log("USE EFECT COMPONENT CARGADO");

    return () => {
    console.log("USE EFECT COMPONENT ELIMINADO")
      
    }

  }, [])
  return (
    <div className='Use-effect-component'>Bienvenido Iván René</div>
  )
}
