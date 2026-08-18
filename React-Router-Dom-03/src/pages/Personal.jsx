import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Personal = () => {

    // const subjects = ["PF","Islamiyat","English","Math","DLD","PakStudy"]
    const [subjects, setSubjects] = useState(["PF","Islamiyat","English","Math","DLD","PakStudy"])
    return (
        <>
            <ol>
                {subjects.map(ele=>(
                    <li key={ele.key}>
                        <Link to={`/dashboard/personal/${ele}`}>{ele}</Link>
                    </li>
                ))}
            </ol>
        </>
    )
}

export default Personal
