import './App.css';
import { useState, useEffect } from 'react'

import Form from './forms/Form'
import schema from './forms/FormSchema'
import * as yup from 'yup'
import axios from 'axios'



// Initial form values
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  // password2: '',
  role: '',
  age: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  role: '',
  age: '',
  tos: '',
}


function App() {
  // State Hooks
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  // axios call
  const postNewUser = newUser => {
       axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res)
        setUsers([res.data, ...users])
        schema.fields.email._blacklist.list.add(res.data.email)
      })
      .catch(err => 
        console.log("Axios Call Error:", err)
      )
  }

  ////Event Handlers///
  const inputChange = (name, value) => {
    // schema.fields.email._blacklist.list.add(value)
    // console.log(schema.fields)
    yup.reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })

    setFormValues({...formValues, [name]: value})
  };


  const formSubmit = () => {
    
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    }
    console.log(newUser)
    postNewUser(newUser)
  };

  //Enable Submit when schema is valid
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        console.log(valid, formValues)
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <Form values={formValues}
        change={inputChange}
        submit={formSubmit} 
        errors={formErrors}
        disabled={disabled} 
      />

      <div className="user-list">
        {users.map(user => <h4 key={user.id}>{user.name} id:{user.id}</h4>)}
      </div>      
    </div>
  );
}

export default App;
