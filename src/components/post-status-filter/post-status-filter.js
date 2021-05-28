import React from 'react'
import './post-status-filter.css'

const PostStatusFilter = ()=>{
    return(
        <div className='btn-group'>
            <button className='btn btn-info' >Всё</button>
            <button className='btn btn-outline-secondary '>Понравилось</button>
        </div>
    )
}
export default PostStatusFilter;