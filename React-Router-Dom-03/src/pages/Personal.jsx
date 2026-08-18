import React, { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
const Personal = () => {

    // const subjects = ["PF","Islamiyat","English","Math","DLD","PakStudy"]
    const [subjects, setSubjects] = useState(["PF", "Islamiyat", "English", "Math", "DLD", "PakStudy"])
    const { section } = useParams()
    return (
        <>
            <ol>
                {subjects.map(ele => (
                    <li key={ele}>
                        <Link to={`/dashboard/${section}/${ele}`}>{ele}</Link>
                    </li>
                ))}
            </ol>
        </>
    )
}

export default Personal
