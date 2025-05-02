import './App.css'
import { Persona } from './Modelos/Persona';

import PersonaComponent from './Componentes/PersonaComponent';

function App() {
  const detallePersona: Persona = {
    nombre: 'Ana',
    ocupacion: 'Flores',
    pais: '08980809'
  };

  let listaPersonas: Persona[] = [];
  listaPersonas.push(detallePersona);


  listaPersonas.push({
    nombre: 'Juan',
    ocupacion: 'Maestro',
    pais: 'Honduras'
  },
    {
      nombre: 'Wilmer',
      ocupacion: 'Estudiante',
      pais: 'Honduras'
    })
  return (
    <>  {listaPersonas.map((item, index) => (

      <PersonaComponent
          key={index}
          nombre={item.nombre}
          ocupacion={item.ocupacion}
          pais={item.pais}
        />
    ))
    }

    </>





  )
}

export default App
