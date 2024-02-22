import React from 'react'
import { SubjectSquechule } from './subjectSquechule'

export const ContainerSubjects = ({subjects}) => {
  return (
    <div>
        {subjects !== null ? subjects.map((subject)=><div>
            <SubjectSquechule object={subject}/>
        </div>):<div></div>}
    </div>
  )
}
