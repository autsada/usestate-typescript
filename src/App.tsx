import React, { ChangeEvent, FormEvent, useState } from 'react'

import './App.css'

const initialState = {
  name: '',
  email: '',
  age: '',
  smoke: false,
}

function App() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState<number | string>('')
  // const [smoke, setSmoke] = useState(false)
  const [userInfo, setUserInfo] = useState(initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // if (e.target.name === 'name') setName(e.target.value)
    // if (e.target.name === 'email') setEmail(e.target.value)
    // if (e.target.name === 'age') setAge(+e.target.value)
    // if (e.target.name === 'some')
    //   setSmoke(e.target.value === 'true' ? true : false)

    e.persist()

    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(userInfo)
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
            value={userInfo.name}
            onChange={onChange}
          />
        </div>

        <div className='input-container'>
          <label htmlFor='Email'>Email</label>
          <input
            type='text'
            placeholder='Your email'
            name='email'
            value={userInfo.email}
            onChange={onChange}
          />
        </div>

        <div className='input-container'>
          <label htmlFor='Age'>Age</label>
          <input
            type='number'
            placeholder='Your age'
            name='age'
            value={userInfo.age}
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
