import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DoneIcon from '@mui/icons-material/Done'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { TaskList } from './TaskList'
import { v4 as uuid } from 'uuid'

function Task () {
  const history = useNavigate()

  const [showForm, setShowFrom] = useState(false)

  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [user, setUser] = useState('')
  // const [id, setId] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const ids = uuid()
    let uniqueId = ids.slice(0, 8)

    TaskList.push({
      id: uniqueId,
      description: description,
      date: date,
      time: time,
      user: user
    })
    setDescription('')
    setDate('')
    setTime('')
    setUser('')
    history('/')
  }

  const handleEdit = (description, date, time, user, id) => {
    localStorage.setItem('description', description)
    localStorage.setItem('date', date)
    localStorage.setItem('time', time)
    localStorage.setItem('user', user)
    localStorage.setItem('id', id)
    setShowFrom(val => !val)
  }
  const handleDelete = id => {
    var index = TaskList.map(function (e) {
      return e.id
    }).indexOf(id)
    TaskList.splice(index, 1)
    history('/')
  }

  return (
    <>
      <div className='container' style={{ width: '60%' }}>
        <div className='row header'>
          <h3 className='col-lg-11 col-md-11 col-sm-11 col-xs-11'>
            TASKS <span>{TaskList.length}</span>
          </h3>
          <h3
            className='col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center plus'
            onClick={() => setShowFrom(val => !val)}
          >
            +
          </h3>
        </div>

        <div
          className='row content'
          style={{ display: `${showForm ? 'block' : 'none'}` }}
        >
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='mb-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='exampleInputDescription' className='form-label'>
                  Task Description
                </label>
                <input
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
                  onClick={() => setShowFrom(val => !val)}
                  type='submit'
                  className='btn btn-primary'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className='dataList'>
          <ul className='list-group'>
            {TaskList && TaskList.length > 0
              ? TaskList.map(li => (
                  <li className='list-group-item'>
                    <div className='collection'>
                      <div className='profile'>
                        <AccountCircleIcon
                          style={{ fontSize: '50px', color: 'lightblue' }}
                        />
                      </div>
                      <div className='heading'>
                        <h4>{li.description}</h4>
                        <p>
                          {li.date} at {li.time}am
                        </p>
                      </div>
                      <div className='tick'>
                        <EditIcon
                          onClick={() =>
                            handleEdit(
                              li.description,
                              li.date,
                              li.time,
                              li.user,
                              li.id
                            )
                          }
                          className='m-2'
                          style={{ color: 'green', cursor: 'pointer' }}
                        />
                        <DeleteIcon
                          onClick={() => handleDelete(li.id)}
                          className='m-2'
                          style={{ color: 'red', cursor: 'pointer' }}
                        />
                        <DoneIcon
                          className='m-2'
                          style={{ color: 'blue', cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </li>
                ))
              : 'No Data Available'}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Task
