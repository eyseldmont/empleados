import { useState } from 'react'
import './App.scss'
import Employee from './components/employee'

function App() {
  
  return (
  ///List
  <>
    <div className='main-container'>
      <div className='top-bar'>
        <h1>Employees</h1>
      </div>
      
      <div className='list-container'>
        <Employee/>
        <Employee/>
        <Employee/>
        
      </div>

      <button type="button" className='add-button'>
        <h1>Add Employee</h1>
      </button>
      
    </div> 
  </>
  )
}

export default App
