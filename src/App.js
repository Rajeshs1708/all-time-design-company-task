import './App.css'
import EditTask from './EditTask'
import Task from './Task'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='app m-5'>
        <Routes>
          <Route path='/' element={<Task />} exact={true} />
          <Route path='/editTask' element={<EditTask />} exact={true} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
