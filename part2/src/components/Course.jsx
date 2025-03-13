import React from 'react'

const Course = (props) => {
    const courses = props.course;
    console.log(courses);
    
    
    return (
        <div>
            {courses.map((course)=>{
                return (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <ul>
                        {course.parts.map((part)=>{
                            return (
                            <li key={part.id}>{part.name} {" "} {part.exercises}</li>
                            )
                        })}
                    </ul>
                    <p>exercises <strong>{course.parts.reduce((sum,val)=> sum+val.exercises,0)}</strong></p>
                </div>
                )
            })}
            
        </div>
    )
}

export default Course