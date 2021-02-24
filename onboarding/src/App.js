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
  tos: false
}


function App() {
  // State Hooks
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  // axios call
  // useEffect(() => {
  //   const newUser = {
  //     name: 'George Bluth',
  //     email: 'arrested@development.com'
  //   }
  //   axios.post('https://reqres.in/api/users', newUser)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => 
  //       console.log("Axios Call Error:", err)
  //     )
  // }, [])

  // useEffect(() => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => 
  //       console.log("Axios Call Error:", err)
  //     )

  // }, [])

  ////Event Handlers///
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  };


  const formSubmit = () => {

  };

  return (
    <div className="App">
      <Form values={formValues}
        change={inputChange}
        submit={formSubmit}  
      />

      <div className="user-list">
        {users.map(user => <h4>user.name</h4>)}
      </div>      
    </div>
  );
}

export default App;
