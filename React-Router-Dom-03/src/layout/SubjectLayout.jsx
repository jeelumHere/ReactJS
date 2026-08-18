import React from 'react'
import { Link, useParams } from 'react-router-dom'
const SubjectLayout = () => {
    const { section, subject } = useParams()
    return (
        <>
            <ul>
                <li>
                    <Link to={`/dashboard/${section}/${subject}/assighnment`}>Assighnment</Link>
                </li>
                <li>
                    <Link to={`/dashboard/${section}/${subject}/quiz`}>Quiz</Link>
                </li>
                <li>
                    <Link to={`/dashboard/${section}/${subject}/notes`}>Notes</Link>
                </li>
                <li>
                    <Link to={`/dashboard/${section}/${subject}/pastPapers`}>Past Papers</Link>
                </li>
            </ul>
        </>
    )
}

export default SubjectLayout
