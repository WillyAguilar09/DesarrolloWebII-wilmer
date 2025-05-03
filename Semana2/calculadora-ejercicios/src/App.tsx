
import './App.css'

function App() {
 
  let dias: string[] = []; // arreglo vacio para dias
  let horas: number[] = []; // arreglo vacio para Horas
  dias.push("Lunes"); horas.push(2);
  dias.push("Martes"); horas.push(0);
  dias.push("Miercoles"); horas.push(2);
  dias.push("Jueves"); horas.push(3);
  dias.push("Viernes"); horas.push(1);
  dias.push("Sabado"); horas.push(3);
  dias.push("Domingo"); horas.push(0);
  const suma = horas.reduce((acumulador, valor) => acumulador + valor, 0);
  const promedio = suma / horas.length;

  function objetivo(promedio:number){
    if (promedio<1){
      return "El resultado es bastante deplorable"
    }else if(promedio<=3){
      return "Estas siguiendo buena Rutina Sigue asi"
    }else {
      return "Eres una Maquina adicta al Ejercicio, Cuidate de las lesiones"
    }

  }

  return (
    <>
        <div>
          ho{dias.map((item,index)=>(
            <li key={index}>{item}: {horas[index]} horas</li>
          ))}
          El promedio de horas durante esta semana es de: {promedio.toFixed(1)}
          <br />
          la clasificacion de tu rendimiento es: {objetivo(promedio)}
        </div>

    </>
  )
}

export default App
