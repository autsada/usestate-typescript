import React, { ChangeEvent, useState, FormEvent } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState<number | string>('')
  const [smoke, setSmoke] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') setName(e.target.value)
    else if (e.target.name === 'email') setEmail(e.target.value)
    else if (e.target.name === 'age') setAge(+e.target.value)
    else if (e.target.name === 'smoke')
      setSmoke(e.target.value === 'true' ? true : false)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(name, email, age, smoke)
  }

  return (
    <div className='App'>
      <form className='form' onSubmit={onSubmit}>
        <div className='input-container'>
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>

        <div className='input-container'>
          <label htmlFor='Email'>Email</label>
          <input
            type='text'
            placeholder='Your email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>

        <div className='input-container'>
          <label htmlFor='Age'>Age</label>
          <input
            type='number'
            placeholder='Your age'
            name='age'
            value={age}
            onChange={onChange}
          />
        </div>

        <div className='input-container'>
          <label htmlFor='Smoke'>Do you smoke?</label>
          <div>
            <label htmlFor='Yes'>
              <input
                type='radio'
                name='smoke'
                value='true'
                onChange={onChange}
              />
              yes
            </label>
            <label htmlFor='No'>
              <input
                type='radio'
                name='smoke'
                value='false'
                onChange={onChange}
              />
              no
            </label>
          </div>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
