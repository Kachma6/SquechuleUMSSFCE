import { useState } from 'react'

import './App.css';
import jsonData from "./data.json";
import { SubjectSquechule } from './Components/subjectSquechule';
import { ContainerSubjects } from './Components/ContainerSubjects';
const colors = [
  "#C82A54","#E3682C","#E69DEB","#BBA98B","#109DFA","#23BAC4","#A58ABF","#E3B075","#FFF293","#C9DC92","#99E6D8","#FEAEBB","#109DFA","#AEDAE2",
]
function App() {

  // console.log(jsonData["materias"]);
  // console.log(jsonData.materias[0].grupos);
  // console.log(jsonData.materias[0].grupos[0].horarios);
  // console.log(jsonData.materias[0].grupos[0].horarios[0][0]);
  // console.log(jsonData);


  const [squechule, setSquechule] = useState([[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]);

  const horas = ["06:45","08:15","09:45","11:45","12:45","14:45","15:45","17:45","18:45","20:45"]
  console.log(squechule);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};
  const handleGroup = (url) => {
    let arrayUrl = url.split('-')
    let materia = jsonData.materias[Number(arrayUrl[1])]
    let horarios = jsonData.materias[Number(arrayUrl[1])].grupos[Number(arrayUrl[3])].horarios;
    const aux = squechule.slice();
    const color =colors[ randomNumberInRange(0,14)];
    console.log(arrayUrl)
    for(let i = 0;i<horarios.length;i++){
      let arrayHorario = horarios[i]
      let casilla = {
        "title": materia.nombre,
        "room":arrayHorario[3],
        "group": jsonData.materias[Number(arrayUrl[1])].grupos[Number(arrayUrl[3])].grupo,
        "color": color
      }
      console.log(casilla);
      if( aux[arrayHorario[1]][arrayHorario[0]] == null){
        aux[arrayHorario[1]][arrayHorario[0]] = [ casilla ]
        console.log("crea una nuevo celda",aux[arrayHorario[1]][arrayHorario[0]])
      }else{
        let contenido = aux[arrayHorario[1]][arrayHorario[0]];
        aux[arrayHorario[1]][arrayHorario[0]]=[...contenido, casilla];
        console.log("else entro al",aux[arrayHorario[1]][arrayHorario[0]])
        
      }
    }
    setSquechule(aux)
      
  }
  return (
    <>
      <h1>Lista de Materias</h1>
      <div>
        {jsonData["materias"].map((ma, index) =>
        <div>
           <a href={"m-"+index+""}>{ma.nombre}</a>
           {jsonData.materias[index].grupos.map((grup, i)=><div className='grupo' onClick={()=>handleGroup("m-"+index+"-g-"+i)} id={"m-"+index+"-g-"+i}>{grup.docente}</div>)}
        </div>)}
      </div>
      <table>
        <tr>
          <th>Horario</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sabado</th>

        </tr>
      
        {
          squechule.map((fila, index)=>
            <tr>
               <td>{horas[index]}</td>
              <td><ContainerSubjects subjects={fila[0]}/></td> 
              <td><ContainerSubjects subjects={fila[1]}/></td> 
              <td><ContainerSubjects subjects={fila[2]}/></td> 
              <td><ContainerSubjects subjects={fila[3]}/></td> 
              <td><ContainerSubjects subjects={fila[4]}/></td> 
              <td><ContainerSubjects subjects={fila[5]}/></td> 
            
            </tr>
          )

        
        }
       
       


      </table>



    </>
  )
}

export default App
