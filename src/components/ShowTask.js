import React from 'react'

export const ShowTask = () => {
  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>0</span>
            </div>
            <button className='clearAll'>Clear All</button>
        </div>
        <ul>
            <li>
                <p>
                    <span className='name'>Task A</span>
                    <span className='time'>2:09:01 AM 3/25/2023</span>
                </p>
                <i className='bi bi-pencil-square'></i>
                <i className='bi bi-trash'></i>
            </li>
            <li>
                <p>
                    <span className='name'>Task A</span>
                    <span className='time'>2:09:01 AM 3/25/2023</span>
                </p>
                <i className='bi bi-pencil-square'></i>
                <i className='bi bi-trash'></i>
            </li>            <li>
                <p>
                    <span className='name'>Task A</span>
                    <span className='time'>2:09:01 AM 3/25/2023</span>
                </p>
                <i className='bi bi-pencil-square'></i>
                <i className='bi bi-trash'></i>
            </li>            <li>
                <p>
                    <span className='name'>Task A</span>
                    <span className='time'>2:09:01 AM 3/25/2023</span>
                </p>
                <i className='bi bi-pencil-square'></i>
                <i className='bi bi-trash'></i>
            </li>
        </ul>
    </section>
  )
}
