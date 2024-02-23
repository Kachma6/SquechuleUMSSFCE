import { useState } from 'react'
import './App.css';
import jsonData from "./data.json";
import jsonAll from './dataAll.json'
import { ContainerSubjects } from './Components/ContainerSubjects';
import { MenuMaterias } from './Components/MenuMaterias';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
const colors = [
  "#C82A54", "#E3682C", "#E69DEB", "#BBA98B", "#109DFA", "#23BAC4", "#A58ABF", "#E3B075", "#FFF293", "#C9DC92", "#99E6D8", "#FEAEBB", "#109DFA", "#AEDAE2",
];
const horas = ["06:45", "08:15", "09:45", "11:45", "12:45", "14:45", "15:45", "17:45", "18:45", "20:45"];
function App() {
  const [squechule, setSquechule] = useState([[null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null]]);

  const [materiasSelected, setMateriasSelected] = useState([]);
  const [isDesplegated, setIsDesplegated]= useState(true);

  const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


  const handleGroup = (url) => {

    const aux = squechule.slice();
    let arrayUrl = url.split('-')
    if (materiasSelected.includes(url)) {

      let datosFiltrados = materiasSelected.filter(item => item != url);
      let materia = jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])]
      setMateriasSelected(datosFiltrados);
      let ArrayHorarios = jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])].grupos[Number(arrayUrl[5])].horarios;
      for (let i = 0; i < ArrayHorarios.length; i++) {
        let arrayHorario = ArrayHorarios[i]
        let contenido = aux[arrayHorario[1]][arrayHorario[0]];
        if (contenido.find((mat) => mat.title === materia.nombre && mat.group === jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])].grupos[Number(arrayUrl[5])].grupo)) {
          let datosFil = contenido.filter(item => item.title != materia.nombre && item.group != jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])].grupos[Number(arrayUrl[5])].grupo)
          aux[arrayHorario[1]][arrayHorario[0]] = datosFil;
        }
      }

    } else {

      let materia = jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])]
      let horarios = jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])].grupos[Number(arrayUrl[5])].horarios;

      const color = colors[randomNumberInRange(0, 14)];

      for (let i = 0; i < horarios.length; i++) {
        let arrayHorario = horarios[i]
        let casilla = {
          "title": materia.nombre,
          "room": arrayHorario[3],
          "group": jsonAll.carreras[Number(arrayUrl[1])].materias[Number(arrayUrl[3])].grupos[Number(arrayUrl[5])].grupo,
          "color": color
        }
        if (aux[arrayHorario[1]][arrayHorario[0]] == null) {
          aux[arrayHorario[1]][arrayHorario[0]] = [casilla]

        } else {
          let contenido = aux[arrayHorario[1]][arrayHorario[0]];
          if (!contenido.find((mat) => mat.title === casilla.title && mat.group === casilla.group)) {
            aux[arrayHorario[1]][arrayHorario[0]] = [...contenido, casilla];
          }

        }
      }
      setMateriasSelected([...materiasSelected, url]);

    }
    setSquechule(aux)

  }

  
  return (
    <div className='ctn-app'>

      <div className='ctn-header'>
        <h1>Mi Horario </h1>
       
        <button className={isDesplegated?"menu-responsive-der hidden":"menu-responsive-der"} onClick={()=>setIsDesplegated(!isDesplegated)}>{"<"}</button>
        <button className="menu-responsive-izq" onClick={()=>setIsDesplegated(!isDesplegated)}>{">"}</button>
      </div>
      <div className='ctn-main'>
      <div className={isDesplegated?'ctn-menu desplegado':'ctn-menu'}>
      
        <MenuMaterias handleGroup={handleGroup} materiasSelect={materiasSelected} />
      </div>
      <div className='ctn-squechule'>
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
            squechule.map((fila, index) =>
              <tr key={index}>
                <td key={index+"a"}>{horas[index]}</td>
                <td key={index+"b"}><ContainerSubjects subjects={fila[0]} /></td>
                <td key={index+"c"}><ContainerSubjects subjects={fila[1]} /></td>
                <td key={index+"d"}><ContainerSubjects subjects={fila[2]} /></td>
                <td key={index+"e"}><ContainerSubjects subjects={fila[3]} /></td>
                <td key={index+"f"}><ContainerSubjects subjects={fila[4]} /></td>
                <td key={index+"g"}><ContainerSubjects subjects={fila[5]} /></td>

              </tr>
            )
          }
        </table>
      </div>
      </div>
     

    </div>
  )
}

export default App
