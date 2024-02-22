import React from 'react'
import './Style/subjectSquechule.css';

export const SubjectSquechule = ({object}) => {

 
  return (
    < >
   
      {
        object == null? <div></div>:
        <div  className='subject' style={{background:object.color}}>
            <div>{object == null? null:object.title}</div>
           <div>Aula:{object == null? null:object.room}</div>
          <div>Gp:{object == null? null:object.group}</div>
        </div>
      }
       
    </>
  )
}
