import React from 'react'
import './App.css'
import Data from './Data'

function App() {
return (
    <div className='container'>
    <h1 className='heading'>EMPLOYEE  DATA</h1>
    <ul className='comments-container'>
    {Data.map((eachcomment)=>{
      const {email,name,body} =eachcomment
      return <li className='comment'>
      <div className='comment-header'>
      <h3 className='mail'> {email} </h3>
      <h3 className='name'> {name} </h3>
      </div>
      <p className='para'>{body}</p>
      </li>
    })}
    </ul>
    </div>
  )
}

export default App
