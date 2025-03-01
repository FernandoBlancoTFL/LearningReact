import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

const Button = ({text}) => {
  return <button>{text}</button>
}

root.render(
  <React.Fragment>
    <Button text = 'Boton 1'/>
    <Button text = 'Boton 2'/>
    <Button text = 'Boton 3'/>
  </React.Fragment>
);

