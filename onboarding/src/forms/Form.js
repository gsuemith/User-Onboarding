import React from 'react'
import '../App.css'

const Form = ({ values, change, submit }) => {
    ///handlers///
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        change(name, type == 'checkbox' ? checked:value)
    }

    return (
        <form>
            <label>
                Name:
                <input 
                    type="text"
                    name="name"
                    onChange={onChange}
                />
            </label>

            <label>
                Email:
                <input 
                    type="email"
                    name="email"
                    onChange={onChange}
                />
            </label>
            
            <label>
                Password:
                <input 
                    type="text"
                    name="password"
                    onChange={onChange}
                />
            </label>
            
            <label>
                I Agree to the Terms of Service.
                <input 
                    type="checkbox"
                    name="tos"
                    onChange={onChange}
                />
            </label>

            <button>Submit</button>
        </form>
    )
}

export default Form
