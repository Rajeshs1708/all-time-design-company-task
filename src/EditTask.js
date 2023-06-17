import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { TaskList } from './TaskList'

function EditTask () {
  const history = useNavigate()

  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [user, setUser] = useState('')
  const [id, setId] = useState('')

  var index = TaskList.map(function (e) {
    return e.id
  }).indexOf(id)
  const handleEdit = e => {
    e.preventDefault()
    let a = TaskList[index]
    a.description = description
    a.date = date
    a.time = time
    a.user = user
    history('/')
  }

  useEffect(() => {
    setDescription(localStorage.getItem('description'))
    setDate(localStorage.getItem('date'))
    setTime(localStorage.getItem('time'))
    setUser(localStorage.getItem('user'))
    setId(localStorage.getItem('id'))
  }, [])
  return (
    <form>
      <div className='row'>
        <div className='mb-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <label htmlFor='exampleInputDescription' className='form-label'>
            Task Description
          </label>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            type='text'
            className='form-control'
            id='exampleInputDescription'
            aria-describedby='emailHelp'
          />
        </div>
      </div>

      <div className='row'>
        <div className='mb-3 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
          <label htmlFor='exampleInputDate' className='form-label'>
            Date
          </label>
          <input
            value={date}
            onChange={e => setDate(e.target.value)}
            type='date'
            className='form-control'
            id='exampleInputDate'
          />
        </div>
        <div className='mb-3 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
          <label htmlFor='exampleInputTime' className='form-label'>
            Time
          </label>
          <input
            value={time}
            onChange={e => setTime(e.target.value)}
            type='time'
            className='form-control'
            id='exampleInputTime'
            placeholder='Time'
          />
        </div>
      </div>

      <div className='row'>
        <div className='mb-3'>
          <label htmlFor='exampleInputAssignUser' className='form-label'>
            Assign User
          </label>
          <input
            value={user}
            onChange={e => setUser(e.target.value)}
            type='text'
            className='form-control'
            id='exampleInputAssignUser'
          />
        </div>
      </div>

      <div className='row'>
        <div className='mb-3 col-lg-9 col-md-9 col-sm-9 col-xs-9'></div>
        <div className='mb-3 col-lg-3 col-md-3 col-sm-3 col-xs-3'>
          <button type='cancel' className='btn btn-secondary m-2'>
            Cancel
          </button>
          <button
            onClick={handleEdit}
            type='submit'
            className='btn btn-primary'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default EditTask
