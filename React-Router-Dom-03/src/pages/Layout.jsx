import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/dashboard/personal'}>Personal</Link>
                </li>
                <li>
                    <Link to={'/dashboard/public'}>Public</Link>
                </li>
                <li>
                    <Link to={'/dashboard/groups'}>Groups</Link>
                </li>
            </ul>
        </>
    )
}

export default Layout
