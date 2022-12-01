import React from 'react';
import {FaBug} from "react-icons/fa";

function BugInfo({bugs}) {

    return (
        <>
        <h5 className='mt-5'>Bug Information</h5>
        <ul className='list-group'>
            {bugs && bugs.map(bug => {
                return <>
                <li className='list-group-item'>
                    <FaBug className='icon' /> {bug.name}
                </li>
                <li className='list-group-item'>
                    {bug.description}
                </li>
                </>
            })}
        </ul>
        </>
    );
}

export default BugInfo;