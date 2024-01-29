import React from 'react'
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoCards({ title, body, id, delid,display,updateId,toBeUpdate }) {

    return (
        <div className='px-3 pt-3 pb-1 card-wrapper'>
            <div>
                <h5>{title}</h5>
                <p className='task-desciption'>
                    {body.split("", 77)}
                    ...</p>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-1 px-1">
                <div onClick={() => { display("flex"); toBeUpdate(updateId) }}>
                    <GrDocumentUpdate className='update' role='button' />
                </div>
                <div onClick={() => { delid(id); }}>
                    <RiDeleteBin6Line className='delete' role='button' />
                </div>
            </div>
        </div>
    )
}

export default TodoCards;