import React from 'react'
import '../App.css'

const Form = ({ values, change, submit, errors, disabled }) => {
    ///handlers///
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        change(name, type == 'checkbox' ? checked:value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name: <strong>{errors.name}</strong>
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
            </label>

            <label>
                Email: <strong>{errors.email}</strong>
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            
            <label>
                Password: {errors.password}
                <input 
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                />
            </label>
            
            <label>
                I Agree to the Terms of Service. {errors.tos}
                <input 
                    type="checkbox"
                    name="tos"
                    checked={values.tos}
                    onChange={onChange}
                />
            </label>

            <button disabled={disabled}>Submit</button>
        </form>
    )
}

export default Form
