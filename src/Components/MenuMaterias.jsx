import React from 'react'
import jsonData from '../data.json';
import './Style/MenuMaterias.css'
export const MenuMaterias = ({handleGroup, materiasSelect}) => {
    function esMateriaSelected(){

    }
  return (
    // <>
    //  {jsonData["materias"].map((ma, index) =>
    //     <div className='ctn'>
    //        <div className='ctn-materia'><a href={"m-"+index+""}>{ma.nombre}</a></div>
    //        {jsonData.materias[index].grupos.map((grup, i)=><div className='ctn-grupo' onClick={()=>handleGroup("m-"+index+"-g-"+i)} id={"m-"+index+"-g-"+i}>{grup.docente}</div>)}
    //     </div>)}
    // </>
    <>
    {jsonData["materias"].map((ma, index) =>
       <div className='ctn'>
          <div className='ctn-materia'><a href={"m-"+index+""}>{ma.nombre}</a></div>
          {jsonData.materias[index].grupos.map((grup, i)=>materiasSelect.includes("m-"+index+"-g-"+i)?<div className='ctn-grupo selected' onClick={()=>handleGroup("m-"+index+"-g-"+i)} id={"m-"+index+"-g-"+i}>{grup.docente}</div> 
          :<div className='ctn-grupo' onClick={()=>handleGroup("m-"+index+"-g-"+i)} id={"m-"+index+"-g-"+i}>{grup.docente}</div>)}
       </div>)}
   </>
  )
}
