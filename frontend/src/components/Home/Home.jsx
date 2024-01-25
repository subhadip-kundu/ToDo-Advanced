import React from 'react'
import './Home.css'
import writing from '../../assets/writingTodo.png'

function Home() {
    return (
            <div className="container home flex-column flex-sm-row">
                <div className="left w-50 mb-5">
                    <h1>
                        Organize your  <br /> work and life, finally.
                    </h1>
                    <p>Become focused, organized, and calm with todo app.<br />  The world's <span className='text-danger'> #1</span> task manager app.</p>
                    <button className='btn btn-success'>Make ToDo List</button>
                </div>
                <div className="right w-50 mt-5">
                    <img className='w-100 ' src={writing} alt="" />
                </div>
            </div>
    )
}

export default Home;