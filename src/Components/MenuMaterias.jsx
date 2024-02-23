import React, { useState } from 'react'
import jsonData from '../data.json';
import jsonAll from '../dataAll.json';
import './Style/MenuMaterias.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
export const MenuMaterias = ({ handleGroup, materiasSelect }) => {

  const [isDesplegatedCarrera, setIsDesplegatedCarrera] = useState(Array(jsonAll.carreras.length).fill(false));

  const changeDesplegated = (url) => {
    let arrayUrl = url.split('-');
    console.log("cambiar" + arrayUrl[1]);
    let aux = isDesplegatedCarrera.slice();
    aux[Number(arrayUrl[1])] = !aux[Number(arrayUrl[1])];
    console.log(aux);
    setIsDesplegatedCarrera(aux);
  }
  const desplegarGrupos = (url) => {
    let element = document.getElementById(url).nextSibling
    if(document.getElementById(url).nextSibling.classList.contains("show")){
      element.classList.remove('show')
    }else{
      element.classList.add('show')
    }
    
    
    console.log("desplegar grupos", element.classList)
  }
  return (
   <>
      {jsonAll.carreras.map((ca, indexc) =>
        <div className='ctn' key={indexc}>

          <div className='ctn-carrara-all' onClick={() => changeDesplegated("c-" + indexc)}>
            <div className='ctn-carrera'>{ca.carrera} </div>
            <div ><FontAwesomeIcon icon={faAngleDown} /></div>
          </div>
          {isDesplegatedCarrera[indexc] ? jsonAll.carreras[indexc].materias.map((ma, indexm) =>
            <div>
              <div className='ctn-materia' id={'c-' + indexc + '-m-' + indexm} onClick={()=>desplegarGrupos('c-' + indexc + '-m-' + indexm)}>
                <div><spam>{ma.nivel} : </spam>{ma.nombre}</div>
                <div ><FontAwesomeIcon icon={faAngleDown} /></div>
              </div>
              <div className='ctn-grupos'>
                
                {jsonAll.carreras[indexc].materias[indexm].grupos.map((gr, indexg) =>

                  materiasSelect.includes("c-" + indexc + "-m-" + indexm + "-g-" + indexg)

                    ? <div key={indexg} className='ctn-grupo selected' onClick={() => handleGroup("c-" + indexc + "-m-" + indexm + "-g-" + indexg)} id={"c-" + indexc + "-m-" + indexm + "-g-" + indexg}><span className='spam-selected'>{gr.grupo}</span> : {gr.docente}</div>

                    : <div className='ctn-grupo' key={indexg} onClick={() => handleGroup("c-" + indexc + "-m-" + indexm + "-g-" + indexg)} id={"c-" + indexc + "-m-" + indexm + "-g-" + indexg}> <span>{gr.grupo} : </span>{gr.docente}</div>)

                }
              </div>

            </div>) : <></>}
        </div>)

      }

    </>

  )
}
