import React, { useState } from 'react';

function App() {

  const [ nombre, cambiarNombre ] = useState('No tiene nombre')

  function eventoCajaTexto(e){
    cambiarNombre(e.target.value)
  }

  return (
    <div>
      <h1>Bienvenidos al curso de ASP.NET Core y React Hooks {nombre}</h1>
      <input name="nombre" type="text" value={nombre} onChange={eventoCajaTexto} />
    </div>
  );
}

export default App;
