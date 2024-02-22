import React from 'react'
import { SubjectSquechule } from './subjectSquechule'
import './Style/ContainerSubjects.css'
export const ContainerSubjects = ({subjects}) => {
  return (
    <> 
        {subjects !== null ? <div className={subjects.length >1 ?"sub crashed":"sub"}>
          {subjects.map((subject)=><div >
            <SubjectSquechule object={subject}/>
        </div>)}
        </div>:<div></div>}
    </>
  )
}
